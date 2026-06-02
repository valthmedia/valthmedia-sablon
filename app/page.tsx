import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            VALTH<span className="text-indigo-500">MEDIA</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="#hizmetler" className="hover:text-white transition-colors">Uzmanlık Alanlarımız</Link>
            <Link href="#iletisim" className="hover:text-white transition-colors">Nasıl Çalışırız?</Link>
          </nav>
          <Link href="#iletisim" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Teklif Al
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Yeni Nesil Dijital Çözüm Ortağınız
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Markanızı Dijitalde <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Zirveye Taşıyoruz
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Kapsamlı e-ticaret danışmanlığından pazar yeri yönetimlerine, modern web teknolojileriyle geliştirilmiş yüksek performanslı sitelere kadar tüm dijital operasyonunuzu biz yönetiyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#iletisim" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-500/25">
            Projemi Başlat
          </Link>
          <Link href="#hizmetler" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-semibold transition-all">
            Neler Yapıyoruz?
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="border-t border-zinc-900 bg-zinc-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
            <p className="text-zinc-400">İhtiyacınıza özel, ölçeklenebilir ve modern dijital çözümler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-colors group">
              <div className="h-14 w-14 bg-indigo-500/10 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Web Geliştirme</h3>
              <p className="text-zinc-400 leading-relaxed">
                Next.js, TypeScript ve Supabase mimarisiyle sıfır sunucu maliyetli, ışık hızında çalışan, mobil öncelikli kurumsal web siteleri ve paneller geliştiriyoruz.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-colors group">
              <div className="h-14 w-14 bg-cyan-500/10 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">E-Ticaret & Danışmanlık</h3>
              <p className="text-zinc-400 leading-relaxed">
                E-ticaret altyapınızı sıfırdan kuruyor, süreçlerinizi optimize ediyor ve markanızın dijital satışlarını artıracak stratejik yönetim sağlıyoruz.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-orange-500/50 transition-colors group">
              <div className="h-14 w-14 bg-orange-500/10 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Pazar Yeri Entegrasyonları</h3>
              <p className="text-zinc-400 leading-relaxed">
                Trendyol, Hepsiburada ve Amazon Türkiye mağazalarınızın profesyonel kurulumunu, API entegrasyonlarını ve ürün operasyonlarını baştan sona üstleniyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="iletisim" className="py-24 relative overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Projeniz mi var? Konuşalım.</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Hedeflerinizi belirleyin, geri kalan tüm teknik ve operasyonel süreci İstanbul merkezli ekibimizle biz hayata geçirelim.
          </p>
          <a href="mailto:valthmedia@gmail.com" className="inline-block bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-zinc-200 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Hemen İletişime Geçin
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Valthmedia. Tüm hakları saklıdır.</p>
          <p>İstanbul, Türkiye</p>
        </div>
      </footer>
    </main>
  );
}