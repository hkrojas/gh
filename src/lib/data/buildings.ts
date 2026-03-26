export interface Building {
  id: string;
  name: string;
  distrito?: string;
  type: 'real' | 'referencial';
  imageUrl: string;
}

export const buildings: Building[] = [
  {
    id: '1',
    name: 'Edificio Residencial San Isidro',
    distrito: 'San Isidro',
    type: 'real',
    imageUrl: '/img/edificio-1.jpg',
  },
  {
    id: '2',
    name: 'Condominio El Parque',
    distrito: 'Miraflores',
    type: 'real',
    imageUrl: '/img/edificio-2.jpg',
  },
  {
    id: '3',
    name: 'Edificio Las Palmeras',
    distrito: 'Surco',
    type: 'real',
    imageUrl: '/img/edificio-3.jpg',
  },
  {
    id: '4',
    name: 'Residencial La Molina',
    distrito: 'La Molina',
    type: 'referencial',
    imageUrl: '/img/edificio-4-ref.jpg',
  },
  {
    id: '5',
    name: 'Edificio El Sol',
    distrito: 'Barranco',
    type: 'real',
    imageUrl: '/img/edificio-5.jpg',
  },
  {
    id: '6',
    name: 'Condominio Pacifico',
    distrito: 'San Miguel',
    type: 'real',
    imageUrl: '/img/edificio-6.jpg',
  },
  {
    id: '7',
    name: 'Edificio Horizonte',
    distrito: 'Magdalena',
    type: 'real',
    imageUrl: '/img/edificio-7.jpg',
  },
  {
    id: '8',
    name: 'Residencial Los Sauces',
    distrito: 'Lince',
    type: 'real',
    imageUrl: '/img/edificio-8.jpg',
  },
  // Add more to complete 16 buildings if needed later
];
