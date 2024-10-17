import  SearchBar from "@/components/ui/search-bar"
import Filters from "@/components/professor_page/filters";
import ProfessorsCards from "@/components/professor_page/professors_cards";
import { ProfessorsPageUrl } from "@/components/types/professors_url_type";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export default async function Index({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string };
}) {
  const page_number: number = Number(params.slug);

  const url: ProfessorsPageUrl = {
    prof_name: searchParams?.prof
      ? decodeURIComponent(searchParams!.prof)
      : null,
    tag: searchParams?.tag
      ? decodeURIComponent(searchParams!.tag)
      : null,
    department: searchParams?.dept
      ? decodeURIComponent(searchParams!.dept)
      : null,
  };

  return (
    <div className="bg-black">
      <Navbar />
      <SearchBar url={url}/>
      <ProfessorsCards page_number={page_number} url={url} />
      <Footer />
    </div>
  );
}
