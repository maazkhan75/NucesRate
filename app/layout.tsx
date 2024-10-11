import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import { Navbar } from "@/components/ui/navbar";
// import { Footer } from "@/components/ui/footer";




const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "NucesRate",
  description: "Review FAST Professors for Others and You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" forcedTheme="dark">
          <main className="min-h-screen">
            <div>
              {/* <Navbar/> */}
              <div>
                <Toaster />
                {children}
              </div>
              {/* <Footer/> */}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
