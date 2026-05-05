import Link from 'next/link';

const PHONE = '+34675811548';
const PHONE_TEL = 'tel:+34675811548';
const PHONE_WA = 'https://wa.me/34675811548';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ───────── HERO ───────── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 py-24 md:py-32">
        {/* Watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic font-black text-ink leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(8rem, 22vw, 18rem)', opacity: 0.08 }}
        >
          Rosi
        </span>

        {/* Badge circular */}
        <div className="absolute top-8 right-6 md:top-12 md:right-12 z-10">
          <div className="badge-rotate">
            <svg width="130" height="130" viewBox="0 0 130 130" className="overflow-visible">
              <defs>
                <path id="badgeCircle" d="M 65,65 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
              </defs>
              <circle cx="65" cy="65" r="60" fill="none" stroke="#a83828" strokeWidth="2" />
              <circle cx="65" cy="65" r="4" fill="#a83828" />
              <g className="badge-spin" style={{ transformOrigin: '65px 65px' }}>
                <text fill="#a83828" style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.18em', fontWeight: 500, textTransform: 'uppercase' }}>
                  <textPath href="#badgeCircle" startOffset="0">
                    La Loca · Madrid · Cocina viva · La Loca · Madrid · Cocina viva ·
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>

        <div className="relative z-[2] max-w-6xl mx-auto w-full">
          <p className="stagger stagger-1 text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6">
            — Cocina sin complejos · Madrid
          </p>
          <h1
            className="stagger stagger-2 font-display font-black text-ink leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Rosi <span className="italic font-normal text-accent">La Loca</span>
          </h1>
          <p
            className="stagger stagger-3 mt-8 max-w-xl text-ink-soft leading-relaxed"
            style={{ fontSize: '1.0625rem' }}
          >
            Una taberna con carácter donde el producto manda y la cocina se sirve sin filtros. Sabores honestos, fuego y mucha alegría.
          </p>
          <div className="stagger stagger-4 mt-10 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="cta-primary inline-flex items-center gap-2 bg-accent text-bg px-7 py-4 text-sm font-medium tracking-wide uppercase rounded-full"
            >
              Cómo llegar
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={PHONE_TEL}
              className="cta-secondary inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-4 text-sm font-medium tracking-wide uppercase rounded-full"
            >
              Llamar
            </a>
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="h-1 w-20 bg-accent mx-auto" aria-hidden="true" />

      {/* ───────── SOBRE ───────── */}
      <section id="sobre" className="bg-surface border-y border-line py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6">
            — 01 / Sobre nosotros
          </p>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <h2
              className="md:col-span-7 font-display font-black text-ink leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              La cocina de Rosi, sin medias tintas
            </h2>
            <div className="md:col-span-5 md:pt-3">
              <p className="text-ink-soft leading-[1.7]" style={{ fontSize: '1.0625rem' }}>
                Rosi La Loca nace del gusto por la mesa larga, la conversación que se alarga y el plato que se comparte. Aquí cocinamos con producto de temporada, recetas con raíces y la libertad de quien no se toma demasiado en serio. Madrid en estado puro, con un punto de locura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="h-1 w-20 bg-accent mx-auto" aria-hidden="true" />

      {/* ───────── PROPUESTA GASTRONÓMICA ───────── */}
      <section id="cocina" className="relative bg-accent-soft py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        {/* Comillas decorativas */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute font-display italic font-black text-accent leading-none"
          style={{ fontSize: 'clamp(6rem, 12vw, 10rem)', opacity: 0.3, top: '2rem', left: '1rem' }}
        >
          “
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute font-display italic font-black text-accent leading-none"
          style={{ fontSize: 'clamp(6rem, 12vw, 10rem)', opacity: 0.3, bottom: '2rem', right: '1.5rem' }}
        >
          ”
        </span>

        <div className="relative max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6">
            — 02 / Nuestra cocina
          </p>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-16 md:mb-20">
            <h2
              className="md:col-span-8 font-display font-black text-ink leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              Producto, <span className="italic font-normal">fuego</span> y memoria
            </h2>
            <p className="md:col-span-4 text-ink-soft leading-[1.7]" style={{ fontSize: '1.0625rem' }}>
              Trabajamos con género de mercado, brasa cuando toca y una despensa que cambia con las estaciones. Platos para compartir, vinos honestos y postres que merecen una segunda ronda.
            </p>
          </div>

          {/* Pilares */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { n: '01', title: 'Producto de mercado', text: 'Pescado, carne y verdura de temporada elegidos cada mañana.' },
              { n: '02', title: 'Cocina viva', text: 'Recetas que respetan el origen y se atreven con guiños contemporáneos.' },
              { n: '03', title: 'Mesa compartida', text: 'Raciones pensadas para comer juntos, sin protocolos.' },
            ].map((p, i) => (
              <article
                key={p.n}
                className={`pillar-card pillar-stagger pillar-${i + 1} border-t border-ink/15 pt-6 md:pt-8`}
              >
                <div
                  className="font-display italic font-black text-accent leading-none mb-5"
                  style={{ fontSize: '3.5rem', opacity: 0.4 }}
                >
                  {p.n}
                </div>
                <h3
                  className="font-display font-semibold text-ink mb-3 leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                >
                  {p.title}
                </h3>
                <p className="text-ink-soft leading-[1.65]" style={{ fontSize: '1rem' }}>
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="h-1 w-20 bg-accent mx-auto" aria-hidden="true" />

      {/* ───────── CONTACTO ───────── */}
      <section id="contacto" className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-6 text-center">
            — 03 / Cómo llegar
          </p>
          <h2
            className="font-display font-black text-ink leading-[1.05] tracking-tight text-center mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Encuéntranos en <span className="italic font-normal">Madrid</span>
          </h2>
          <p
            className="text-ink-soft leading-[1.7] text-center max-w-xl mx-auto mb-12"
            style={{ fontSize: '1.0625rem' }}
          >
            Pásate sin prisa. La mesa está puesta y el fuego, encendido.
          </p>

          <div className="relative bg-surface rounded-2xl border border-line p-8 md:p-12 overflow-hidden">
            {/* Mapa placeholder gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-60"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(168,56,40,0.18), transparent 55%), radial-gradient(circle at 75% 80%, rgba(232,201,184,0.6), transparent 60%)',
              }}
            />
            <div className="relative space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">Ciudad</p>
                  <p className="font-display font-semibold text-ink" style={{ fontSize: '1.5rem' }}>Madrid</p>
                  <p className="text-ink-soft text-sm mt-1">Dirección exacta próximamente</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">Teléfono</p>
                  <a href={PHONE_TEL} className="contact-link font-display font-semibold text-ink block" style={{ fontSize: '1.5rem' }}>
                    675 81 15 48
                  </a>
                </div>
              </div>

              <div className="h-px bg-line" aria-hidden="true" />

              <div className="flex flex-wrap gap-3">
                <a
                  href={PHONE_TEL}
                  className="cta-primary inline-flex items-center gap-2 bg-accent text-bg px-7 py-4 text-sm font-medium tracking-wide uppercase rounded-full"
                >
                  Llamar
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={PHONE_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-4 text-sm font-medium tracking-wide uppercase rounded-full"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="border-t border-line py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display italic font-black text-ink text-2xl leading-none">Rosi La Loca</p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mt-2">Cocina viva · Madrid</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="#sobre" className="contact-link text-ink-soft">Sobre</a>
            <a href="#cocina" className="contact-link text-ink-soft">Cocina</a>
            <a href="#contacto" className="contact-link text-ink-soft">Contacto</a>
            <a href={PHONE_TEL} className="contact-link text-ink-soft">675 81 15 48</a>
          </div>
          <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Rosi La Loca</p>
        </div>
      </footer>
    </main>
  );
}
