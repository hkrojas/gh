export interface Building {
  id: string;
  name: string;
  distrito?: string;
  imageUrl: string;
}

export const buildings: Building[] = [
  { id: '1', name: 'Belice', imageUrl: '/images/edificio-ref-01.jpg' },
  { id: '2', name: 'Boulevard Arequipa', imageUrl: '/images/edificio-ref-02.jpg' },
  { id: '3', name: 'Brindiris', imageUrl: '/images/edificio-ref-03.jpg' },
  { id: '4', name: 'Edificio Rúa', imageUrl: '/images/edificio-ref-04.jpg' },
  { id: '5', name: 'Green Park', imageUrl: '/images/edificio-ref-01.jpg' },
  { id: '6', name: 'La Fontana', imageUrl: '/images/edificio-ref-02.jpg' },
  { id: '7', name: 'Los Balcones de Santa Cruz', imageUrl: '/images/edificio-ref-03.jpg' },
  { id: '8', name: 'Mar y Vista', imageUrl: '/images/edificio-ref-04.jpg' },
  { id: '9', name: 'Mayta Cápac', imageUrl: '/images/edificio-ref-01.jpg' },
  { id: '10', name: 'Novoa', imageUrl: '/images/edificio-ref-02.jpg' },
  { id: '11', name: 'Nueva Aurora III', imageUrl: '/images/edificio-ref-03.jpg' },
  { id: '12', name: 'Ramón Ribeyro', imageUrl: '/images/edificio-ref-04.jpg' },
  { id: '13', name: 'Real 811', imageUrl: '/images/edificio-ref-01.jpg' },
  { id: '14', name: 'Sergio Bernales', imageUrl: '/images/edificio-ref-02.jpg' },
  { id: '15', name: 'Torres Lucas', imageUrl: '/images/edificio-ref-03.jpg' },
  { id: '16', name: 'Valentina II', imageUrl: '/images/edificio-ref-04.jpg' },
];
