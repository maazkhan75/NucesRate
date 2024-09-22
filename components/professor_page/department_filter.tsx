"use client"

import * as React from "react"
import { RiArrowDropDownFill } from "react-icons/ri";

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: null, 
    label: "None"
  },
  {
    value: "Computing",
    label: "Computing",
  },
  {
    value: "Electrical Engineering",
    label: "Electrical Engineering",
  },
  {
    value: "Civil Engineering",
    label: "Civil Engineering",
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
  const [open, setOpen] = React.useState(false)

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] md:w-[200px] lg:w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Department "}
          <RiArrowDropDownFill style={{scale:'2'}} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Department..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value || ''}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? null : currentValue)
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
