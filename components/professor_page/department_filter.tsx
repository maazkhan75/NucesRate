"use client"

import * as React from "react"
import { RiArrowDropDownFill } from "react-icons/ri";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiSolidDownArrow } from "react-icons/bi";

const departments = [
  { value: null, label: "None" }, { value: "Computing", label: "Computing" },
  {
    value: "Electrical Engineering",
    label: "Electrical Engineering"
  },
  {
    value: "Civil Engineering",
    label: "Civil Engineering"
  },
  {
    value: 'Management Sciences',
    label: 'Management Sciences'
  },
  {
    value: 'Science and Humanities',
    label: 'Science and Humanities'
  }
]

export function DepartmentsFilter({value, setValue} : {value: string | null, setValue: React.Dispatch<React.SetStateAction<string | null>>}) {

  return(
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="w-56 flex justify-between" variant="default">
          <span>{value ? value : 'Select Department...'}</span>
          <BiSolidDownArrow />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 h-56">
        {
          departments.map(dept => <DropdownMenuItem onClick={() => setValue(dept.value)}><span>{dept.label}</span></DropdownMenuItem>)
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}