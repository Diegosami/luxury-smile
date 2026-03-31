"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
}

const delayClass: Record<number, string> = { 0:"",1:"d1",2:"d2",3:"d3",4:"d4",5:"d5" };

export default function RevealWrapper({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = setTimeout(() => el.classList.add("visible"), 800);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("visible");
      clearTimeout(fallback);
      return;
    }
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); clearTimeout(fallback); observer.unobserve(el); } },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => { clearTimeout(fallback); observer.disconnect(); };
  }, []);

  return <div ref={ref} className={`reveal ${delayClass[delay]} ${className}`}>{children}</div>;
}
