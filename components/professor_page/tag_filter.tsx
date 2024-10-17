"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiSolidDownArrow } from "react-icons/bi";
import { createClient } from "@/utils/supabase/client";

type TagsType = {
  tag_name: string;
};

type TagFilterProps = {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
};

export function TagFilter({ value, setValue }: TagFilterProps) {
  const [tags, setTags] = React.useState<TagsType[] | null>(null);
  const supabase = createClient();

  async function getTagsByDeptName() {
    const { data, error } = await supabase.rpc("get_tags", {});

    if (error) {
      console.error("Error fetching tags:", error);
      return [];
    }

    return data;
  }

  React.useEffect(() => {
    async function fetchTags() {
      setTags(null)
      const tagsData = (await getTagsByDeptName()) as TagsType[];
      setTags(tagsData);
    }

    fetchTags();
  }, []);

  return(
    <DropdownMenu modal={true}>
      {
        tags ?
        <>
          <DropdownMenuTrigger asChild>
            <Button className="w-56 flex justify-between" variant="default">
              <span>{value ? value : 'Select Tag...'}</span>
              <BiSolidDownArrow />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 h-56">
            {
              tags?.map(tag => <DropdownMenuItem onClick={() => setValue(tag.tag_name)}><span>{tag.tag_name}</span></DropdownMenuItem>)
            }
          </DropdownMenuContent>
        </>
        :
        <DropdownMenuTrigger asChild>
          <Button className="w-56 flex justify-between" variant="default">
            <span>Loading...</span>
            <BiSolidDownArrow />
          </Button>
        </DropdownMenuTrigger>
      }
    </DropdownMenu>
  );
}