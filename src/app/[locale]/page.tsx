import { About, Contact, Food, Footer, Gallery, Header, Hero, Pillars, Services, WhatsAppFab } from '@/components/Sections'
import { getDictionary, type Locale } from '@/i18n'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale }
  const t = getDictionary(locale)

  return (
    <>
      <Header t={t} locale={locale} />
      <main id="top">
        <Hero t={t} />
        <Pillars t={t} />
        <About t={t} />
        <Services t={t} />
        <Gallery t={t} />
        <Food t={t} />
        <Contact t={t} />
      </main>
      <Footer />
      <WhatsAppFab t={t} />
    </>
  )
}
