// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white shadow-sm">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Markanız İçin Harika Bir Başlangıç</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Müşterilerinize dijital dünyada en iyi şekilde hitap edin. Hızlı, modern ve şık web tasarımları.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
          Bizimle İletişime Geçin
        </button>
      </section>

      {/* Hizmetler Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
              <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Hizmet {item}</h3>
              <p className="text-gray-600">Bu alana müşterinin sunduğu hizmetin kısa bir açıklaması gelecek.</p>
            </div>
          ))}
        </div>
      </section>

      {/* İletişim / Footer */}
      <footer className="bg-gray-900 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Hazır mısınız?</h2>
        <p className="mb-6">Hemen bir mesaj bırakın, işinizi dijitale taşıyalım.</p>
        <p className="text-gray-400">info@ornekdomain.com | +90 555 555 55 55</p>
      </footer>
    </main>
  );
}