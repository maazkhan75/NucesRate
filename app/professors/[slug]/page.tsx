import Filters from "@/components/professor_page/filters";
import ProfessorsCards from "@/components/professor_page/professors_cards";
import { ProfessorsPageUrl } from "@/components/types/professors_url_type";
import { Navbar } from "@/components/ui/navbar";

export default async function Index({ params, searchParams }: {  params: { slug: string }, searchParams?: { [key: string]: string }}) {
    const page_number: number = Number(params.slug);

    const url : ProfessorsPageUrl = {
        prof_name: searchParams?.prof ? decodeURIComponent(searchParams!.prof) : null,
        course : searchParams?.course ? decodeURIComponent(searchParams!.course) : null,
        department : searchParams?.dept ? decodeURIComponent(searchParams!.dept) : null,
    };

    return (
        <div>
            <Navbar/>
            <Filters url={url} />
            <ProfessorsCards page_number={page_number} url={url} />
        </div>
    );
}