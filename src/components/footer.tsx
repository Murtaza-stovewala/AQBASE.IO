import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
               <Image src="https://i.ibb.co/kswxbjHN/AQBASE-1.png" alt="Aqbase logo" width={24} height={24} className="h-6 w-6" />
              <span className="font-bold text-lg">Aqbase.io</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Innovative digital solutions for businesses looking to enhance
              their online presence and achieve digital excellence.
            </p>
            <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aqbase.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}