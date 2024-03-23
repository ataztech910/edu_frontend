import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Education",
  description: "Courses for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-black">
        <Navbar />
        <main className="mx-auto container">
          {children}
        </main>
      </body>
    </html>
  );
}
