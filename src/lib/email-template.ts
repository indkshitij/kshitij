type EmailTemplateProps = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
};

export function generateContactEmail({
  name,
  email,
  phone,
  company,
  subject,
  message,
}: EmailTemplateProps) {
  const formattedPhone = phone
    ? phone.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3")
    : "";

  const cleanPhone = phone ? phone.replace(/\s+/g, "") : "";
  return `
        <div style="margin:0;padding:0;background:#f8fafc;font-family:Inter,Arial,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
            <tr>
            <td align="center">

                <!-- Card -->
                <table width="100%" cellpadding="0" cellspacing="0"
                style="max-width:680px;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">

                <!-- Header -->
                <tr>
                    <td style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
                    <h2 style="margin:0;font-size:16px;font-weight:600;color:#111827;">
                        New Contact Message
                    </h2>
                    <p style="margin:4px 0 0 0;font-size:12px;color:#6b7280;">
                        Portfolio form submission
                    </p>
                    </td>
                </tr>

                <!-- Body -->
                <tr>
                    <td style="padding:24px;">

                    <!-- Info -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        
                        <!-- Name -->
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:11px;color:#6b7280;">NAME</p>
                            <p style="margin:4px 0 0 0;font-size:14px;font-weight:600;color:#111827;">
                            ${name}
                            </p>
                        </td>
                        </tr>

                        <!-- Email -->
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:11px;color:#6b7280;">EMAIL</p>
                            <a href="mailto:${email}" 
                            style="display:inline-block;margin-top:4px;font-size:14px;font-weight:500;color:#111827;text-decoration:none;">
                            ${email}
                            </a>
                        </td>
                        </tr>

                        ${
                          subject
                            ? `
                        <!-- Subject -->
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:11px;color:#6b7280;">SUBJECT</p>
                            <p style="margin:4px 0 0 0;font-size:14px;font-weight:500;color:#111827;">
                            ${subject}
                            </p>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                          phone
                            ? `
                        <!-- Phone -->
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:11px;color:#6b7280;">PHONE</p>
                            <a href="tel:${cleanPhone}" 
                            style="display:inline-block;margin-top:4px;font-size:14px;font-weight:600;color:#111827;text-decoration:none;font-family:monospace;">
                            ${formattedPhone}
                            </a>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                        ${
                          company
                            ? `
                        <!-- Company -->
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:11px;color:#6b7280;">COMPANY</p>
                            <p style="margin:4px 0 0 0;font-size:14px;font-weight:500;color:#111827;">
                            ${company}
                            </p>
                        </td>
                        </tr>
                        `
                            : ""
                        }

                    </table>

                    <!-- Message -->
                    <div style="margin-top:20px;">
                        <p style="margin:0 0 8px 0;font-size:11px;color:#6b7280;">MESSAGE</p>
                        <div style="padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;">
                        <p style="margin:0;font-size:14px;line-height:1.6;color:#111827;white-space:pre-line;">
                            ${message}
                        </p>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div style="margin-top:20px;">
                        <a href="mailto:${email}"
                        style="display:inline-block;padding:10px 16px;border-radius:6px;background:#111827;color:#ffffff;font-size:13px;font-weight:500;text-decoration:none;">
                        Reply to ${name}
                        </a>
                    </div>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="padding:14px 24px;border-top:1px solid #e5e7eb;text-align:center;">
                    <p style="margin:0;font-size:11px;color:#9ca3af;">
                        Sent via portfolio • ${new Date().toLocaleString()}
                    </p>
                    </td>
                </tr>

                </table>

            </td>
            </tr>
        </table>

        </div>
        `;
}
