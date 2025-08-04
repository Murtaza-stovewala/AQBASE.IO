"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleSeeOurWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-secondary overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div 
            className="flex flex-col justify-center space-y-6"
            data-aos="fade-up"
          >
            <Badge 
              variant="outline" 
              className="text-sm py-1 px-4 rounded-full self-center border-primary/30 bg-card text-primary"
            >
             🚀 Digital Solutions for Modern Brands
            </Badge>
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Crafting Scalable Web <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        & App Experiences
                    </span>
                </h1>
                <p className="max-w-[550px] mx-auto text-muted-foreground md:text-lg">
                    We are Aqbase, a dedicated team of developers and designers creating high-performance websites and mobile apps that drive growth for startups and enterprises.
                </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="shadow-lg transition-transform duration-300 hover:scale-105 hover:text-primary-foreground"
              >
                <a href="#contact">Book a Free Consultation</a>
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                asChild
                className="group"
              >
                <a href="#portfolio" onClick={handleSeeOurWorkClick}>
                  See Our Work 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
