'use client';
import { useState } from "react";
import { ProfessorsPageUrl } from "../types/professors_url_type";
import { Button } from "../ui/button";
import { CourseFilter } from "./course_filter";
import { DepartmentsFilter } from "./department_filter";
import styles from './filter.module.css';
import { useRouter } from "next/navigation";

export default function Filters({url} : {url: ProfessorsPageUrl}) {
    const [courseValue, setCourseValue] = useState(url.course);
    const [deptValue, setDeptValue] = useState(url.department);
    const router = useRouter(); 

    function applyFilter() {
        const queryParams = new URLSearchParams();
        if (url.prof_name) queryParams.append('prof', url.prof_name);
        if (courseValue) queryParams.append('course', courseValue);
        if (deptValue) queryParams.append('dept', deptValue);
        router.push(`/professors/0/?${queryParams.toString()}`);
    }

    return (
        <div className={styles.cover_filters}>
            <div className={styles.filters_buttons}>
                <span className="w-[150px] md:w-[200px] lg:w-[200px]"><CourseFilter deptId={null} value={courseValue} setValue={setCourseValue} /></span>
                <DepartmentsFilter value={deptValue} setValue={setDeptValue} />
            </div>
            <div className={styles.button_apply}>
                <Button size={"sm"} variant={"default"} onClick={applyFilter}>Apply Filters</Button>
            </div>
        </div>
    );
}