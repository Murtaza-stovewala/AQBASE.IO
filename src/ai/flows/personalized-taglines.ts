'use server';

/**
 * @fileOverview A personalized tagline generator based on visitor type.
 *
 * - generatePersonalizedTagline - A function that generates a personalized tagline.
 * - PersonalizedTaglineInput - The input type for the generatePersonalizedTagline function.
 * - PersonalizedTaglineOutput - The return type for the generatePersonalizedTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTaglineInputSchema = z.object({
  companyType: z
    .string()
    .describe('The type of company visiting the website (e.g., startup, SME, enterprise).'),
});
export type PersonalizedTaglineInput = z.infer<typeof PersonalizedTaglineInputSchema>;

const PersonalizedTaglineOutputSchema = z.object({
  tagline: z.string().describe('A personalized tagline for the Aqbase website.'),
});
export type PersonalizedTaglineOutput = z.infer<typeof PersonalizedTaglineOutputSchema>;

export async function generatePersonalizedTagline(
  input: PersonalizedTaglineInput
): Promise<PersonalizedTaglineOutput> {
  return personalizedTaglineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTaglinePrompt',
  input: {schema: PersonalizedTaglineInputSchema},
  output: {schema: PersonalizedTaglineOutputSchema},
  prompt: `You are a marketing expert tasked with creating a personalized tagline for the Aqbase website.

The tagline should be tailored to the specific type of company visiting the website.

Company Type: {{{companyType}}}

Generate a concise and compelling tagline that resonates with the company type and highlights the value proposition of Aqbase. The generated tagline MUST be 5 words or less.
`,
});

const personalizedTaglineFlow = ai.defineFlow(
  {
    name: 'personalizedTaglineFlow',
    inputSchema: PersonalizedTaglineInputSchema,
    outputSchema: PersonalizedTaglineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
