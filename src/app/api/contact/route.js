import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return Response.json({ ok: false, error: "All fields are required." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: "RESEND_API_KEY is missing in .env.local" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // DEBUG: show what resend returned in terminal
    console.log("RESEND RESULT:", result);

    // Resend often returns: { data: { id: "..." }, error: null }
    const id = result?.data?.id || result?.id || null;

    if (result?.error) {
      return Response.json({ ok: false, error: result.error.message || "Resend error" }, { status: 500 });
    }

    return Response.json({ ok: true, id });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return Response.json({ ok: false, error: "Server error. Try again later." }, { status: 500 });
  }
}
