import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
  building: z.string().optional(),
  message: z.string().min(10, "El mensaje es muy corto"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate schema
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { message: "Datos de formulario inválidos", errors: result.error.format() },
        { status: 400 }
      );
    }

    // HERE: Integration with Email service (SendGrid, Nodemailer, etc.)
    // For now, we simulate success
    console.log("Nuevo Lead Recibido:", result.data);

    return NextResponse.json(
      { message: "Mensaje recibido correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API Contact:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
