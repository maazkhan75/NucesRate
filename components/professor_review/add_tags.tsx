"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DrawerFooter } from "../ui/drawer";
import { BiLeftArrow } from "react-icons/bi";
import { createClient } from "@/utils/supabase/client";
import React from "react";
import { formatTagName } from "@/app/helping_functions";

type TypeTagSelector = {
  setShowTagsPage: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  handleSubmit: () => Promise<void>;
  prof_id: number;
};

export default function TagSelector({
  setShowTagsPage,
  selectedTags,
  toggleTag,
  handleSubmit,
  prof_id,
}: TypeTagSelector) {
  const supabase = createClient();
  const [tags, setTags] = React.useState<{ tag_name: string }[] | null>(null);

  async function getTagsByProfId() {
    const { data, error } = await supabase.rpc("get_tags", {});

    if (error) {
      console.error("Error fetching tags:", error.message);
      return [];
    }

    return data;
  }

  React.useEffect(() => {
    async function fetchTags() {
      setTags(null);
      const tagsData = (await getTagsByProfId()) as { tag_name: string }[];
      setTags(tagsData);
    }

    fetchTags();
  }, [prof_id]);

  return (
    <div className="p-4 space-y-8 mb-2 mt-2">
      <div className="w-full max-w-md p-6 bg-[#111] rounded-lg shadow-xl">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {tags !== null ? (
              tags.map((tag) => (
                <Button
                  key={tag.tag_name}
                  variant="outline"
                  size="sm"
                  onClick={() => toggleTag(tag.tag_name)}
                  aria-pressed={selectedTags.includes(tag.tag_name)}
                  className={`
                  transition-all
                  ${
                    selectedTags.includes(tag.tag_name)
                      ? "bg-white text-black font-semibold"
                      : "bg-[#333] text-white hover:bg-[#444]"
                  }
                `}
                >
                  {tag.tag_name}
                </Button>
              ))
            ) : (
              <Button className="mx-auto">Loading..</Button>
            )}
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 text-white">
              Selected Tags: (Max 3)
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-white text-black font-semibold"
                >
                  {formatTagName(tag)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={() => handleSubmit()}>Submit Review</Button>
          <Button onClick={() => setShowTagsPage(false)} variant="outline">
            {" "}
            <BiLeftArrow /> Back
          </Button>
        </DrawerFooter>
      </div>
    </div>
  );
}
