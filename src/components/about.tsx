export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-wider text-primary font-semibold">
              Our Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
              Agile. Insight-Driven. <br className="hidden md:block" /> Human-Centric.
            </h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Aqbase, we don’t just build software — we build partnerships.  
              Our mission: transform your vision into a market-ready product that connects with users and delivers results.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We collaborate closely, using an agile process where your ideas guide development. The result? Software that’s technically sound and truly aligned with your goals.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Transparency. Craftsmanship. Constant Improvement.  
              These aren’t buzzwords — they’re our way of working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
