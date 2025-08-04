"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from 'next/link';

const packages = [
  {
    name: "Base",
    description: "Perfect for startups & small businesses needing a strong online presence.",
    features: [
      "Custom 1-3 page website (Landing, About, Contact)",
      "Responsive design (mobile-friendly)",
      "Contact form & WhatsApp integration",
      "Basic SEO setup (Google indexing, meta tags)",
      "Social media linking",
      "Essential analytics (Google Analytics setup)",
    ],
    buttonText: "Get Started",
    delay: "0",
  },
  {
    name: "Standard",
    description: "For growing businesses looking for scalability & engagement.",
    isPopular: true,
    features: [
      "Everything in Base",
      "Up to 10 pages (Home, Services/Products, Gallery, etc.)",
      "Blog section (for SEO & content marketing)",
      "Advanced SEO & analytics",
      "Booking/contact systems (tables, classes, or appointments)",
      "Product showcase or catalog (for restaurants, gyms, stores)",
    ],
    buttonText: "Choose Standard",
    delay: "100",
  },
  {
    name: "Premium",
    description: "For enterprises & brands needing advanced features & personalization.",
    features: [
      "Everything in Standard",
      "E-commerce functionality (store setup, payment gateways)",
      "Custom web application (as per business needs)",
      "AI-powered personalization (recommendations, chatbots, etc.)",
      "Loyalty programs & subscriptions (for customer retention)",
      "API integrations (CRM, third-party apps, etc.)",
      "Dedicated project manager for end-to-end support"
    ],
    buttonText: "Contact Sales",
    delay: "200",
  }
];

export default function Pricing() {
  const handlePackageSelect = (e: React.MouseEvent<HTMLAnchorElement>, packageName: string) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    const url = new URL(window.location.href);
    url.searchParams.set('package', packageName);
    window.history.pushState({}, '', url);

    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="bg-background/80 backdrop-blur-sm p-6 rounded-xl">
          <CardHeader className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-card px-3 py-1 text-sm text-primary">Pricing Plans</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Flexible Pricing for Every Stage</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the perfect plan to match your project's needs. We offer transparent pricing with no hidden fees.
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <div 
                  key={pkg.name}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={pkg.delay}
                >
                  <Card className={`flex flex-col h-full bg-card rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${pkg.isPopular ? 'border-primary shadow-primary/20' : 'border-border'}`}>
                    <CardHeader className="relative">
                      {pkg.isPopular && (
                        <Badge className="absolute top-[-12px] right-4">Most Popular</Badge>
                      )}
                      <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                       <Button asChild className="w-full hover:text-primary-foreground" variant={pkg.isPopular ? "default" : "outline"}>
                         <a href={`#contact?package=${pkg.name.toLowerCase()}`} onClick={(e) => handlePackageSelect(e, pkg.name.toLowerCase())}>{pkg.buttonText}</a>
                       </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
