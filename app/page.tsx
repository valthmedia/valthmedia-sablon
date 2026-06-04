"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('valth_popup_seen');
    if (!hasSeenPopup) {
      const toastTimer = setTimeout(() => setShowToast(true), 3000);
      const popupTimer = setTimeout(() => setShowPopup(true), 12000);
      return () => {
        clearTimeout(toastTimer);
        clearTimeout(popupTimer);
      };
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowToast(false);
    sessionStorage.setItem('valth_popup_seen', 'true');
  };

  return (
    // DİKKAT: pb-20 kaldırıldı, alt boşluk sıfırlandı!
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-600 selection:text-white relative overflow-hidden">
      
      {/* ÜST BANNER */}
      <div className="bg-indigo-600 text-white text-center py-2 px-4 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 z-50 relative">
        <span className="animate-pulse">🔥</span> Lansman Dönemine Özel Şok Fiyatlar! %50 İndirimli Kurumsal Site Yaptır <span className="animate-pulse">🔥</span>
      </div>

      {/* HEADER & LOGO */}
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" title="Valthmedia Web Tasarım Ajansı Ana Sayfa">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 140" fill="none" className="h-9 md:h-11 w-auto">
              <defs>
                <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4338ca" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#18181b" />
                  <stop offset="100%" stopColor="#3f3f46" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#6366f1" floodOpacity="0.2"/>
                </filter>
              </defs>
              <g transform="translate(15, 15)" filter="url(#glow)">
                <path d="M35 110 L0 5 L35 5 L60 85 Z" fill="url(#darkGrad)"/>
                <path d="M75 110 L40 5 L75 5 L100 85 Z" fill="url(#indigoGrad)"/>
                <path d="M115 110 L80 5 L115 5 L140 85 Z" fill="url(#cyanGrad)"/>
              </g>
              <text x="175" y="102" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="84" fontWeight="900" letterSpacing="-3" fill="#18181b">
                VALTH<tspan fill="url(#indigoGrad)">MEDIA</tspan>
              </text>
            </svg>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-zinc-600">
            <Link href="#hizmetler" className="hover:text-indigo-600 transition-colors">Özellikler</Link>
            <Link href="#ornekler" className="hover:text-indigo-600 transition-colors">Sektörel Vitrin</Link>
            <Link href="#fiyatlar" className="hover:text-indigo-600 transition-colors">Fiyatlar</Link>
            <Link href="#sss" className="hover:text-indigo-600 transition-colors">S.S.S.</Link>
          </nav>
          
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://instagram.com/valthmedia" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-600 transition-colors flex items-center justify-center" aria-label="Valthmedia Instagram Hesabı">
              <svg className="w-6 h-6 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://wa.me/905468008611" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-800 transition-colors" title="Web Sitesi Fiyat Teklifi Al">
              Teklif Al
            </a>
          </div>
        </div>
      </header>

      {/* HERO KISMI */}
      <section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Görünmez Üst Boşluk */}
        <div className="w-full h-16 md:h-24"></div>

        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-indigo-50 border border-indigo-100/80 shadow-sm max-w-full" style={{ marginTop: '100px', marginBottom: '40px' }}>
          <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 animate-pulse flex-shrink-0"></span>
          <p className="text-xs md:text-sm font-semibold text-zinc-700 tracking-tight text-left">
            Lansman Paketi: <span className="text-indigo-600 font-extrabold">.COM Alan Adı Tescili + Hızlı Hosting</span> Fiyata Dahil!
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
          Kurumsal Web Sitesi Yaptır <br />
          <span className="text-indigo-600">Hızlı, Modern ve Etkili Tasarımlar</span>
        </h1>
        
        <p className="text-md md:text-lg text-zinc-600 max-w-2xl leading-relaxed" style={{ marginBottom: '40px' }}>
          <strong>Site yaptırmak</strong> hiç bu kadar kolay olmamıştı! İşletmeniz için SEO uyumlu, Google dostu ve lisanslı altyapıya sahip profesyonel <strong>web sitesi</strong> çözümlerini tescilli alan adınızla hazırlıyoruz.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{ marginBottom: '100px' }}>
          <a href="#fiyatlar" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-[1.02] text-center shadow-md">
            Kampanyalı Fiyat Listesini İncele
          </a>
        </div>
      </section>

      {/* SEKTÖREL VİTRİN */}
      <section id="ornekler" className="py-24 bg-zinc-50 border-y border-zinc-200/60 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">Sektörünüze Özel Kurumsal Web Tasarımları</h2>
            <p className="text-zinc-600">Farklı iş kollarının kurumsal dinamiklerine tam uyumlu, müşteri dönüşümünü doğrudan tetikleyen premium <strong>web sitesi tasarımları</strong>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* 1. LOKANTA */}
            <article className="col-span-1 md:col-span-8 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-200/50" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Lokanta ve Restoran Web Sitesi Yaptır" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block border border-white/30">Gastronomi & Gıda</span>
                <h3 className="text-2xl font-bold text-white mb-1">Lokanta & Restoran Sitesi</h3>
                <p className="text-sm text-zinc-300">Zengin menü sunumları ve şık galeri alanları.</p>
              </div>
            </article>

            {/* 2. BUTİK TATLICI */}
            <article className="col-span-1 md:col-span-4 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-200/50" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pastane ve Tatlıcı Web Sitesi Tasarımı" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-pink-500/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Kafe & Pastane</span>
                <h3 className="text-xl font-bold text-white mb-1">Butik Tatlıcı Sitesi</h3>
                <p className="text-sm text-pink-100">Özgün, renkli ve dikkat çekici görsel yerleşimler.</p>
              </div>
            </article>

            {/* 3. EMLAK */}
            <article className="col-span-1 md:col-span-4 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-200/50" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Emlak Ofisi İçin Site Yaptır" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Gayrimenkul</span>
                <h3 className="text-xl font-bold text-white mb-1">Emlak Ofisi Vitrini</h3>
                <p className="text-sm text-blue-50">Portföy ve ilanlarınızı sergileyecek kurumsal yapı.</p>
              </div>
            </article>

            {/* 4. HUKUK & AVUKAT */}
            <article className="col-span-1 md:col-span-8 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-200/50" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Avukatlık Bürosu Web Tasarımı" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-amber-600/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Danışmanlık</span>
                <h3 className="text-2xl font-bold text-white mb-1">Hukuk & Avukatlık Bürosu</h3>
                <p className="text-sm text-zinc-300">Güven telkin eden, ağırbaşlı ve kurumsal çizgiler.</p>
              </div>
            </article>

            {/* 5. SAĞLIK & KLİNİK */}
            <article className="col-span-1 md:col-span-7 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-800" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Klinik ve Diş Hekimi Web Sitesi" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-900/40 to-transparent z-10"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-8 max-w-xs z-20">
                <span className="bg-sky-500/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Medikal & Sağlık</span>
                <h3 className="text-3xl font-bold text-white mb-2">Özel Klinik Sitesi</h3>
                <p className="text-sm text-sky-50">Hastalarınıza güven telkin eden modern çizgiler.</p>
              </div>
            </article>

            {/* 6. İNŞAAT & MİMARLIK */}
            <article className="col-span-1 md:col-span-5 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-200/50" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=800" alt="İnşaat Mimarlık Şirket Sitesi" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-orange-600/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Proje & Yapı</span>
                <h3 className="text-xl font-bold text-white mb-1">İnşaat & Mimarlık</h3>
                <p className="text-sm text-orange-50">Projelerinizi geniş ekranlarda sergileyen güçlü yerleşim.</p>
              </div>
            </article>

            {/* 7. KADIN KUAFÖRÜ */}
            <article className="col-span-1 md:col-span-5 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-200/50" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Güzellik Merkezi Web Tasarımı" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-teal-500/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Güzellik Salonu</span>
                <h3 className="text-xl font-bold text-white mb-1">Kuaför & Estetik Sitesi</h3>
                <p className="text-sm text-teal-50">Zarif çizgiler ve etkileyici imaj galerileri.</p>
              </div>
            </article>

            {/* 8. OTO GALERİ */}
            <article className="col-span-1 md:col-span-7 w-full relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-zinc-900 border border-zinc-800" style={{ minHeight: '320px' }}>
              <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Oto Galeri Web Sayfası Tasarımı" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-700 block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="bg-zinc-800/80 backdrop-blur-md text-zinc-300 border border-zinc-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Motors & Otomotiv</span>
                <h3 className="text-3xl font-bold text-white mb-2">Oto Galeri Sitesi</h3>
                <p className="text-sm text-zinc-300">Araç filonuz için yüksek prestijli showroom kurgusu.</p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* SEO Uyumlu Makale Alanı */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Neden Valthmedia'dan Web Sitesi Yaptırmalısınız?</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Arama motorlarında (Google, Yandex) üst sıralara çıkmak ve yeni müşteriler kazanmak için profesyonel bir <strong>kurumsal site yaptırmak</strong> şarttır. <strong>Web sitesi tasarımı</strong> sadece güzel görünmekle kalmamalı, aynı zamanda hızlı, güvenilir ve <strong>mobil uyumlu</strong> olmalıdır. Valthmedia Dijital Ajans olarak, esnaf ve şirketlerimiz için uygun bütçeli ve .com uzantılı anahtar teslim siteler üretiyoruz.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Hızlı açılan sayfalar, temiz mobil görünüm bir yana, anında iletişim kurmayı sağlayan WhatsApp butonları sayesinde sitenize giren ziyaretçilerin işletmenizle hızlıca iletişime geçmesini sağlıyoruz.
          </p>
        </div>
      </section>

      {/* Özellikler Alanı */}
      <section id="hizmetler" className="py-20 bg-zinc-50 border-t border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">Site Tasarım Özellikleri</h2>
            <p className="text-zinc-600">Her pakette standart olarak sunduğumuz güçlü özellikler ile dijitalde fark yaratın.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">🌍</div>
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-1">Ücretsiz .COM Alan Adı & Hosting</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Sitenizin 1 yıllık .com alan adı tescili ve yüksek hızlı kurumsal sunucu (hosting) barındırma maliyetleri paketlerimize dahildir.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">💬</div>
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-1">WhatsApp Sipariş & Canlı Destek</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Ziyaretçilerinizin size tek tıkla anında ulaşabileceği, mobil uyumlu canlı WhatsApp yönlendirmeleri ve Tıkla-Ara entegrasyonu.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center font-bold">📱</div>
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-1">100% Mobil & Tablet Uyumlu</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">İnternet trafiğinin büyük kısmı mobil cihazlardan gelir. Siteniz tüm telefon ve tablet ekranlarında pürüzsüz çalışır.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold">🚀</div>
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-1">İç SEO (Arama Optimizasyonu)</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Sitenizin başlık, description ve görsel etiketleri Google standartlarına tam uyumlu teknik kodlama ile teslim edilir.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center font-bold">🖼️</div>
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-1">Gelişmiş Hizmet & Ürün Galerisi</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Referanslarınızı, ürünlerinizi veya mekanınızı yüksek çözünürlüklü fotoğraflarla sergileyebileceğiniz modern alanlar.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">📍</div>
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-1">Google Haritalar Konum Entegrasyonu</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">Fiziksel işletmenizin harita konumunu sitenize gömüyoruz. Müşterileriniz tek tıkla adresinize yol tarifi alabiliyor.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Paketler ve Fiyatlar */}
      <section id="fiyatlar" className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-4">Web Sitemiz Paket ve Fiyat Politikası</h2>
            <p className="text-red-600 font-bold bg-red-50 py-2 rounded-lg border border-red-100 mb-4">DİKKAT: Aşağıdaki lansman fiyatları geçicidir. Fiyat artışından önce yerinizi ayırtın!</p>
            <p className="text-zinc-600 font-semibold text-sm">Fiyatlarımıza <strong className="text-indigo-600">KDV & .COM Alan Adı Dahil</strong> olup, 1 yıllık tüm kullanım lisansını kapsar. Gizli maliyet yoktur.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            
            {/* Paket 1 */}
            <div className="border border-zinc-200 p-8 rounded-3xl flex flex-col bg-zinc-50 shadow-sm hover:shadow-md transition-shadow h-full">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Başlangıç Vitrini</h3>
              <p className="text-sm text-zinc-500 mb-6">Hızlı çözüm arayan işletmeler için tek sayfalık kurumsal kartvizit.</p>
              <div className="mb-6 flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-zinc-900 tracking-tighter">999₺</span>
                  <span className="text-sm text-zinc-500 font-semibold line-through">2.000₺</span>
                </div>
                <span className="text-xs text-zinc-500 font-bold mt-1">KDV & .COM DOMAIN DAHİL / 1 YILLIK</span>
              </div>
              <ul className="text-sm text-zinc-600 space-y-4 mb-8 border-t border-zinc-200 pt-6 flex-grow">
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span><strong>1 Sayfa</strong> Tasarım Düzeni</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span className="font-semibold text-zinc-800">.COM Alan Adı Hediye</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span>WhatsApp Canlı İletişim Hattı</span></li>
                <li className="font-semibold text-zinc-800 pt-2 border-t border-zinc-100 mt-auto flex items-center gap-2"><span className="text-lg">🚀</span> Teslim: 2 İş Günü</li>
              </ul>
              <a href="https://wa.me/905468008611?text=Merhaba,%20999TL'lik%20Başlangıç%20Vitrini%20kampanyasından%20(KDV%20ve%20Alan%20Adı%20Dahil)%20yararlanmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="block text-center bg-white border border-zinc-300 text-zinc-900 py-3.5 rounded-xl text-sm font-bold transition-colors">
                Fırsatı Yakala
              </a>
            </div>

            {/* Paket 2 */}
            <div className="border-2 border-indigo-500 p-8 rounded-3xl flex flex-col bg-white relative shadow-xl transform md:-translate-y-4 h-full">
              <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse">KAMPANYA</span>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Kurumsal Paket</h3>
              <p className="text-sm text-zinc-500 mb-6">Şirket imajını güçlendirmek isteyen büyüme odaklı firmalar için ideal tercih.</p>
              <div className="mb-6 flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-indigo-600 tracking-tighter">1.299₺</span>
                  <span className="text-sm text-zinc-500 font-semibold line-through">3.000₺</span>
                </div>
                <span className="text-xs text-indigo-500 font-bold mt-1">KDV & .COM DOMAIN DAHİL / 1 YILLIK</span>
              </div>
              <ul className="text-sm text-zinc-600 space-y-4 mb-8 border-t border-indigo-100 pt-6 flex-grow">
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span><strong>3 Sayfa Yapısı</strong> (Ana Sayfa + 2 Alt Sayfa)</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span className="font-semibold text-zinc-800">.COM Alan Adı & Hosting</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span>Ayrıntılı Sektörel Hizmet Sayfaları</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span>Google Harita ve Lokasyon Kaydı</span></li>
                <li className="font-semibold text-zinc-800 pt-2 border-t border-zinc-50 mt-auto flex items-center gap-2"><span className="text-lg">🚀</span> Teslim: 3 İş Günü</li>
              </ul>
              <a href="https://wa.me/905468008611?text=Merhaba,%201299TL'lik%20Kurumsal%20Paket%20kampanyasından%20(KDV%20ve%20Alan%20Adı%20Dahil)%20yararlanmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl text-sm font-bold transition-colors shadow-md">
                Hemen Başlat
              </a>
            </div>

            {/* Paket 3 */}
            <div className="border border-zinc-200 p-8 rounded-3xl flex flex-col bg-zinc-50 shadow-sm hover:shadow-md transition-shadow h-full">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Profesyonel Kimlik</h3>
              <p className="text-sm text-zinc-500 mb-6">Eksiksiz dijital showroom arayan vizyoner markalar için tam teşekküllü paket.</p>
              <div className="mb-6 flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-zinc-900 tracking-tighter">1.499₺</span>
                  <span className="text-sm text-zinc-500 font-semibold line-through">4.500₺</span>
                </div>
                <span className="text-xs text-zinc-500 font-bold mt-1">KDV & .COM DOMAIN DAHİL / 1 YILLIK</span>
              </div>
              <ul className="text-sm text-zinc-600 space-y-4 mb-8 border-t border-zinc-200 pt-6 flex-grow">
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span><strong>5 Sayfa</strong> Genişletilmiş Yazılım Yapısı</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span className="font-semibold text-zinc-800">.COM Alan Adı & Hosting</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span>Dinamik Çoklu Fotoğraf / Ürün Galerisi</span></li>
                <li className="flex gap-3 items-start"><span className="text-indigo-500 font-bold mt-0.5">✓</span> <span>Gelişmiş İç Teknik SEO Yapılandırması</span></li>
                <li className="font-semibold text-zinc-800 pt-2 border-t border-zinc-200/50 mt-auto flex items-center gap-2"><span className="text-lg">🚀</span> Teslim: 4 İş Günü</li>
              </ul>
              <a href="https://wa.me/905468008611?text=Merhaba,%201499TL'lik%20Profesyonel%20Kimlik%20kampanyasından%20(KDV%20ve%20Alan%20Adı%20Dahil)%20yararlanmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="block text-center bg-white border border-zinc-300 text-zinc-900 py-3.5 rounded-xl text-sm font-bold transition-colors">
                Fırsatı Yakala
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SIKÇA SORULAN SORULAR */}
      <section id="sss" className="py-20 bg-zinc-50 border-t border-zinc-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            <details className="group border border-zinc-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-zinc-900">
                Fiyatlara .COM uzantılı alan adı (domain) gerçekten dahil mi?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2">
                Evet! Valthmedia'dan satın alacağınız tüm paketlerde, işletmenize tescil edilecek resmi <strong>.com alan adı</strong> ve sitenizin yayında kalmasını sağlayan 1 yıllık kurumsal sunucu (hosting) hizmeti tamamen fiyata dahildir.
              </div>
            </details>
            
            <details className="group border border-zinc-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-zinc-900">
                Yıllık ücretlendirme neleri kapsıyor? Sonradan ek bir ücret çıkar mı?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2">
                Fiyatlarımız son derece nettir. Sitede gördüğünüz listeler web sitesi yazılımını, KDV'yi, alan adınızı ve 1 yıllık hosting masraflarını tek paket halinde içerir. Dönem sonuna kadar hiçbir ek ücret talep edilmez.
              </div>
            </details>

            <details className="group border border-zinc-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-zinc-900">
                Süreç nasıl işliyor? Web sitem kaç günde teslim edilir?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2">
                WhatsApp üzerinden bizimle iletişime geçip paketinizi seçtikten sonra, sizden işletme adı, logo ve yer almasını istediğiniz kısa yazıları alıyoruz. Seçtiğiniz paketin taahhüt edilen teslimat süresi içinde (2 ile 4 iş günü arasında) web sitenizi yayına açıyoruz.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* İletişim Alanı */}
      <section id="iletisim" className="py-20 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Dijitalde Yerini Bugün Ayırt</h2>
          <p className="text-md text-zinc-400 mb-8 max-w-xl mx-auto">
            İşletmenizi arama motorlarında ve dijital haritalarda öne çıkarmak, lansman dönemine özel indirimlerle site yaptırmak için bizimle WhatsApp üzerinden direkt bağlantı kurabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://wa.me/905468008611" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#128C7E] transition-colors shadow-lg">
              WhatsApp: 0546 800 86 11
            </a>
          </div>
        </div>
      </section>

      {/* --- PROFESYONEL POPUPLAR --- */}
      {showToast && (
        <div className="fixed bottom-24 left-6 bg-white border border-zinc-200 p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] z-50 max-w-[280px] flex gap-4 items-start animate-[slideIn_0.5s_ease-out]">
          <button onClick={handleClosePopup} className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-900">✕</button>
          <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-600 mt-1">🎁</div>
          <div>
            <h4 className="font-bold text-sm text-zinc-900 leading-tight">Yıllık .COM Domain Hediye</h4>
            <p className="text-xs text-zinc-500 mt-1">Tüm paketlerimizde 1 yıllık .com tescil ve hosting fiyata dahildir!</p>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative shadow-2xl animate-[fadeIn_0.3s_ease-out] border border-zinc-100">
            <button onClick={handleClosePopup} className="absolute top-4 right-4 w-8 h-8 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-500 hover:bg-zinc-200 font-bold transition-colors">✕</button>
            <div className="text-center mb-6 mt-2">
              <span className="bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4 border border-indigo-100">Lansman Fırsatı</span>
              <h4 className="text-2xl font-black text-zinc-900 leading-tight mb-3">Kurumsal Sitenizi Bugün Başlatın</h4>
              <p className="text-zinc-600 text-sm">Sunucu ve tescil maliyetleri güncellenmeden önce yerinizi ayırtın. KDV dahil ve gizli masrafsız şeffaf paketlerle hemen tanışın.</p>
            </div>
            <a href="#fiyatlar" onClick={handleClosePopup} className="block w-full bg-zinc-900 text-white text-center font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors shadow-md">
              Fiyat ve Paketleri İncele
            </a>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fadeIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}} />

      {/* Sabit WhatsApp Butonu */}
      <a href="https://wa.me/905468008611" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:-translate-y-0.5 transition-all z-50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </a>
    </main>
  );
}