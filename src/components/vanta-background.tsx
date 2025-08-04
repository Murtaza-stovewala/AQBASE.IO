"use client";

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    VANTA: any;
  }
}

export function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let vantaInstance: any = null;

    const setupVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA && vantaRef.current) {
        const isDarkMode = document.documentElement.classList.contains('dark');
        
        if (vantaEffect) {
            vantaEffect.destroy();
        }

        vantaInstance = window.VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: isDarkMode ? 0x224455 : 0xadd8e6,
          midtoneColor: isDarkMode ? 0x112233 : 0x87ceeb,
          lowlightColor: isDarkMode ? 0x0 : 0x00bfff,
          baseColor: isDarkMode ? 0x222222 : 0xf0f8ff,
          blurFactor: 0.5,
          speed: 1.2,
          zoom: 0.8,
        });
        setVantaEffect(vantaInstance);
      }
    };
    
    // Initial setup
    const timeoutId = setTimeout(setupVanta, 500);

    // Re-setup on theme change
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setupVanta();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0" />;
}
