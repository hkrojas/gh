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
    imageUrl: '/img/edificios/edificio-1.jpg',
  },
  {
    id: '2',
    name: 'Condominio El Parque de Miraflores',
    distrito: 'Miraflores',
    type: 'real',
    imageUrl: '/img/edificios/edificio-2.jpg',
  },
  {
    id: '3',
    name: 'Edificio Las Palmeras de Surco',
    distrito: 'Surco',
    type: 'real',
    imageUrl: '/img/edificios/edificio-3.jpg',
  },
  {
    id: '4',
    name: 'Residencial La Molina Premium',
    distrito: 'La Molina',
    type: 'real',
    imageUrl: '/img/edificios/edificio-4.jpg',
  },
  {
    id: '5',
    name: 'Edificio El Sol de Barranco',
    distrito: 'Barranco',
    type: 'real',
    imageUrl: '/img/edificios/edificio-5.jpg',
  },
  {
    id: '6',
    name: 'Condominio Pacifico San Miguel',
    distrito: 'San Miguel',
    type: 'real',
    imageUrl: '/img/edificios/edificio-6.jpg',
  },
  {
    id: '7',
    name: 'Edificio Horizonte Magdalena',
    distrito: 'Magdalena',
    type: 'real',
    imageUrl: '/img/edificios/edificio-7.jpg',
  },
  {
    id: '8',
    name: 'Residencial Los Sauces de Lince',
    distrito: 'Lince',
    type: 'real',
    imageUrl: '/img/edificios/edificio-8.jpg',
  },
  {
    id: '9',
    name: 'Torre Central San Borja',
    distrito: 'San Borja',
    type: 'real',
    imageUrl: '/img/edificios/edificio-9.jpg',
  },
  {
    id: '10',
    name: 'Edificio Los Pinos de Jesus Maria',
    distrito: 'Jesus Maria',
    type: 'real',
    imageUrl: '/img/edificios/edificio-10.jpg',
  },
  {
    id: '11',
    name: 'Condominio Altavista Pueblo Libre',
    distrito: 'Pueblo Libre',
    type: 'real',
    imageUrl: '/img/edificios/edificio-11.jpg',
  },
  {
    id: '12',
    name: 'Residencial Alameda de Chorrillos',
    distrito: 'Chorrillos',
    type: 'real',
    imageUrl: '/img/edificios/edificio-12.jpg',
  },
  {
    id: '13',
    name: 'Edificio El Mirador de La Victoria',
    distrito: 'La Victoria',
    type: 'real',
    imageUrl: '/img/edificios/edificio-13.jpg',
  },
  {
    id: '14',
    name: 'Torre Empresarial San Isidro',
    distrito: 'San Isidro',
    type: 'real',
    imageUrl: '/img/edificios/edificio-14.jpg',
  },
  {
    id: '15',
    name: 'Residencial Los Jazmines Surquillo',
    distrito: 'Surquillo',
    type: 'real',
    imageUrl: '/img/edificios/edificio-15.jpg',
  },
  {
    id: '16',
    name: 'Edificio Innova Los Olivos',
    distrito: 'Los Olivos',
    type: 'real',
    imageUrl: '/img/edificios/edificio-16.jpg',
  },
];

