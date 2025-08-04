import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p>This is the Terms of Service page. You can add your content here.</p>
      </main>
      <Footer />
    </div>
  );
}