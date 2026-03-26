export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs = {
  comites: [
    {
      question: "¿Cómo manejan la transición desde nuestra administradora actual?",
      answer: "Realizamos una revisión inicial del estado de las cuentas para asegurar un traspaso ordenado de la gestión.",
    },
    {
      question: "¿Cómo podemos ver los gastos del edificio?",
      answer: "Mediante reportes mensuales claros que incluyen el sustento de cada pago realizado.",
    },
    {
      question: "¿Quién elige a los proveedores?",
      answer: "El Comité tiene la decisión final. Nosotros nos encargamos de buscarlos, supervisarlos y asegurar que cumplan su trabajo.",
    },
    {
      question: "¿Tienen procesos para la recuperación de cuotas atrasadas?",
      answer: "Sí, aplicamos un seguimiento administrativo constante y respetuoso para reducir la morosidad.",
    },
    {
      question: "¿Qué sucede si hay una emergencia operativa?",
      answer: "Contamos con canales de atención para incidentes que requieran acción inmediata en el edificio.",
    },
  ],
  residentes: [
    {
      question: "¿Cómo reporto una avería en las áreas comunes?",
      answer: "Puede hacerlo a través de nuestro canal de reporte de incidencias en esta web o vía WhatsApp de atención directa.",
    },
    {
      question: "¿Dónde envío mi comprobante de pago de mantenimiento?",
      answer: "Disponemos de una sección específica de 'Envío de constancia' donde puede adjuntar su comprobante de forma rápida.",
    },
    {
      question: "¿Cómo solicito una constancia de no adeudo?",
      answer: "Debe gestionarlo a través de 'Consultas documentarias', indicando su torre y número de departamento.",
    },
  ],
};
