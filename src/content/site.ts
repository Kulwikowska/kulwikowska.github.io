// Business data shared by all languages. Edit this file to change the dish of the day,
// contact details or gallery photos. Texts per language live in src/i18n/.

export const site = {
  name: 'MF Crystal Care',
  url: 'https://kulwikowska.github.io',
  phoneDisplay: '+34 634 810 162',
  phoneIntl: '34634810162',
  areas: ['Fuengirola', 'Benalmádena', 'Mijas'],
}

/** Dish of the day. Name stays in Hungarian; descriptions are translated in i18n (dish.*). */
export const dishOfTheDay = {
  name: 'Gulyás',
  price: '12 €',
  /** Put a photo in raw/food/, run `npm run images`, then set e.g. '/food/gulyas.webp'. */
  image: null as string | null,
}

export const otherDishes = [
  { name: 'Paprikás csirke', key: 'up1' },
  { name: 'Töltött káposzta', key: 'up2' },
  { name: 'Lecsó', key: 'up3' },
  { name: 'Somlói galuska', key: 'up4' },
] as const

/** Before/after pairs. Files are generated into public/gallery/ by `npm run images`. */
export const gallery = [
  { id: 'living', key: 'galLiving', layout: 'wide' },
  { id: 'bedroom', key: 'galBedroom', layout: 'tall' },
  { id: 'kitchen', key: 'galKitchen', layout: 'tall' },
  { id: 'kitchen2', key: 'galKitchen2', layout: 'tall' },
  { id: 'shelf', key: 'galShelf', layout: 'wide' },
] as const
