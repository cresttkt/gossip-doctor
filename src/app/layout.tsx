import type { Metadata } from "next";
import "./globals.scss";
import { Zen_Antique_Soft } from "next/font/google";

const mainFontBold = Zen_Antique_Soft({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gossip Doctor",
  description: "Gossip Doctorは「本当の」美容外科医評価を掲載するサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={mainFontBold.className}>{children}</body>
    </html>
  );
}
