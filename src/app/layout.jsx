import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-screen px-6 antialiased  sm:px-8 md:px-20 bg-[#F2F2F2]">
        <Navbar />
        {children}
        </main>
      </body>
    </html>
  );
}