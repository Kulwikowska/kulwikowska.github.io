import { site } from '@/content/site'

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`
}
