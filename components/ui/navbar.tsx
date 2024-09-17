import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import SearchBar from "./navbar_search_bar";

export default function Navbar() {

    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <Link href={"/"}>
                    {/* <Image src="/pictures/logo.jpg" alt="logo acadlens" width={200} height={100} /> */}
                    <h1 className="font-semibold" style={{fontSize:'1.5rem'}}>AcadLens</h1>
                </Link>
        
                <SearchBar />

                <Link href={"/professors/0"}>
                    <h2 style={{textDecoration:'underline', cursor:'pointer'}}>Professors</h2>
                </Link>

                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
        </nav>
    );
}