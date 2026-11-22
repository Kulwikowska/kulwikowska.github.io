import type { CSSProperties } from 'react'

import { dishOfTheDay, gallery, otherDishes, site } from '@/content/site'
import { locales, type Dictionary, type Locale } from '@/i18n'
import { whatsappLink } from '@/lib/whatsapp'

import { BeforeAfter } from './BeforeAfter'
import { GoulashIllustration } from './GoulashIllustration'
import {
  BowlIcon,
  CurtainIcon,
  HouseIcon,
  PinIcon,
  SparkIcon,
  SparklesIcon,
  TruckIcon,
  WhatsAppIcon,
  WindowIcon,
} from './Icons'
import { LogoFull, LogoMark } from './Logo'

type P = { t: Dictionary }

function WaButton({ href, label, className = 'btn btn-wa' }: { href: string; label: string; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  )
}

export function Header({ t, locale }: P & { locale: Locale }) {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label={site.name}>
          <LogoMark />
          <span className="brand-txt">
            <b>Crystal Care</b>
            <small>HOME SERVICE</small>
          </span>
        </a>
        <nav className="links" aria-label="Main">
          <a href="#about">{t.nav.about}</a>
          <a href="#cleaning">{t.nav.cleaning}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#food">{t.nav.food}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <nav className="lang" aria-label="Language">
          {locales.map((l) => (
            <a key={l} href={`/${l}/`} hrefLang={l} aria-current={l === locale ? 'page' : undefined}>
              {l.toUpperCase()}
            </a>
          ))}
        </nav>
        <WaButton href={whatsappLink(t.wa.general)} label="WhatsApp" />
      </div>
    </header>
  )
}

