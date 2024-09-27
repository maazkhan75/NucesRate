import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { NavbarApp } from "@/components/ui/navbar-app";
import { Footer } from "@/components/landingPage/Footer";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <div>
              {/* <NavbarApp /> */}
              <div>{children}</div>
              <Footer/>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
