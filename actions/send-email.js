"use server";

import { Resend } from "resend";
import { RESEND_API_KEY } from "@/lib/env";

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
