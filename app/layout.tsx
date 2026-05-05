import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rosi La Loca — Taberna de cocina honesta en Madrid',
  description: 'Rosi La Loca es una taberna en Madrid con cocina de producto, brasa y carácter. Platos para compartir, vinos honestos y mesa larga.',
  keywords: ['Rosi La Loca', 'restaurante Madrid', 'taberna Madrid', 'cocina de producto', 'brasa Madrid', 'restaurante para compartir'],
  openGraph: {
    title: 'Rosi La Loca — Taberna de cocina honesta en Madrid',
    description: 'Taberna madrileña con cocina de producto, brasa y carácter.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Rosi La Loca',
    description: 'Taberna de cocina honesta en Madrid',
    servesCuisine: ['Española', 'De mercado', 'Brasa'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
    telephone: '+34675811548',
  };

  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
