"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from 'next/image';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('#home');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveLink(href);
    const targetId = href.split('?')[0];
    
    if (targetId === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    } else {
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

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
          className={`text-sm font-medium transition-colors hover:text-primary ${activeLink === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
            <Image src="https://i.ibb.co/kswxbjHN/AQBASE-1.png" alt="Aqbase logo" width={24} height={24} className="h-6 w-6" />
            <span className="font-bold text-lg">Aqbase.io</span>
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
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <NavItems />
            </nav>
            <div className="flex items-center space-x-4 ml-6">
              <Button asChild className="shadow-sm hover:scale-105 transition-transform duration-300">
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Book a Consultation</a>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
