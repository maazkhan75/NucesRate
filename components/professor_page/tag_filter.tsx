"use client";

import * as React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createClient } from "@/utils/supabase/client";
import { NewPopoverContent } from "../ui/new_popover";
import { formatTagName } from "@/app/helping_functions";

type TagsType = {
  tag_name: string;
};

type TagFilterProps = {
  deptValue: string | null;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
};

export function TagFilter({ deptValue, value, setValue }: TagFilterProps) {
  const [open, setOpen] = React.useState(false);
  const [tags, setTags] = React.useState<TagsType[] | null>(null);
  const supabase = createClient();

  async function getTagsByDeptName(deptName: string | null) {
    const { data, error } = await supabase.rpc("get_tags_by_dept", {
      input_dept_name: deptName,
    });

    if (error) {
      console.error("Error fetching tags:", error);
      return [];
    }

    return data;
  }

  React.useEffect(() => {
    async function fetchTags() {
      setTags(null)
      const tagsData = (await getTagsByDeptName(deptValue)) as TagsType[];
      setTags(tagsData);
    }

    fetchTags();
  }, [deptValue]);


  return (
    <>
      {
        tags ?
      (
        tags.length > 0 
        ? (  // Check if courses are loaded
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="default"
                role="combobox"
                aria-expanded={open}
                className="w-[100%] justify-between"
              >
                {value
                  ? formatTagName(tags.find((tag) => tag.tag_name.trim() === value?.trim())?.tag_name!)
                  : "Select Tag..."}
                <RiArrowDropDownFill style={{ scale: "2" }} />
              </Button>
            </PopoverTrigger>
            <NewPopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search Course..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No courses found.</CommandEmpty>
                  <CommandGroup>
                    {tags.map((tag) => (
                      <CommandItem
                        key={tag.tag_name}
                        value={tag.tag_name || ""}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? null : currentValue);
                          setOpen(false);
                        }}
                      >
                        {tag.tag_name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
              </NewPopoverContent>
          </Popover>
        ) : 
        (
          <Button
            variant="default"
            role="combobox"
            aria-expanded={open}
            className="w-[100%] justify-between"
          >
            No Tag Found!
          </Button>  
        )
     ): (
      <Button
        variant="default"
        role="combobox"
        aria-expanded={open}
        className="w-[100%] justify-between"
      >
        Loading...
      </Button>  
      )
    }
    </>
  );
}
