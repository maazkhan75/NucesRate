import {NavbarApp} from "@/components/ui/navbar-app"
import { Hero } from "@/components/landing_page/hero";
import { ProductShowcaseAndFAQs } from "@/components/landing_page/ProductShowcaseAndFAQs";
import { Features } from "@/components/landing_page/Features";
import { Footer } from "@/components/ui/footer";
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
      <NavbarApp />
      <Hero />
      <Features />
      <ProductShowcaseAndFAQs />
      <Footer />
    </div>
  );
}
