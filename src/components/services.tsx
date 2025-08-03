import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Smartphone, PenTool } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "From custom marketing sites to complex e-commerce platforms and CMS-driven solutions, we build fast, secure, and scalable websites."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "App Development",
    description: "We design and develop native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences."
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Our human-centric design process focuses on creating intuitive, engaging, and beautiful interfaces that your users will love."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Do Best</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive suite of services to bring your digital products to life, from initial concept to launch and beyond.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-background hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4 text-2xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
