import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from 'next/link';

const packages = [
  {
    name: "Base",
    description: "For startups and small projects that need a professional web presence.",
    features: [
      "Custom Landing Page",
      "Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
    ],
    buttonText: "Get Started",
    delay: "0",
  },
  {
    name: "Standard",
    description: "Perfect for growing businesses requiring more features and scalability.",
    isPopular: true,
    features: [
      "Everything in Base",
      "Up to 10-page Website",
      "CMS Integration (e.g., WordPress, Contentful)",
      "Advanced SEO & Analytics",
      "Priority Email Support",
    ],
    buttonText: "Choose Standard",
    delay: "100",
  },
  {
    name: "Premium",
    description: "Comprehensive solutions for enterprises and complex applications.",
    features: [
      "Everything in Standard",
      "Custom Web Application",
      "E-commerce Functionality",
      "API Integrations",
      "Dedicated Project Manager & Support"
    ],
    buttonText: "Contact Sales",
    delay: "200",
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">Pricing Plans</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Flexible Pricing for Every Stage</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan to match your project's needs. We offer transparent pricing with no hidden fees.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className="group"
              data-aos="fade-up"
              data-aos-delay={pkg.delay}
            >
              <Card className={`flex flex-col h-full bg-background rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${pkg.isPopular ? 'border-primary shadow-primary/20' : 'border-border'}`}>
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
                     <Link href={`#contact?package=${pkg.name.toLowerCase()}`}>{pkg.buttonText}</Link>
                   </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
