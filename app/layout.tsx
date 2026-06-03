import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Valthmedia'nın Premium Yazı Tipi
const inter = Inter({ subsets: ["latin"] });

// FULL + FULL SEO Optimizasyonu (Google Botları Burayı Okur)
export const metadata: Metadata = {
  title: "Web Sitesi Yaptır | Valthmedia Kurumsal Web Tasarım Ajansı",
  description: "İşletmeniz için 699 TL'den başlayan fiyatlarla kurumsal web sitesi yaptırın. İstanbul web tasarım ajansı Valthmedia ile hızlı, mobil uyumlu ve SEO dostu site tasarımı.",
  keywords: [
    "web sitesi yaptır", 
    "site yaptır", 
    "kurumsal site yaptır", 
    "kurumsal web sitesi", 
    "web sayfası yaptırmak istiyorum", 
    "istanbul web tasarım ajansı", 
    "ucuz web sitesi", 
    "esnaf web sitesi",
    "web sitesi fiyatları",
    "profesyonel web tasarım"
  ],
  authors: [{ name: "Valthmedia Dijital Ajans" }],
  openGraph: {
    title: "Kurumsal Web Sitesi Yaptır | Valthmedia",
    description: "İşletmenizi dijitale en hızlı ve modern şekilde taşıyın. Paketlerimizi inceleyin.",
    url: "https://valthmedia.com",
    siteName: "Valthmedia Dijital Ajans",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="tr" SEO için çok önemlidir. scroll-smooth ise sayfa içi linklerde kaymak gibi kaymayı sağlar.
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}