'use client';

import styles from "./search-bar.module.css";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FormEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { ProfessorsPageUrl } from "../types/professors_url_type";
import Filters from "../professor_page/filters";

export default function SearchBar({url} : {url: ProfessorsPageUrl}) {
    const router = useRouter();

    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem("search") as HTMLInputElement;
        const search = input.value;
    
        router.push(`/professors/0/?prof=${search}`);

        input.value = '';
    }
    
    return (
        <form onSubmit={submitHandler} className={`flex justify-center items-around gap-2 ${styles.input}`}>
            <Input name="search" className={styles.input} type="text" placeholder="Search Professors" />
            <span className={styles.search_icon}><Filters url={url} /></span>
            <button type="submit" className="hidden" ><FaSearch /></button>
        </form>
    );
}