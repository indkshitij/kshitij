import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, company, subject, message } = body;

    
    if (!name || !email || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["ind.kshitijsingh@gmail.com"],
      subject: subject
        ? `New Message: ${subject}`
        : "New Contact Message",

      html: `
        <div style="font-family:Arial, sans-serif; background:#f9fafb; padding:24px;">
          <div style="max-width:600px; margin:auto; background:white; padding:24px; border-radius:12px; border:1px solid #e5e7eb;">
            
            <h2 style="margin-bottom:16px; color:#111827;">New Contact Message</h2>
            
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Name</td>
                <td style="padding:8px 0; font-weight:500; color:#111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Email</td>
                <td style="padding:8px 0; font-weight:500; color:#111827;">${email}</td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Phone</td>
                <td style="padding:8px 0; font-weight:500; color:#111827;">${phone}</td>
              </tr>`
                  : ""
              }
              ${
                company
                  ? `
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Company</td>
                <td style="padding:8px 0; font-weight:500; color:#111827;">${company}</td>
              </tr>`
                  : ""
              }
            </table>

            <div style="margin-top:20px; padding:16px; background:#f3f4f6; border-radius:8px;">
              <p style="margin:0; color:#111827; white-space:pre-line;">
                ${message}
              </p>
            </div>

            <p style="margin-top:20px; font-size:12px; color:#9ca3af;">
              Sent from your portfolio contact form
            </p>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return new Response("Failed to send message", { status: 500 });
  }
}