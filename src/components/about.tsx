export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">Our Philosophy</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Agile, Insight-Driven, and Human-Centric</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Aqbase, we don't just build software; we build partnerships. Our mission is to transform your vision into a market-ready product that captivates users and drives business results. We believe in a collaborative, agile process where your insights guide our development, ensuring the final product is not only technically excellent but also perfectly aligned with your goals. Our values of transparency, craftsmanship, and continuous improvement are at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
