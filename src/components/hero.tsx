"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, Wand2 } from 'lucide-react';
import { generatePersonalizedTagline } from '@/ai/flows/personalized-taglines';
import type { PersonalizedTaglineOutput } from '@/ai/flows/personalized-taglines';

const companyTypes = ["Startup", "SME", "Enterprise"];

export default function Hero() {
  const [selectedType, setSelectedType] = useState<string>(companyTypes[0]);
  const [tagline, setTagline] = useState<PersonalizedTaglineOutput | null>({ tagline: "Your Vision, Engineered." });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    generateTagline(selectedType);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  const generateTagline = async (companyType: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generatePersonalizedTagline({ companyType });
      setTagline(result);
    } catch (e) {
      console.error(e);
      setError("Failed to generate tagline. Please try again.");
      setTagline({ tagline: "Your Vision, Engineered." });
    } finally {
      setIsLoading(false);
    }
  };

  const StaggeredFadeIn = ({ text }: { text: string }) => {
    return (
        <span className="inline-block">
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="animate-fade-in-up inline-block"
                    style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
  };

  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-headline">
                    Building the Future of Digital Experiences
                </h1>
                <div className="h-16 flex items-center">
                    {isLoading ? (
                        <div className="flex items-center space-x-2 text-primary">
                            <Loader2 className="h-6 w-6 animate-spin" />
                            <p className="text-xl text-muted-foreground">Generating your tagline...</p>
                        </div>
                    ) : (
                        <p className="text-2xl text-primary font-semibold md:text-3xl">
                           {tagline && <StaggeredFadeIn text={tagline.tagline} />}
                        </p>
                    )}
                </div>
                 {error && <p className="text-destructive">{error}</p>}
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are Aqbase, a dedicated team of developers and designers creating high-performance websites and mobile apps that drive growth for startups and enterprises.
                </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">Book a Free Consultation</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg border border-border">
            <div className="space-y-2 text-center">
                <Wand2 className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-xl font-bold font-headline">Personalize Your Tagline</h3>
                <p className="text-sm text-muted-foreground">Select your company type to see an AI-powered tagline just for you.</p>
            </div>
            <RadioGroup value={selectedType} onValueChange={setSelectedType} className="w-full space-y-2">
                {companyTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2 bg-card/50 p-3 rounded-md border border-border has-[:checked]:border-primary has-[:checked]:ring-1 has-[:checked]:ring-primary transition-all">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="flex-1 cursor-pointer">{type}</Label>
                    </div>
                ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
