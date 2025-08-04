"use client";

import { useEffect, useRef, useState } from 'react';

// This is a workaround for the fact that Vanta.js is not a real ES module
// and we have to use a script tag to include it.
declare global {
  interface Window {
    VANTA: any;
  }
}

export function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !vantaEffect && vantaRef.current) {
      const isDarkMode = document.documentElement.classList.contains('dark');

      const vantaInstance = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: isDarkMode ? 0x224455 : 0xadd8e6,
        midtoneColor: isDarkMode ? 0x112233 : 0x87ceeb,
        lowlightColor: isDarkMode ? 0x0 : 0x00bfff,
        baseColor: isDarkMode ? 0x0 : 0xffffff,
        blurFactor: 0.5,
        speed: 1.2,
        zoom: 0.8,
      });

      setVantaEffect(vantaInstance);
    }
    
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full" />;
}
