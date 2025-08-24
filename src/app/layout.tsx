import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AOSInit } from '@/components/aos';

export const metadata: Metadata = {
  title: 'AqBase Studio | Custom Web & App Development',
  description: 'AqBase Studio is a trusted website & app development partner for businesses and startups. We build high-performance, visually appealing digital solutions that drive growth. Specializing in custom web design, e-commerce, and mobile applications.',
  keywords: ['web development', 'app development', 'ui/ux design', 'e-commerce solutions', 'startup web design', 'custom software', 'AqBase Studio'],
  openGraph: {
      title: 'AqBase Studio | Custom Web & App Development Solutions',
      description: 'Your trusted partner for custom web and mobile app solutions. From concept to launch, we deliver scalable and beautiful digital products.',
      // In a real application, you would have a file at public/og-image.png
      // images: ['/og-image.png'] 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js" type="module"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
