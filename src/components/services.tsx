import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Smartphone, ShoppingCart, ShieldCheck } from "lucide-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { src: string; style: React.CSSProperties; speed: string; autoplay: boolean; loop: boolean; }, HTMLElement>;
    }
  }
}

const services = [
  {
    icon: <dotlottie-wc src="https://lottie.host/5d5c1285-7341-4651-9c7e-34a629494e01/sXHKLFOcz0.lottie" style={{ width: '100%', height: '140px' }} speed="1" autoplay loop className="mb-4 transition-transform duration-500 group-hover:scale-110"></dotlottie-wc>,
    title: "Web Design & Development",
    description: "Building modern, fast & responsive websites tailored for your needs.",
    delay: "0",
  },
  {
    icon: <dotlottie-wc src="https://lottie.host/04c17c12-730b-421d-9f5e-294953267d00/TR5fGKv6bI.lottie" style={{ width: '100%', height: '140px' }} speed="1" autoplay loop className="mb-4 transition-transform duration-500 group-hover:scale-110"></dotlottie-wc>,
    title: "E-commerce Solutions",
    description: "Custom online stores with payment integration & smooth UX.",
    delay: "100",
  },
  {
    icon: <Smartphone className="h-20 w-20 mb-4 text-primary transition-transform duration-500 group-hover:scale-110" />,
    title: "App Development",
    description: "Cross-platform apps designed for performance & great usability.",
    delay: "200",
  },
  {
    icon: <dotlottie-wc src="https://lottie.host/01902b79-fc2a-4068-ba08-6dd5c44e39f6/lkURLJTqG6.lottie" style={{ width: '100%', height: '140px' }} speed="1" autoplay loop className="mb-4 transition-transform duration-500 group-hover:scale-110"></dotlottie-wc>,
    title: "Ongoing Support & Maintenance",
    description: "Reliable support and maintenance to keep your application running smoothly.",
    delay: "300",
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <Card className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer h-full">
                <CardHeader className="items-center w-full">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-primary mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-gray-600 text-sm">
                  {service.description}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
