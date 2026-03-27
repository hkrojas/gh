export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs = {
  comites: [
    {
      question: "¿Cómo manejan la transición desde nuestra administradora actual?",
      answer: "Realizamos una revisión detallada del estado de las cuentas y la documentación para asegurar un traspaso ordenado y profesional.",
    },
    {
      question: "¿Cómo podemos supervisar los gastos del edificio?",
      answer: "A través de reportes mensuales estructurados que incluyen el sustento documentario de cada operación realizada.",
    },
    {
      question: "¿Cuál es el rol del Comité en la elección de proveedores?",
      answer: "El Comité mantiene la potestad de decisión. Nosotros presentamos opciones calificadas, supervisamos la ejecución y aseguramos el cumplimiento de los estándares acordados.",
    },
    {
      question: "¿Cuentan con procesos para la gestión de cuotas de mantenimiento?",
      answer: "Sí, aplicamos un seguimiento administrativo constante para mantener la salud financiera del edificio, siempre bajo un trato institucional y respetuoso.",
    },
    {
      question: "¿Cómo atienden los requerimientos operativos del edificio?",
      answer: "Contamos con una red de proveedores y personal técnico para la atención de necesidades preventivas y correctivas de forma coordinada.",
    },
  ],
  residentes: [
    {
      question: "¿Cómo informo sobre una necesidad de mantenimiento en áreas comunes?",
      answer: "Puede utilizar nuestro canal de atención disponible en esta web o comunicarse directamente vía WhatsApp para una gestión coordinada.",
    },
    {
      question: "¿Cómo registro mi pago de mantenimiento?",
      answer: "Ponemos a su disposición la sección de 'Envío de constancia' en esta plataforma para adjuntar su comprobante de forma sencilla.",
    },
    {
      question: "¿Cómo solicito una constancia de no adeudo u otros documentos?",
      answer: "Puede gestionarlo a través de nuestra sección de consultas documentarias, proporcionando los datos de su unidad inmobiliaria.",
    },
  ],
};
