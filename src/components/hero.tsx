"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground font-headline">
                    Crafting Scalable Web & App Experiences
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    We are Aqbase, a dedicated team of developers and designers creating high-performance websites and mobile apps that drive growth for startups and enterprises.
                </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Book a Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
