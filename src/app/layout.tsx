import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import GalaxyBackground from "../components/3d/galaxy/galaxy-background";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Eduardo Portfolio",
  description:
    "Portfolio website of Eduardo Henrique, a passionate software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="fixed inset-0 w-full h-full z-0">
          <GalaxyBackground />
        </div>

        <div className="relative z-10">
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
