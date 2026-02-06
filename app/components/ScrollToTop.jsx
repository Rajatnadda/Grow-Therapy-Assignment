"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    window.scrollTo(0, 0);

    return () => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'auto';
        }
    };
  }, []);

  return null;
}
