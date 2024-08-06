import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/ThemeProvider";
import MobileNav from "@/components/navigation/MobileNav";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salah Portfolio",
  description: "fullstack portfolio with NextJs, Sanity, Shadcn-ui and Typescript",
  icons: [
    {
    url: "/portfolio-svgrepo-com.svg",
    href: "/portfolio-svgrepo-com.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-primary selection:text-white" >
      <body className={cn("relative text-muted-foreground overflow-x-hidden" , inter.className)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            <MobileNav/>
              {children}
              
            

          </ThemeProvider>
      </body>
    </html>
  );
}
