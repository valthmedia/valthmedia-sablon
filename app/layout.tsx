import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valthmedia | Kurumsal Web Tasarım & Dijital Ajans',
  description: 'İşletmeniz için SEO uyumlu, mobil uyumlu ve modern kurumsal web sitesi yaptırın. Ücretsiz .COM alan adı ve hızlı hosting dahil anahtar teslim web tasarım paketleri.',
  keywords: 'web sitesi yaptır, kurumsal web tasarım, profesyonel web sitesi, e-ticaret sitesi, seo uyumlu site',
  openGraph: {
    title: 'Valthmedia | Kurumsal Web Tasarım',
    description: 'Anahtar teslim, SEO ve mobil uyumlu kurumsal web sitesi paketleri.',
    url: 'https://valthmedia.com',
    siteName: 'Valthmedia',
    images: [
      {
        url: '/logo.png', // Sitenin public klasörüne logonun bir png'sini atarsan buralarda çıkar
        width: 1200,
        height: 1200,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-white text-zinc-900">
        {children}
      </body>
    </html>
  )
}