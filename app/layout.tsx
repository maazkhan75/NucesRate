import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/ui/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "NucesHub",
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
              {/* <Navbar />*/
              /*commented out for hiding it with loader temporarily */}
              <div>
                <Toaster />
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
