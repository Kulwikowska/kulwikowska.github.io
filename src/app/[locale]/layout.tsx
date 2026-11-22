import type { Metadata, Viewport } from 'next'
import { Dancing_Script, Nunito } from 'next/font/google'
import { notFound } from 'next/navigation'

import { site } from '@/content/site'
import { getDictionary, isLocale, locales } from '@/i18n'

import '../globals.css'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

const script = Dancing_Script({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  variable: '--font-script',
  display: 'swap',
})

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const viewport: Viewport = {
  themeColor: '#24407F',
  viewportFit: 'cover',
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getDictionary(locale)
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: { es: '/es/', en: '/en/', hu: '/hu/', 'x-default': '/es/' },
    },
    icons: { icon: '/favicon.svg' },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      locale,
      url: `/${locale}/`,
      images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HouseCleaningService',
    name: site.name,
    telephone: `+${site.phoneIntl}`,
    url: site.url,
    areaServed: site.areas.map((name) => ({ '@type': 'City', name })),
    address: { '@type': 'PostalAddress', addressLocality: 'Fuengirola', addressRegion: 'Málaga', addressCountry: 'ES' },
  }

  return (
    <html lang={locale} className={`${nunito.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
