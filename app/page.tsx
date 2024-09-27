import { Navbar } from "@/components/landingPage/Navbar";
import { Hero } from "@/components/landingPage/Hero";
import { Features } from "@/components/landingPage/Features";
import { ProductShowcase } from "@/components/landingPage/ProductShowcase";
import { FAQs } from "@/components/landingPage/FAQs";


export default async function Index() {
  return (
    <>
      {/* <Hero /> */}
      {/* <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">main page</h2>
      </main> */}

      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <FAQs />
    </>
  );
}
