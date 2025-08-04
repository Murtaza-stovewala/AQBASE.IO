import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AOSInit } from '@/components/aos';

export const metadata: Metadata = {
  title: 'Aqbase.io | Custom Web & App Development',
  description: 'Aqbase is a trusted website & app development partner for businesses and startups. We build high-performance, visually appealing digital solutions.',
  openGraph: {
      title: 'Aqbase.io | Custom Web & App Development',
      description: 'Your trusted partner for custom web and mobile app solutions.',
      // In a real application, you would have a file at public/og-image.png
      // images: ['/og-image.png'] 
  }
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
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
