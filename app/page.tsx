import Link from 'next/link';

const pillars = [
  {
    n: '01',
    title: 'Producto de mercado',
    text: 'Pescado, carne y verdura de temporada elegidos cada mañana.'
  },
  {
    n: '02',
    title: 'Cocina viva',
    text: 'Recetas que respetan el origen y se atreven con guiños contemporáneos.'
  },
  {
    n: '03',
    title: 'Mesa compartida',
    text: 'Raciones pensadas para comer juntos, sin protocolos.'
  }
];

function Divider() {
  return <div className="h-1 w-20 bg-accent mx-auto" aria-hidden="true" />;
}

function CircularBadge() {
  // SVG badge with text on circular path
  return (
    <div className="badge-circle relative inline-flex items-center justify-center w-[120px] h-[120px] md:w-[140px] md:h-[140px]">
      <svg
        viewBox="0 0 140 140"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <circle
          cx="70"
          cy="70"
          r="68"
          fill="none"
          stroke="#a83828"
          strokeWidth="2"
        />
        <defs>
          <path
            id="badgePath"
            d="M 70,70 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
          />
        </defs>
        <text
          fill="#a83828"
          style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}
        >
          <textPath href="#badgePath" startOffset="0">
            La Loca · Madrid · Cocina viva · La Loca · Madrid · Cocina viva ·
          </textPath>
        </text>
      </svg>
      <span
        className="font-display italic font-black text-accent text-2xl"
        aria-hidden="true"
      >
        R
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-bg text-ink overflow-x-hidden">
      {/* HERO */}
      <section
        id="inicio"
        className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-6 md:px-10"
      >
        {/* Watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-[-2vw] top-[18%] font-display italic font-black text-ink whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 22vw, 18rem)',
            opacity: 0.08,
            lineHeight: 1
          }}
        >
          Rosi
        </span>

        <div className="relative max-w-6xl mx-auto">
          {/* Top row: small label + badge */}
          <div className="flex items-start justify-between gap-6 mb-12 md:mb-20">
            <div className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-ink-soft">
              Madrid · Est. cocina honesta
            </div>
            <div className="shrink-0">
              <CircularBadge />
            </div>
          </div>

          <div className="hero-stagger max-w-4xl">
            <p className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-6">
              — Cocina sin complejos · Madrid
            </p>
            <h1
              className="font-display font-black text-ink leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Rosi <span className="italic">La Loca</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-ink-soft leading-relaxed"
              style={{ fontSize: '1.0625rem' }}
            >
              Una taberna con carácter donde el producto manda y la cocina se sirve sin filtros.
              Sabores honestos, fuego y mucha alegría.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 rounded-full font-body font-medium text-sm transition-transform duration-200 ease-out-strong hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(168,56,40,0.4)] active:scale-[0.97] active:translate-y-0"
              >
                Cómo llegar
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-3.5 rounded-full font-body font-medium text-sm transition-all duration-200 ease-out-strong hover:border-accent hover:text-accent active:scale-[0.97]"
              >
                Conocer la casa
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* SOBRE NOSOTROS */}
      <section
        id="sobre"
        className="relative bg-surface border-t border-b border-line py-24 md:py-32 px-6 md:px-10 mt-24 md:mt-32"
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-6">
            — 01 / Sobre nosotros
          </p>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <h2
              className="md:col-span-7 font-display font-black leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              La cocina de Rosi, <span className="italic font-normal">sin medias tintas</span>
            </h2>
            <div className="md:col-span-5 md:pt-3">
              <p
                className="text-ink-soft leading-[1.7]"
                style={{ fontSize: '1.0625rem' }}
              >
                Rosi La Loca nace del gusto por la mesa larga, la conversación que se alarga y
                el plato que se comparte. Aquí cocinamos con producto de temporada, recetas con
                raíces y la libertad de quien no se toma demasiado en serio. Madrid en estado
                puro, con un punto de locura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA GASTRONÓMICA */}
      <section
        id="cocina"
        className="relative bg-accent-soft py-24 md:py-32 px-6 md:px-10 overflow-hidden"
      >
        {/* Decorative quotes */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-4 top-8 font-display italic font-black text-accent"
          style={{
            fontSize: 'clamp(6rem, 12vw, 10rem)',
            opacity: 0.3,
            lineHeight: 1
          }}
        >
          “
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-4 bottom-4 font-display italic font-black text-accent"
          style={{
            fontSize: 'clamp(6rem, 12vw, 10rem)',
            opacity: 0.3,
            lineHeight: 1
          }}
        >
          ”
        </span>

        <div className="relative max-w-5xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-6">
            — 02 / Nuestra cocina
          </p>
          <h2
            className="font-display font-black leading-[0.98] tracking-tight max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Producto, fuego <span className="italic">y memoria</span>
          </h2>
          <p
            className="mt-8 max-w-2xl text-ink-soft leading-[1.7]"
            style={{ fontSize: '1.0625rem' }}
          >
            Trabajamos con género de mercado, brasa cuando toca y una despensa que cambia con
            las estaciones. Platos para compartir, vinos honestos y postres que merecen una
            segunda ronda.
          </p>

          {/* Pillars asymmetric grid */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-10">
            {pillars.map((p, i) => (
              <article
                key={p.n}
                className={`pillar bg-surface/60 backdrop-blur-[1px] rounded-2xl p-7 md:p-8 border border-ink/5 ${
                  i === 0
                    ? 'md:col-span-5'
                    : i === 1
                    ? 'md:col-span-7 md:mt-10'
                    : 'md:col-span-6 md:col-start-4'
                }`}
              >
                <span
                  className="font-display italic font-black text-accent block leading-none"
                  style={{ fontSize: '3.75rem', opacity: 0.4 }}
                  aria-hidden="true"
                >
                  {p.n}
                </span>
                <h3
                  className="mt-4 font-display font-semibold tracking-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-3 text-ink-soft leading-[1.6]"
                  style={{ fontSize: '1rem' }}
                >
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="py-24 md:py-32">
        <Divider />
      </div>

      {/* CONTACTO / UBICACIÓN */}
      <section
        id="contacto"
        className="relative px-6 md:px-10 pb-32 md:pb-40"
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-6 text-center">
            — 03 / Cómo llegar
          </p>
          <h2
            className="font-display font-black leading-[1.02] tracking-tight text-center"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Encuéntranos en <span className="italic">Madrid</span>
          </h2>
          <p
            className="mt-6 text-ink-soft leading-[1.7] text-center max-w-xl mx-auto"
            style={{ fontSize: '1.0625rem' }}
          >
            Pásate sin prisa. La mesa está puesta y el fuego, encendido.
          </p>

          <div className="mt-14 bg-surface rounded-2xl border border-line p-8 md:p-12">
            <div
              className="aspect-[16/9] rounded-xl mb-8"
              style={{
                background:
                  'radial-gradient(120% 80% at 30% 30%, rgba(168,56,40,0.18), transparent 60%), radial-gradient(120% 80% at 80% 70%, rgba(168,56,40,0.10), transparent 60%), linear-gradient(135deg, #e8c9b8 0%, #f4ecdf 100%)'
              }}
              aria-hidden="true"
            />

            <dl className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
              <div>
                <dt className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">
                  Ciudad
                </dt>
                <dd className="font-display text-xl">Madrid</dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">
                  Teléfono
                </dt>
                <dd className="font-display text-xl text-ink-soft">[Próximamente]</dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft mb-2">
                  Email
                </dt>
                <dd className="font-display text-xl text-ink-soft">[Próximamente]</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line px-6 md:px-10 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="font-display italic font-black text-xl">Rosi La Loca</p>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-ink-soft">
            © {new Date().getFullYear()} · Cocina viva en Madrid
          </p>
        </div>
      </footer>
    </main>
  );
}
