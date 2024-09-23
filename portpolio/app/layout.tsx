import type { Metadata } from "next";

import "@/app/public/globals.css";

export const metadata: Metadata = {
  title: "portpolio kim",
  description: "just portpolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={""}>{children}</body>
    </html>
  );
}
