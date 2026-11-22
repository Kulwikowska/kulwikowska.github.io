import { en } from './en'
import { es, type Dictionary } from './es'
import { hu } from './hu'

export const locales = ['es', 'en', 'hu'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

const dictionaries: Record<Locale, Dictionary> = { es, en, hu }

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export type { Dictionary }
