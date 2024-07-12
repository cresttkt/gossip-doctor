import type { Metadata } from "next";
import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
