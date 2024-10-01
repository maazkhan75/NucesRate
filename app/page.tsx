import { Hero } from "@/components/landing_page/hero";
import { ProductShowcase } from "@/components/landing_page/product_showcase";
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
      <Hero />
      <Features />
      <ProductShowcase />
      <FAQs />
    </div>
  );
}
