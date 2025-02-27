"use client";
import { FC, useEffect } from 'react';

const Tawkto: FC = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/67bdba7927f6bf190cf473f9/1ikui0qt5';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document
    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode?.insertBefore(script, s0);

    // Make sure Tawk object is available globally
    script.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function () {
          window.Tawk_API.hideWidget();
        };
      }
    };

    // Cleanup the effect
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // No UI rendered, it's just loading the script
};

export default Tawkto;
