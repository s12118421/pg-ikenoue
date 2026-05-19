import { useState } from "react";
import { t as translations } from "./i18n";
import "./index.css";

/* ─── NAV ─── */
function Nav({ t, lang, toggle }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="text-lg font-black tracking-tight text-white">
          <span className="text-green-400">P.G.</span> IKENOUE
        </span>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggle} className="text-xs text-gray-500 border border-gray-700 px-2.5 py-1 rounded hover:text-white transition">
            {t.nav.lang}
          </button>
          <a href="#dropin" className="bg-green-500 hover:bg-green-400 text-black text-sm font-bold px-5 py-2.5 rounded-lg transition">
            {t.nav.cta}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">{t.nav.lang}</button>
          <button onClick={() => setOpen(!open)} className="text-white text-2xl leading-none">{open ? "✕" : "☰"}</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-950/95 border-t border-white/5 px-5 py-5 space-y-3">
          {["#concept", "#features", "#dropin", "#access"].map((h) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block text-gray-300 text-base">
              {h.replace("#", "").toUpperCase()}
            </a>
          ))}
          <a href="#dropin" onClick={() => setOpen(false)} className="block text-center bg-green-500 text-black font-bold py-3 rounded-lg">
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero({ t }) {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* bg layers */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.08)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      {/* grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 text-center px-5 max-w-4xl">
        <div className="inline-block text-[10px] uppercase tracking-[0.35em] text-green-400/70 border border-green-500/20 px-4 py-1.5 rounded-full mb-8">
          Ikenoue Station — 3 min walk
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          {t.hero.heading}
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.sub}
        </p>

        <a href="#dropin" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition shadow-[0_0_40px_rgba(74,222,128,0.2)]">
          {t.hero.cta}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>

        {/* scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-600 text-xs animate-bounce">
          <span>SCROLL</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </section>
  );
}

/* ─── CONCEPT ─── */
function Concept({ t }) {
  return (
    <section id="concept" className="py-24 px-5 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-green-400 mb-4">CONCEPT</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">{t.concept.title}</h2>
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg">{t.concept.text}</p>
        </div>

        {/* photo placeholder */}
        <div className="relative group">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 aspect-[4/3] overflow-hidden relative">
            {/* turf texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-gray-900 to-gray-950" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle, rgba(74,222,128,0.3) 1px, transparent 1px)",
              backgroundSize: "8px 8px"
            }} />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-green-500/30 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-green-400/60 text-xs uppercase tracking-widest">{t.concept.photoLabel}</span>
              <span className="text-gray-600 text-xs mt-1">{t.concept.photoSub}</span>
            </div>
          </div>

          {/* neon glow edge */}
          <div className="absolute -bottom-2 left-8 right-8 h-4 bg-green-500/10 blur-xl rounded-full" />
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
function Features({ t }) {
  const icons = [
    // Turf & Sled
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // Global
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>,
    // Open heart
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>,
  ];

  return (
    <section id="features" className="py-24 px-5 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.features.items.map((f, i) => (
            <div key={i} className="bg-gray-900/60 backdrop-blur rounded-2xl p-8 border border-gray-800 hover:border-green-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-5 group-hover:bg-green-500/20 transition">
                {icons[i]}
              </div>
              <h3 className="font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DROP-IN ─── */
function DropIn({ t }) {
  return (
    <section id="dropin" className="py-24 px-5 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-green-400 mb-4">DROP-IN</div>
        <h2 className="text-3xl sm:text-4xl font-black mb-4">{t.dropin.title}</h2>
        <p className="text-gray-400 mb-12 max-w-lg mx-auto">{t.dropin.sub}</p>

        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 sm:p-10 relative overflow-hidden">
          {/* glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">{t.dropin.priceLabel}</div>
            <div className="text-6xl sm:text-7xl font-black mb-1">
              <span className="text-green-400">¥</span>{t.dropin.price}
            </div>
            <div className="text-xs text-gray-600 mb-8">{t.dropin.priceSub}</div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-10 py-4 rounded-xl font-bold text-lg transition shadow-[0_0_40px_rgba(74,222,128,0.15)]"
            >
              {t.dropin.cta}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ACCESS ─── */
function Access({ t }) {
  return (
    <section id="access" className="py-24 px-5 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-green-400 mb-4 text-center">LOCATION</div>
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">{t.access.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex flex-col justify-center space-y-5">
            <div>
              <div className="text-xl font-bold mb-1">{t.access.addr}</div>
              <div className="text-sm text-gray-500">B1F</div>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span> {t.access.detail1}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span> {t.access.detail2}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 min-h-[280px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900" />
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Google Maps</span>
              <span className="text-gray-700 text-xs mt-1">Embed will be placed here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer({ t }) {
  return (
    <footer className="border-t border-gray-800/50 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-black text-sm">
            <span className="text-green-400">P.G.</span> IKENOUE
          </span>
          <a href="#" className="text-gray-600 hover:text-white transition" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
        <a href={`mailto:${t.footer.email}`} className="text-sm text-gray-600 hover:text-green-400 transition">{t.footer.email}</a>
        <div className="text-xs text-gray-700">{t.footer.copy}</div>
      </div>
    </footer>
  );
}

/* ─── APP ─── */
export default function App() {
  const [lang, setLang] = useState("ja");
  const t = translations[lang];
  const toggle = () => setLang(lang === "en" ? "ja" : "en");

  return (
    <div className="bg-gray-950 text-white min-h-dvh" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav t={t} lang={lang} toggle={toggle} />
      <Hero t={t} />
      <Concept t={t} />
      <Features t={t} />
      <DropIn t={t} />
      <Access t={t} />
      <Footer t={t} />
    </div>
  );
}
