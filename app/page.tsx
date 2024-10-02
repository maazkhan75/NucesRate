import {Navbar} from "@/components/ui/navbar"
import { Hero } from "@/components/landing_page/hero";
import { ProductShowcaseAndFAQs } from "@/components/landing_page/ProductShowcaseAndFAQs";
import { Features } from "@/components/landing_page/Features";
import { FAQs } from "@/components/landing_page/FAQs";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";



export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/professors/0");
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcaseAndFAQs />
    </div>
  );
}
