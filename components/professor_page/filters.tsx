'use client';
import { useState } from "react";
import { ProfessorsPageUrl } from "../types/professors_url_type";
import { Button } from "../ui/button";
import { TagFilter } from "./tag_filter";
import { DepartmentsFilter } from "./department_filter";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FilterIcon } from "lucide-react";


export default function Filters({url} : {url: ProfessorsPageUrl}) {
    const [tagValue, setTagValue] = useState(url.tag);
    const [deptValue, setDeptValue] = useState(url.department);
    const router = useRouter(); 

    function applyFilter() {
        const queryParams = new URLSearchParams();
        if (url.prof_name) queryParams.append('prof', url.prof_name);
        if (tagValue && tagValue !== 'None') queryParams.append('tag', tagValue);
        if (deptValue) queryParams.append('dept', deptValue);
        router.push(`/professors/0/?${queryParams.toString()}`);
    }


  return (
    <Dialog>
      <DialogTrigger asChild>
        <FilterIcon />
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle>Apply Filters</DialogTitle>
          <DialogDescription>
            Find Professors as you like!
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 flex-col">
            <TagFilter value={tagValue} setValue={setTagValue} />
            <DepartmentsFilter value={deptValue} setValue={setDeptValue} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
              <Button size={"sm"} variant={"default"} onClick={applyFilter}>Apply Filters</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
