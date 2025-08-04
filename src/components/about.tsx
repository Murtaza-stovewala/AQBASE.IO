import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex flex-col items-center" data-aos="fade-right">
            <Badge 
              variant="outline" 
              className="text-sm py-1 px-4 rounded-full self-center border-primary/30 bg-card text-primary mb-4"
            >
             Our Philosophy
            </Badge>
            <div className="relative w-full max-w-md mx-auto">
              <Image 
                src="https://i.ibb.co/kswxbjHN/AQBASE-1.png"
                alt="Our team collaborating"
                width={400}
                height={400}
                className="rounded-xl shadow-2xl object-cover w-full h-full"
                data-ai-hint="team collaboration"
              />
              <Card className="absolute -bottom-8 -right-8 w-64 bg-background/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-headline">Agile. Insight-Driven. <br /> Human-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight font-headline">
              Crafting Scalable Web <br /> & App Experiences
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Aqbase, we don’t just build software — we build partnerships.  
              Our mission: transform your vision into a market-ready product that connects with users and delivers results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We collaborate closely, using an agile process where your ideas guide development. The result? Software that’s technically sound and truly aligned with your goals.
            </p>
             <p className="mt-4 text-muted-foreground leading-relaxed font-semibold text-primary">
              Transparency. Craftsmanship. Constant Improvement.  
              These aren’t buzzwords — they’re our way of working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
