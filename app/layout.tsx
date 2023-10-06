import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Kumbh_Sans } from "next/font/google";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";

const kumbhsans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={kumbhsans.className}>
          <SignedIn>
            <Navbar />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
