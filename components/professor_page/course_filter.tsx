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
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { createClient } from "@/utils/supabase/client";
import { NewPopoverContent } from "../ui/new_popover";

type CoursesType = {
  course_name: string;
};

type CourseFilterProps = {
  deptId: number | null;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const formatCourseName = (courseName: string) => {
  const words = courseName.split(" ");

  if (words.length <= 3) {
    return courseName;
  }

  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");

  return initials;
};

export function CourseFilter({ deptId, value, setValue }: CourseFilterProps) {
  const [open, setOpen] = React.useState(false);
  const [courses, setCourses] = React.useState<CoursesType[]>([]);
  const supabase = createClient();

  async function getCoursesByDeptId(deptId: number | null) {
    const { data, error } = await supabase.rpc("get_courses_by_dept", {
      dept_id: deptId,
    });

    if (error) {
      console.error("Error fetching courses:", error);
      return [];
    }

    return data;
  }

  React.useEffect(() => {
    async function fetchCourses() {
      const courseData = (await getCoursesByDeptId(deptId)) as CoursesType[];
      setCourses(courseData);
    }

    fetchCourses();
  }, [deptId]);

  return (
    <>
      {courses.length > 0 ? ( // Check if courses are loaded
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="default"
              role="combobox"
              aria-expanded={open}
              className="w-[100%] justify-between"
            >
              {value
                ? formatCourseName(
                    courses.find(
                      (course) => course.course_name.trim() === value?.trim()
                    )?.course_name!
                  )
                : "Select Course..."}
              <RiArrowDropDownFill style={{ scale: "2" }} />
            </Button>
          </PopoverTrigger>
          <NewPopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search Course..." className="h-9" />
              <CommandList>
                <CommandEmpty>No courses found.</CommandEmpty>
                <CommandGroup>
                  {courses.map((course) => (
                    <CommandItem
                      key={course.course_name}
                      value={course.course_name || ""}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? null : currentValue);
                        setOpen(false);
                      }}
                    >
                      {course.course_name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </NewPopoverContent>
        </Popover>
      ) : (
        <h2>Loading..</h2>
      )}
    </>
  );
}
