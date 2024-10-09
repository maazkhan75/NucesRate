'use client';

import styles from "./search-bar.module.css";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FormEvent, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
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
        <form onSubmit={submitHandler} className={`flex items-around gap-2 ${styles.input}`}>
            <Input name="search" className={styles.input} type="text" placeholder="Search Professors" />
            <button type="submit" className={styles.search_icon}><FaSearch /></button>
        </form>
    );
}