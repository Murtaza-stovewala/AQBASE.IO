"use client";

import { Button } from "@/components/ui/button";

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


export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-card/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-headline">
                    Building the Future of Digital Experiences
                </h1>
                <div className="h-16 flex items-center">
                    <p className="text-2xl text-primary font-semibold md:text-3xl">
                       <StaggeredFadeIn text="Crafting Scalable Web & App Experiences" />
                    </p>
                </div>
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
          <div className="flex items-center justify-center">
            <img src="https://placehold.co/600x400.png" alt="Hero Image" className="rounded-lg shadow-2xl" data-ai-hint="abstract technology" />
          </div>
        </div>
      </div>
    </section>
  );
}
