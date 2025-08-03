import { CodeXml, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 w-full shrink-0 items-center px-4 md:px-6">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
            <CodeXml className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aqbase.io. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
