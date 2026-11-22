import type { Metadata } from 'next'

import { site } from '@/content/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  alternates: { canonical: '/es/' },
  robots: { index: false, follow: true },
  icons: { icon: '/favicon.svg' },
}

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
