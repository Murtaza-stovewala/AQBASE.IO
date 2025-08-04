'use server';

import { z } from 'zod';
import { sendEmail } from '@/ai/flows/send-email-flow';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  package: z.string().min(1, 'Please select a package.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: 'Invalid form data. Please check the fields below.',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // In a real app, you would send an email or save to a CRM here.
  console.log('New contact form submission:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Package:', parsed.data.package);
  console.log('Message:', parsed.data.message);

  try {
    await sendEmail({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev', // CHANGE THIS to your email
      subject: `New Inquiry from ${parsed.data.name} - ${parsed.data.package} Package`,
      html: `
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Package:</strong> ${parsed.data.package}</p>
        <p><strong>Message:</strong></p>
        <p>${parsed.data.message}</p>
      `,
    });
    return { message: 'Thank you for your message! We will get back to you shortly.' };
  } catch (e) {
    console.error(e);
    return {
      message: 'There was an error sending your message. Please try again later.',
      issues: ['Email sending failed.'],
    };
  }
}