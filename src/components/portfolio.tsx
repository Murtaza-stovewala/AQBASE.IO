import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const projects = [
  {
    name: "Taj Collection",
    category: "E-commerce",
    dataAiHint: "clothing store",
    url: "https://tajcollection.vercel.app/"
  },
  {
    name: "Gift Shop",
    category: "Gifting Shop",
    dataAiHint: "gift shop",
    url: "https://giftshop-blond.vercel.app/"
  },
  {
    name: "Maakirasoi",
    category: "Restaurant Website",
    dataAiHint: "restaurant food",
    url: "https://maakirasoi-ebon.vercel.app/"
  },
  {
    name: "FitnessFlow",
    category: "Gym Website",
    dataAiHint: "gym fitness",
    url: "https://fitnessflow-gym.vercel.app/"
  },
  {
    name: "AB Home Solutions",
    category: "Home Solutions",
    dataAiHint: "home interior",
    url: "https://abhomesolution.vercel.app/"
  },
  {
    name: "Creative Agency",
    category: "Website",
    dataAiHint: "creative agency",
    url: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">Our Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud of the work we do. Here are some of our favorite projects we've launched for our clients.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-0">
                  <Image
                    src={`https://placehold.co/600x400.png`}
                    alt={`Screenshot of ${project.name}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto aspect-video transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                  />
                  <div className="p-4 bg-card">
                    <h3 className="text-lg font-bold font-headline">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
