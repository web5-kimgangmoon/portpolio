import type { Metadata } from "next";

// import Inter from "next/font/google";
import localfont from "next/font/local";
import "@/public/globals.css";

export const metadata: Metadata = {
  title: "portpolio kim",
  description: "just portpolio",
  icons: {
    icon: "/project.png",
  },
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
      <head>
        <meta property="og:image" content="/project.png" />
        <meta property="og:title" content="portpolio" />
        <meta
          property="og:description"
          content="자꾸 이미지 링크가 얼굴 사진이 떠서 수정합니다"
        />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