export function Hero({ t }: P) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="script">{t.hero.tag}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="hero-ctas">
            <WaButton href={whatsappLink(t.wa.quote)} label={t.hero.cta1} />
            <a className="btn btn-ghost" href="#food">
              {t.hero.cta2}
            </a>
          </div>
          <div className="areas">
            <span>{t.hero.areas}</span>
            {site.areas.map((a) => (
              <span className="pin" key={a}>
                <PinIcon width={14} height={14} />
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-art">
          <div className="disc" />
          <LogoFull className="logo-big" />
          <span className="chip c1">
            <i style={{ background: 'var(--pink)' }} />
            {t.hero.chip1}
          </span>
          <span className="chip c2">
            <i style={{ background: 'var(--wine)' }} />
            {t.hero.chip2}
          </span>
        </div>
      </div>
    </section>
  )
}

export function Pillars({ t }: P) {
  return (
    <section className="band band--flush">
      <div className="wrap pillars">
        <a className="pillar clean" href="#cleaning">
          <span className="ico" style={{ color: 'var(--navy)' }}>
            <SparklesIcon />
          </span>
          <span>
            <h3>{t.pillars.cleanTitle}</h3>
            <p>{t.pillars.cleanText}</p>
            <span className="more">{t.pillars.cleanMore}</span>
          </span>
        </a>
        <a className="pillar food" href="#food">
          <span className="ico" style={{ color: 'var(--wine)' }}>
            <BowlIcon />
          </span>
          <span>
            <h3>{t.pillars.foodTitle}</h3>
            <p>{t.pillars.foodText}</p>
            <span className="more">{t.pillars.foodMore}</span>
          </span>
        </a>
      </div>
    </section>
  )
}

export function About({ t }: P) {
  return (
    <section className="band band--flush" id="about">
      <div className="wrap about-grid">
        <div className="about-mark">
          <SparkIcon className="spark s1" />
          <SparkIcon className="spark s2" />
          <p className="quote">
            {t.about.quoteA} <em>{t.about.quoteB}</em>
          </p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="traits">
            {t.about.traits.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const serviceStyle = [
  { color: 'var(--pink)', Icon: HouseIcon },
  { color: 'var(--c-green)', Icon: WindowIcon },
  { color: 'var(--c-blue)', Icon: CurtainIcon },
  { color: 'var(--c-orange)', Icon: TruckIcon },
  { color: 'var(--c-purple)', Icon: SparklesIcon },
]

export function Services({ t }: P) {
  return (
    <section className="band svc-band" id="cleaning">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2>{t.services.title}</h2>
          <p className="lead">{t.services.lead}</p>
        </div>
        <div className="svc-list">
          {t.services.items.map((s, i) => {
            const { color, Icon } = serviceStyle[i]
            return (
              <div className="svc" key={s.title} style={{ '--c': color } as CSSProperties}>
                <span className="ico">
                  <Icon />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="svc-cta">
          <WaButton href={whatsappLink(t.wa.quote)} label={t.services.cta} />
          <p>{t.services.price}</p>
        </div>
      </div>
    </section>
  )
}

export function Gallery({ t }: P) {
  return (
    <section className="band" id="gallery">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h2>{t.gallery.title}</h2>
          <p className="lead">{t.gallery.lead}</p>
        </div>
        <div className="ba-grid">
          {gallery.map((g) => (
            <BeforeAfter
              key={g.id}
              id={g.id}
              caption={t.gallery[g.key]}
              beforeLabel={t.gallery.before}
              afterLabel={t.gallery.after}
              layout={g.layout}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Food({ t }: P) {
  return (
    <section className="band food-band" id="food">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">{t.food.eyebrow}</p>
          <h2>{t.food.title}</h2>
          <p className="lead">{t.food.lead}</p>
        </div>

        <article className="dish">
          <div className={dishOfTheDay.image ? 'dish-art dish-art--photo' : 'dish-art'}>
            {dishOfTheDay.image ? (
              <img src={dishOfTheDay.image} alt={`${dishOfTheDay.name}: ${t.food.dishSub}`} loading="lazy" />
            ) : (
              <>
                <GoulashIllustration />
                <span className="photo-note">{t.food.photoNote}</span>
              </>
            )}
          </div>
          <div className="dish-body">
            <p className="eyebrow">{t.food.badge}</p>
            <p className="dish-name">{dishOfTheDay.name}</p>
            <p className="dish-sub">{t.food.dishSub}</p>
            <p>{t.food.dishDesc}</p>
            <div className="diet">
              {t.food.diet.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="meta">
              <span className="price">{dishOfTheDay.price}</span>
              <span className="fee">{t.food.fee}</span>
            </div>
            <div>
              <WaButton href={whatsappLink(t.wa.food)} label={t.food.cta} className="btn btn-wine" />
            </div>
          </div>
        </article>

        <div className="food-more">
          <div>
            <h3>{t.food.otherTitle}</h3>
            <div className="up-list">
              {otherDishes.map((d) => (
                <div className="up" key={d.key}>
                  <b>{d.name}</b>
                  <span>{t.food[d.key]}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>{t.food.howTitle}</h3>
            <ol className="steps">
              {t.food.how.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact({ t }: P) {
  const wa = whatsappLink(t.wa.general)
  return (
    <section className="band" id="contact">
      <div className="wrap">
        <div className="contact-card">
          <SparkIcon className="spark k1" />
          <SparkIcon className="spark k2" />
          <div className="contact-copy">
            <p className="script">{t.contact.script}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.lead}</p>
            <div>
              <WaButton href={wa} label={t.contact.cta} />
            </div>
          </div>
          <div className="contact-info">
            <div className="row">
              <small>WhatsApp</small>
              <b>
                <a href={wa} target="_blank" rel="noopener">
                  {site.phoneDisplay}
                </a>
              </b>
            </div>
            <div className="row">
              <small>{t.contact.phone}</small>
              <b>
                <a href={`tel:+${site.phoneIntl}`}>{site.phoneDisplay}</a>
              </b>
            </div>
            <div className="row">
              <small>{t.contact.area}</small>
              <b>{site.areas.join(' · ')}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <span>
          <b>{site.name}</b> · © {new Date().getFullYear()}
        </span>
        <span>{site.phoneDisplay} · Costa del Sol</span>
      </div>
    </footer>
  )
}

export function WhatsAppFab({ t }: P) {
  return (
    <a className="fab" href={whatsappLink(t.wa.general)} target="_blank" rel="noopener" aria-label="WhatsApp">
      <WhatsAppIcon />
    </a>
  )
}
