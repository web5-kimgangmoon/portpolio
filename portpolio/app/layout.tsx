import type { Metadata } from "next";

// import Inter from "next/font/google";
import localfont from "next/font/local";
import "@/app/public/globals.css";

export const metadata: Metadata = {
  title: "portpolio kim",
  description: "just portpolio",
};

// const inter = Inter({ subsets: ["latin"] });
const myFont = localfont({ src: "./fonts/GeistVF.woff" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
