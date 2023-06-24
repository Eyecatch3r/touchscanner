export type productData = {
  id: Number,
  name: string,
  image: string,
  price: number,
  shopName: string,
  distance: number,
  description: string,
  keywords: string[];
  isFeatured: boolean,
}

export const products: productData[] = [
    {
      id: 0,
      name: 'AP Royal Oak Gold',
      image: '/RoyalOak.png',
      price: 1239,
      shopName: 'Watches & jewellery',
      distance: 0.4,
      description: 'This is a high end watch made out of gold.',
      keywords: ['watch', 'gold', 'automatic'],
      isFeatured: true,
    },
    {
      id: 1,
      name: 'AP Royal Oak',
      image: '/RoyalOak.png',
      price: 2055,
      shopName: 'Watches Factory',
      distance: 0.1,
      description: 'This is a high end watch made out of gold.',
      keywords: ['watch', 'gold', 'automatic'],
      isFeatured: true,
    },
    {
      id: 2,
      name: 'AP Royal Oak Gold',
      image: '/RoyalOak.png',
      price: 999,
      shopName: 'Jewelery Shop',
      distance: 0.8,
      description: 'This is a high end watch made out of gold.',
      keywords: ['watch', 'gold', 'automatic'],
      isFeatured: true,
    },
    {
      id: 3,
      name: 'AP Royal Oak Gold',
      image: '/RoyalOak.png',
      price: 2500,
      shopName: 'Watches & more',
      distance: 2.5,
      description: 'This is a high end watch made out of gold.',
      keywords: ['watch', 'gold', 'automatic'],
      isFeatured: true,
    },
    {
      id: 4,
      name: 'Blue Designer Sofa',
      image: '/Sofa.png',
      price: 3999,
      shopName: 'Sleep House',
      distance: 3.0,
      description: 'This blue sofa made by the famous italian designer is perfect for your house.',
      keywords: ['sofa', 'bed', 'furniture'],
      isFeatured: true,
    },
    {
      id: 5,
      name: 'Designer Sofa',
      image: '/Sofa.png',
      price: 3500,
      shopName: 'Couch Castle',
      distance: 1.34,
      description: 'This blue sofa made by the famous italian designer is perfect for your house.',
      keywords: ['sofa', 'bed', 'furniture'],
      isFeatured: true,
    },
    {
      id: 6,
      name: 'Blue Designer Sofa',
      image: '/Sofa.png',
      price: 4100,
      shopName: 'Bed Market',
      distance: 2.05,
      description: 'This blue sofa made by the famous italian designer is perfect for your house.',
      keywords: ['sofa', 'bed', 'furniture'],
      isFeatured: true,
    },
  {
    id: 7,
    name: 'The Lord of the Rings Book',
    image: '  /Book.png',
    price: 25,
    shopName: 'Book Place',
    distance: 1.05,
    description: 'Embark on a captivating journey through Middle-earth and witness the epic battle between good and evil in J.R.R. Tolkien`s iconic masterpiece.',
    keywords: ['Book', 'Lord of the Rings', 'Tolkien'],
    isFeatured: true,
  },
  {
    id: 8,
    name: 'The Lord of the Rings Book',
    image: '  /Book.png',
    price: 32,
    shopName: 'Palace of Book',
    distance: 0.75,
    description: 'Experience the timeless magic of The Lord of the Rings as you embark on a legendary adventure in Middle-earth.',
    keywords: ['Book', 'Lord of the Rings', 'Tolkien'],
    isFeatured: true,
  },
  {
    id: 9,
    name: 'The Lord of the Rings Book',
    image: '  /Book.png',
    price: 34,
    shopName: 'BookLove Shop',
    distance: 2.71,
    description: 'Step into the enchanting world of The Lord of the Rings and be captivated by its epic tale of courage, destiny, and fellowship.',
    keywords: ['Book', 'Lord of the Rings', 'Tolkien'],
    isFeatured: true,
  },
  {
    id: 10,
    name: 'Gucci Belt',
    image: '/Belt.png',
    price: 299,
    shopName: 'Peunigu',
    distance: 2.11,
    description: 'Elevate your style with the iconic sophistication of a Gucci belt, a timeless accessory that exudes luxury and impeccable craftsmanship.',
    keywords: ['Gucci', 'Belt', 'Guccibelt', 'Accessory', 'Luxury'],
    isFeatured: true,
  },
  {
    id: 11,
    name: 'Gucci Belt',
    image: '/Belt.png',
    price: 319,
    shopName: 'Gucci Store',
    distance: 4.02,
    description: 'Make a statement with a Gucci belt, the epitome of luxury and style.',
    keywords: ['Gucci', 'Belt', 'Guccibelt', 'Accessory', 'Luxury'],
    isFeatured: true,
  },
  {
    id: 12,
    name: 'Gucci Belt',
    image: '/Belt.png',
    price: 359,
    shopName: 'The Luxury Store',
    distance: 0.22,
    description: 'Unleash your fashion prowess with a Gucci belt, the ultimate symbol of elegance and prestige.',
    keywords: ['Gucci', 'Belt', 'Guccibelt', 'Accessory', 'Luxury'],
    isFeatured: true,
  },
  {
    id: 13,
    name: 'Monopoly',
    image: '/Monopoly.png',
    price: 29,
    shopName: 'The Game Store',
    distance: 0.98,
    description: 'Dominate the board in Monopoly, the ultimate game of strategy and success.',
    keywords: ['Monopoly', 'Game', 'Kapitalism', 'Moneygame'],
    isFeatured: true,
  },
  {
    id: 14,
    name: 'Monopoly',
    image: '/Monopoly.png',
    price: 23,
    shopName: 'ApeStore',
    distance: 2.71,
    description: 'Conquer the board, amass fortunes, and reign supreme in Monopoly, the timeless game of strategy and ambition.',
    keywords: ['Monopoly', 'Game', 'Kapitalism', 'Moneygame'],
    isFeatured: true,
  },
  ];