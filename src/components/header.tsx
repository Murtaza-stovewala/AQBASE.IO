"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { CodeXml, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    if(isMobile) {
      setIsOpen(false);
    }
  };
  
  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Aqbase.io</span>
          </a>
        </div>
        {isMobile ? (
          <div className="flex-1 flex justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col items-start space-y-4 pt-8">
                  <NavItems />
                   <Button asChild className="w-full mt-4">
                    <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Book a Consultation</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
              <NavItems />
            </nav>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Book a Consultation</a>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
