import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Taj Collection",
    category: "E-commerce",
    imageUrl: "https://i.ibb.co/NnJXQ0tV/TAJ-MARKETPLACE.png",
    dataAiHint: "clothing store",
    url: "https://tajcollection.vercel.app/"
  },
  
  
  
  {
    name: "Gift Shop",
    category: "Gifting Shop",
    imageUrl: "https://i.ibb.co/Qj608tcM/GIFT-SHOP.png",
    dataAiHint: "gift shop",
    url: "https://giftshop-blond.vercel.app/"
  },
  {
    name: "Maakirasoi",
    category: "Restaurant Website",
    imageUrl: "https://i.ibb.co/BKqq811q/MAA-KI-RASOI.png",
    dataAiHint: "restaurant food",
    url: "https://maakirasoi-ebon.vercel.app/"
  },
  {
    name: "FitnessFlow",
    category: "Gym Website",
    imageUrl: "https://i.ibb.co/jZ1D5RY6/FITNESS-FLOW.png",
    dataAiHint: "gym fitness",
    url: "https://fitnessflow-gym.vercel.app/"
  },
  {
    name: "AB Home Solutions",
    category: "Home Solutions",
    imageUrl: "https://i.ibb.co/Tx45rFQw/AB-HOME-SOLUTION.png",
    dataAiHint: "home interior",
    url: "https://abhomesolution.vercel.app/"
  },
 /* {
    name: "Creative Agency",
    category: "Website",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "creative agency",
    url: "#"
  }*/
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="bg-background/80 backdrop-blur-sm p-6 rounded-xl">
          <CardHeader className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="outline" className="text-sm py-1 px-4 rounded-full self-center border-primary/30 bg-card text-primary">Our Work</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proud of the work we do. Here are some of our favorite projects we've launched for our clients.
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={index} 
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  >
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer bg-card rounded-xl">
                    <CardContent className="p-0">
                      <Image
                        src={project.imageUrl}
                        alt={`Screenshot of ${project.name}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto aspect-video transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.dataAiHint}
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-bold font-headline">{project.name}</h3>
                          <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
