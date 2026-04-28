import { Resend } from "resend";
import { generateContactEmail } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, company, subject, message } = body;

    if (!name || !email || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const receiverEmail = process.env.NEXT_PUBLIC_EMAIL;

    if (!receiverEmail) {
      return new Response(
        "Server configuration error: Email recipient not set",
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [receiverEmail],
      subject: subject ? `New Message: ${subject}` : "New Contact Message",

      html: generateContactEmail({
        name,
        email,
        phone,
        company,
        subject,
        message,
      }),
    });

    return Response.json({
      success: true,
      status: 200,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({
      success: false,
      status: 500,
      message: "Failed to send message",
    });
  }
}