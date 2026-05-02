import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Rosi La Loca — Taberna de cocina honesta en Madrid',
  description: 'Rosi La Loca es una taberna en Madrid con cocina de producto, brasa y carácter. Platos para compartir, vinos honestos y mesa larga.',
  keywords: ['Rosi La Loca', 'restaurante Madrid', 'taberna Madrid', 'cocina de producto', 'brasa Madrid', 'restaurante para compartir'],
  openGraph: {
    title: 'Rosi La Loca — Taberna de cocina honesta en Madrid',
    description: 'Cocina sin complejos en Madrid. Producto, fuego y memoria.',
    locale: 'es_ES',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Rosi La Loca',
    description: 'Taberna de cocina honesta y desenfadada en Madrid.',
    address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
    servesCuisine: 'Spanish',
    priceRange: '€€'
  };

  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
