export default function Page() {
  return (
    <main className="overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-600 italic tracking-tight active:scale-[0.97] transition-transform duration-150 ease-out inline-block">
            Rosi <span className="text-accent">·</span> La Loca
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#sobre" className="hover:text-accent transition-colors duration-200">Sobre</a>
            <a href="#propuesta" className="hover:text-accent transition-colors duration-200">Cocina</a>
            <a href="#contacto" className="hover:text-accent transition-colors duration-200">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Watermark */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center select-none">
          <span
            className="font-display italic font-900 text-ink leading-none"
            style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', opacity: 0.06, letterSpacing: '-0.04em' }}
          >
            Rosi
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-8 fade-in" style={{ animationDelay: '0ms' }}>
                — Cocina sin complejos · Madrid
              </p>
              <h1
                className="font-display font-900 italic leading-[0.92] tracking-tight text-ink fade-in"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', animationDelay: '50ms' }}
              >
                Rosi <br />
                <span className="text-accent">La Loca</span>
              </h1>
              <p
                className="mt-10 max-w-xl text-ink-soft leading-[1.7] fade-in"
                style={{ fontSize: '1.0625rem', animationDelay: '100ms' }}
              >
                Una taberna con carácter donde el producto manda y la cocina se sirve sin filtros. Sabores honestos, fuego y mucha alegría.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4 fade-in" style={{ animationDelay: '150ms' }}>
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-3 bg-ink text-bg px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(168,56,40,0.5)] active:scale-[0.97] transition-all duration-200 ease-out"
                >
                  Cómo llegar
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm uppercase tracking-widest border border-ink/20 hover:border-accent hover:text-accent active:scale-[0.97] transition-all duration-200 ease-out"
                >
                  Llamar
                </a>
              </div>
            </div>

            {/* Badge circular */}
            <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 mt-4 lg:mt-12 group">
                <div
                  className="absolute inset-0 rounded-full bg-accent text-bg flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-2"
                  style={{ transform: 'rotate(-8deg)' }}
                >
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]">
                    <defs>
                      <path id="circle" d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                    </defs>
                    <text fill="#fbf6ec" style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                      <textPath href="#circle">La Loca · Madrid · Cocina viva · La Loca · Madrid · Cocina viva · </textPath>
                    </text>
                  </svg>
                  <span className="font-display italic font-900 text-3xl">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="bg-surface border border-line rounded-3xl px-8 py-16 lg:px-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-8 left-8 lg:top-12 lg:left-16 text-xs uppercase tracking-[0.25em] text-accent">
              — 01 / Sobre
            </div>
            <div className="grid grid-cols-12 gap-6 lg:gap-12 mt-12">
              <div className="col-span-12 lg:col-span-7">
                <h2
                  className="font-display font-600 italic leading-[1.05] tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
                >
                  La cocina de Rosi, <span className="text-accent">sin medias tintas</span>.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:pt-4">
                <div className="h-1 w-20 bg-accent mb-8" />
                <p className="text-ink-soft leading-[1.75]" style={{ fontSize: '1.0625rem' }}>
                  Rosi La Loca nace del gusto por la mesa larga, la conversación que se alarga y el plato que se comparte. Aquí cocinamos con producto de temporada, recetas con raíces y la libertad de quien no se toma demasiado en serio. Madrid en estado puro, con un punto de locura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA */}
      <section id="propuesta" className="relative py-24 lg:py-32 bg-accent-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-accent">— 02 / Cocina</span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-7 relative">
              <span
                aria-hidden
                className="absolute -top-12 -left-2 lg:-left-6 font-display italic text-accent leading-none select-none pointer-events-none"
                style={{ fontSize: 'clamp(5rem, 12vw, 8rem)', opacity: 0.85 }}
              >
                “
              </span>
              <h2
                className="font-display font-900 italic leading-[0.95] tracking-tight relative"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                Producto, <br /> fuego y <br /> <span className="text-accent">memoria</span>.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:pt-12">
              <p className="text-ink-soft leading-[1.75]" style={{ fontSize: '1.0625rem' }}>
                Trabajamos con género de mercado, brasa cuando toca y una despensa que cambia con las estaciones. Platos para compartir, vinos honestos y postres que merecen una segunda ronda.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-3xl overflow-hidden">
            {[
              { n: '01', title: 'Producto de mercado', text: 'Pescado, carne y verdura de temporada elegidos cada mañana.' },
              { n: '02', title: 'Cocina viva', text: 'Recetas que respetan el origen y se atreven con guiños contemporáneos.' },
              { n: '03', title: 'Mesa compartida', text: 'Raciones pensadas para comer juntos, sin protocolos.' }
            ].map((p) => (
              <div key={p.n} className="bg-surface p-10 lg:p-12 group">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-display italic text-accent text-2xl">{p.n}</span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="font-display font-600 mb-4 leading-tight" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                  {p.title}
                </h3>
                <p className="text-ink-soft leading-[1.7] text-[0.95rem]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-accent">— 03 / Contacto</span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>

          <div className="bg-surface border border-line rounded-3xl px-8 py-16 lg:px-16 lg:py-20 grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-7">
              <h2
                className="font-display font-600 italic leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
              >
                Encuéntranos en <span className="text-accent">Madrid</span>.
              </h2>
              <div className="h-1 w-20 bg-accent mt-10 mb-10" />
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-2">Dirección</dt>
                  <dd className="font-display italic text-2xl">Madrid</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-2">Teléfono</dt>
                  <dd className="text-lg">[TEL_PENDIENTE]</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-ink-soft mb-2">Email</dt>
                  <dd className="text-lg">[EMAIL_PENDIENTE]</dd>
                </div>
              </dl>
            </div>

            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:pt-4">
              <a
                href="#"
                className="group inline-flex items-center justify-between gap-3 bg-ink text-bg px-8 py-5 rounded-full text-sm uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(168,56,40,0.5)] active:scale-[0.97] transition-all duration-200 ease-out"
              >
                <span>Cómo llegar</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-between gap-3 border border-ink/20 px-8 py-5 rounded-full text-sm uppercase tracking-widest hover:border-accent hover:text-accent active:scale-[0.97] transition-all duration-200 ease-out"
              >
                <span>Llamar</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <p className="text-xs text-ink-soft mt-4 leading-relaxed">
                Reservas y consultas por teléfono o email. Te responderemos lo antes posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-display italic text-xl">
            Rosi <span className="text-accent">·</span> La Loca
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-ink-soft">
            © {new Date().getFullYear()} · Cocina viva en Madrid
          </div>
        </div>
      </footer>
    </main>
  );
}
