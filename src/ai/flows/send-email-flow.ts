'use server';
/**
 * @fileOverview A Resend email sending agent.
 *
 * - sendEmail - A function that handles sending an email via Resend.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

const SendEmailInputSchema = z.object({
  from: z.string().describe('The email address to send from.'),
  to: z.string().describe('The email address to send to.'),
  subject: z.string().describe('The subject of the email.'),
  html: z.string().describe('The HTML body of the email.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<void> {
  await sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send(input);
  }
);