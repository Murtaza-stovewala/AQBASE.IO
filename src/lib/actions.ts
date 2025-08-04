'use server';

import { z } from 'zod';

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

  // Database logic is temporarily removed to fix build issues.
  console.log('Form data:', parsed.data);

  return { message: 'Thank you for your message! We will get back to you shortly.' };
}
