"use client";

import Image from "next/image";
import { useState } from "react";
import RevealWrapper from "@/components/RevealWrapper";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DentalPattern from "@/components/DentalPattern";

const WA = `https://wa.me/573004970078?text=${encodeURIComponent("Hola Luxury Smile, quiero agendar una cita")}`;
const IG = "https://www.instagram.com/luxurysmile_monteria/";

function WAIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function IGIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
      <path d="M6.5 10l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Services carousel data ── */
const services = [
  {
    name: "Diseño de Sonrisa",
    desc: "Transformación estética basada en tus proporciones faciales. Alta estética, resultado natural.",
    img: "/smile-closeup.png",
  },
  {
    name: "Implantes Dentales",
    desc: "Titanio grado médico con planificación 3D. Solución permanente con garantía de por vida.",
    img: "/implant-procedure.png",
  },
  {
    name: "Armonización Orofacial",
    desc: "Equilibrio facial perfecto con técnicas de última generación. Resultados naturales inmediatos.",
    img: "/harmonization-face.png",
  },
  {
    name: "Ortodoncia",
    desc: "Brackets y alineadores para oclusión ideal. Corregimos tu mordida con precisión milimétrica.",
    img: "/smile-hero.png",
  },
  {
    name: "Odontopediatría",
    desc: "Especialistas en la sonrisa de los niños. Ambiente amigable, sin miedo al dentista.",
    img: "/clinic-interior.png",
  },
  {
    name: "Blanqueamiento",
    desc: "Hasta 8 tonos más claro en una sesión. Resultado profesional garantizado.",
    img: "/smile-closeup.png",
  },
  {
    name: "Cirugía Oral",
    desc: "Procedimientos con mínima invasión, anestesia premium y recuperación rápida.",
    img: "/implant-procedure.png",
  },
  {
    name: "Rehabilitación Oral",
    desc: "Restauración integral de función y estética para recuperar tu sonrisa completa.",
    img: "/clinic-interior.png",
  },
  {
    name: "Regeneración Ósea",
    desc: "Técnicas avanzadas para crear la base perfecta para implantes dentales.",
    img: "/implant-procedure.png",
  },
];

/* ── Services Carousel Component ── */
function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(services.length / perPage);

  return (
    <div>
      {/* Carousel controls */}
      <div className="flex items-center justify-end gap-3 mb-8">
        <button
          onClick={() => setActive(Math.max(0, active - 1))}
          disabled={active === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
          style={{
            border: "1px solid rgba(26,58,107,0.15)",
            background: active === 0 ? "transparent" : "#fff",
            opacity: active === 0 ? 0.3 : 1,
          }}
          aria-label="Anterior"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1a3a6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 4l-4 4 4 4"/>
          </svg>
        </button>
        <button
          onClick={() => setActive(Math.min(totalPages - 1, active + 1))}
          disabled={active === totalPages - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
          style={{
            border: "1px solid rgba(26,58,107,0.15)",
            background: active === totalPages - 1 ? "transparent" : "#fff",
            opacity: active === totalPages - 1 ? 0.3 : 1,
          }}
          aria-label="Siguiente"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#1a3a6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4l4 4-4 4"/>
          </svg>
        </button>
      </div>

      {/* Cards container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${active * 100}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(pageIdx * perPage, pageIdx * perPage + perPage).map((s, i) => (
                <div key={i} className="card-soft overflow-hidden cursor-default group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.4) 100%)" }} />
                  </div>
                  {/* Content */}
                  <div className="p-7 flex-1 flex flex-col">
                    <span className="f-sans font-semibold block mb-1" style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: "#1a3a6b" }}>
                      0{pageIdx * perPage + i + 1}
                    </span>
                    <h3 className="f-serif font-semibold mb-3" style={{ fontSize: "1.2rem", color: "#0a1628" }}>{s.name}</h3>
                    <p className="f-sans text-sm leading-relaxed flex-1" style={{ fontSize: "0.78rem", color: "#94A3B8", lineHeight: "1.8" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="cursor-pointer transition-all duration-300"
            style={{
              width: active === i ? "2rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              background: active === i ? "#1a3a6b" : "rgba(26,58,107,0.15)",
              border: "none",
            }}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════
          HERO — Dramatic editorial full-screen
          ══════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src="/smile-hero.png"
          alt="Luxury Smile — Sonrisa perfecta en Montería"
          fill className="object-cover object-top" priority sizes="100vw"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(10,22,40,0.15) 0%, rgba(10,22,40,0.4) 40%, rgba(10,22,40,0.85) 75%, #0a1628 100%)"
        }} />

        {/* Floating glass badge */}
        <RevealWrapper delay={3}>
          <div className="absolute top-28 right-6 md:right-14 glass rounded-2xl px-6 py-5 text-center z-20">
            <div className="flex gap-0.5 justify-center mb-2">
              {[...Array(5)].map((_,i) => <span key={i} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>)}
            </div>
            <p className="f-serif font-bold text-white" style={{ fontSize: "1.4rem", lineHeight: 1 }}>5.0</p>
            <p className="f-sans mt-1" style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}>82 RESEÑAS GOOGLE</p>
          </div>
        </RevealWrapper>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 pb-24 md:pb-32">
          <RevealWrapper delay={0}>
            <p className="label mb-6">Clínica Odontológica Premium · Montería, Córdoba</p>
          </RevealWrapper>
          <RevealWrapper delay={1}>
            <h1 className="f-serif font-semibold text-white leading-[0.92]"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7.5rem)", letterSpacing: "-0.02em" }}>
              Tu sonrisa,<br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.65)" }}>perfecta.</em>
            </h1>
          </RevealWrapper>
          <RevealWrapper delay={2}>
            <p className="f-sans mt-6 max-w-lg" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.8" }}>
              La clínica dental de referencia en Montería. Implantología, diseño de sonrisa
              y armonización orofacial con tecnología de nivel internacional.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={3}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                <WAIcon /> Agendar cita gratis
              </a>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <IGIcon /> Ver casos reales
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="py-4 overflow-hidden" style={{ background: "#1a3a6b" }}>
        <div className="marquee-track">
          {["Diseño de Sonrisa","·","Implantes Dentales","·","Armonización Orofacial","·",
            "Ortodoncia","·","Blanqueamiento","·","Cirugía Oral","·","Odontopediatría","·",
            "Diseño de Sonrisa","·","Implantes Dentales","·","Armonización Orofacial","·",
            "Ortodoncia","·","Blanqueamiento","·","Cirugía Oral","·","Odontopediatría","·",
          ].map((w, i) => (
            <span key={i} className="f-sans px-5 whitespace-nowrap"
              style={{ fontSize: "0.6rem", letterSpacing: "0.28em", color: w === "·" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.5)" }}>{w}</span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SOBRE NOSOTROS
          ══════════════════════════════════════════════════════════ */}
      <section id="nosotros" className="py-32 px-6 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealWrapper>
            <div className="relative">
              <div className="relative h-[560px] rounded-[2rem] overflow-hidden"
                style={{ boxShadow: "0 40px 80px rgba(10,22,40,0.12)" }}>
                <Image
                  src="/clinic-interior.png"
                  alt="Interior clínica Luxury Smile Montería"
                  fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-2xl px-7 py-6"
                style={{ background: "#0a1628", boxShadow: "0 20px 50px rgba(10,22,40,0.4)" }}>
                <p className="f-serif text-white font-light" style={{ fontSize: "2.8rem", lineHeight: 1 }}>+82</p>
                <p className="f-sans mt-1.5" style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>PACIENTES FELICES</p>
              </div>
              {/* Google badge */}
              <div className="absolute -top-4 -left-4 md:-left-8 rounded-2xl px-5 py-4 flex items-center gap-3"
                style={{ background: "#1a3a6b", boxShadow: "0 15px 40px rgba(26,58,107,0.3)" }}>
                <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6L5.1 17l.9-5.3-4-3.9 5.5-.8L10 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="f-sans font-bold text-white" style={{ fontSize: "0.75rem" }}>5.0 Google</p>
                  <p className="f-sans" style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.8)" }}>CALIFICACIÓN PERFECTA</p>
                </div>
              </div>
            </div>
          </RevealWrapper>

          <div>
            <RevealWrapper>
              <p className="label-dark mb-5">Por qué elegirnos</p>
              <h2 className="f-serif font-semibold leading-tight mb-2" style={{ fontSize: "clamp(2.2rem,4.5vw,3.6rem)", color: "#0a1628" }}>
                La clínica dental<br />
                <em style={{ fontStyle: "italic", color: "#1a3a6b" }}>de referencia</em><br />
                en Montería
              </h2>
              <div className="divider" />
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <p className="f-sans leading-relaxed mb-12" style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: "1.9" }}>
                Somos la única clínica en Montería que combina implantología de nivel internacional
                con armonización orofacial y diseño de sonrisa. Nuestro equipo de especialistas
                trabaja con tecnología de punta para garantizar resultados que superan expectativas.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={2}>
              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { n: "5.0★", l: "Google Maps" },
                  { n: "+9",   l: "Especialidades" },
                  { n: "100%", l: "Valoración gratis" },
                  { n: "Lun–Sáb", l: "Atención" },
                ].map((s) => (
                  <div key={s.l} className="pb-4" style={{ borderBottom: "1px solid rgba(10,22,40,0.06)" }}>
                    <p className="f-serif font-semibold" style={{ fontSize: "2rem", color: "#0a1628" }}>{s.n}</p>
                    <p className="f-sans mt-1" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#94A3B8" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
            <RevealWrapper delay={3}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-outline-navy">
                <WAIcon /> Agendar primera cita
              </a>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SERVICIOS — Carousel with images
          ══════════════════════════════════════════════════════════ */}
      <section id="servicios" className="py-32 px-6 md:px-14" style={{ background: "#f4f7fc" }}>
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="label-dark mb-4">Especialidades</p>
                <h2 className="f-serif font-light" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", color: "#0a1628" }}>
                  Todo lo que necesitas<br /><em style={{ color: "#1a3a6b" }}>en un solo lugar</em>
                </h2>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-outline-navy flex-shrink-0">
                Consultar servicios
              </a>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={1}>
            <ServicesCarousel />
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          IMPLANTES — Dark cinematic section
          ══════════════════════════════════════════════════════════ */}
      <section id="implantes" className="overflow-hidden" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <RevealWrapper className="relative min-h-[550px] lg:min-h-[650px]">
            <Image
              src="/implant-procedure.png"
              alt="Implantes dentales Luxury Smile Montería"
              fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,22,40,0) 50%, #0a1628 100%)" }} />
            <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0) 50%, #0a1628 100%)" }} />
          </RevealWrapper>

          <div className="px-8 md:px-16 py-24 lg:py-32 flex flex-col justify-center">
            <RevealWrapper>
              <p className="label mb-5">Especialidad estrella</p>
              <h2 className="f-serif font-light text-white leading-tight mb-2" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                Implantología<br /><em style={{ color: "rgba(255,255,255,0.5)" }}>de nivel internacional</em>
              </h2>
              <div className="divider-w" />
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <p className="f-sans leading-relaxed mb-10" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.9" }}>
                Devolvemos la funcionalidad y estética de tus dientes naturales con implantes de
                titanio de grado médico, planificación digital 3D y seguimiento personalizado.
              </p>
              <ul className="flex flex-col gap-4 mb-12">
                {[
                  "Titanio grado médico certificado",
                  "Planificación digital 3D preoperatoria",
                  "Anestesia de última generación — sin dolor",
                  "Garantía de por vida en el implante",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <CheckCircle />
                    <span className="f-sans" style={{ fontSize: "0.8rem" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>
            <RevealWrapper delay={2}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ alignSelf: "flex-start" }}>
                <WAIcon /> Consultar implantes
              </a>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ARMONIZACIÓN — White reversed layout
          ══════════════════════════════════════════════════════════ */}
      <section id="armonizacion" className="py-32 px-6 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <RevealWrapper>
              <p className="label-dark mb-5">Tratamiento premium</p>
              <h2 className="f-serif font-light leading-tight mb-2" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", color: "#0a1628" }}>
                Armonización<br /><em style={{ fontStyle: "italic", color: "#1a3a6b" }}>Orofacial</em>
              </h2>
              <div className="divider" />
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <p className="f-sans leading-relaxed mb-10" style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: "1.9" }}>
                Equilibrio perfecto entre función y estética facial. Combinamos bótox y ácido
                hialurónico premium con análisis digital personalizado para lograr resultados
                naturales, simétricos y duraderos.
              </p>
              <ul className="flex flex-col gap-4 mb-12">
                {[
                  "Análisis facial digital personalizado",
                  "Bótox y ácido hialurónico premium",
                  "Resultados naturales e inmediatos",
                  "Procedimiento ambulatorio sin dolor",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-4" style={{ color: "#64748B" }}>
                    <CheckCircle />
                    <span className="f-sans" style={{ fontSize: "0.8rem" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>
            <RevealWrapper delay={2}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-outline-navy">
                <WAIcon /> Consultar tratamiento
              </a>
            </RevealWrapper>
          </div>

          <RevealWrapper className="order-1 lg:order-2">
            <div className="relative h-[560px] rounded-[2rem] overflow-hidden"
              style={{ boxShadow: "0 40px 80px rgba(10,22,40,0.12)" }}>
              <Image
                src="/harmonization-face.png"
                alt="Armonización orofacial Luxury Smile"
                fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TESTIMONIOS — Navy + dental SVG pattern
          ══════════════════════════════════════════════════════════ */}
      <section id="testimonios" className="py-32 px-6 md:px-14 relative" style={{ background: "#0a1628" }}>
        <DentalPattern opacity={0.04} />
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealWrapper className="mb-20 text-center">
            <p className="label mb-5">Testimonios</p>
            <h2 className="f-serif font-light text-white" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)" }}>
              Lo que dicen<br /><em>nuestros pacientes</em>
            </h2>
            <div className="flex gap-1 justify-center mt-6">
              {[...Array(5)].map((_,i) => <span key={i} style={{ color: "#f59e0b", fontSize: "1.1rem" }}>★</span>)}
              <span className="f-sans ml-3" style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", alignSelf: "center" }}>5.0 · 82 reseñas Google</span>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { q: "El mejor lugar para implantes en Montería. Profesionalismo total, me explicaron cada paso y el resultado es espectacular.", n: "Valentina R.", s: "Diseño de Sonrisa" },
              { q: "Me hice el diseño de sonrisa y quedé impresionada. Cambiaron mi vida. El equipo es increíble y el resultado superó todas mis expectativas.", n: "Carolina M.", s: "Implantes Dentales" },
              { q: "Llevé a mi hijo de 8 años y la odontopediatra fue genial. Salió feliz y sin miedo. Definitivamente la mejor clínica de Montería.", n: "Andrés P.", s: "Odontopediatría" },
            ].map((r, i) => (
              <RevealWrapper key={i} delay={([1,2,3][i] as 1|2|3)}>
                <div className="glass rounded-[1.5rem] p-8 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_,j) => <span key={j} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>)}
                  </div>
                  <p className="f-serif font-light flex-1 mb-8 text-white leading-relaxed" style={{ fontSize: "1.1rem" }}>
                    &ldquo;{r.q}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ background: "rgba(26,58,107,0.4)", fontSize: "0.8rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                      {r.n[0]}
                    </div>
                    <div>
                      <p className="f-sans font-semibold text-white" style={{ fontSize: "0.75rem" }}>{r.n}</p>
                      <p className="f-sans" style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>{r.s}</p>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INSTAGRAM CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-14 bg-white">
        <RevealWrapper>
          <div className="max-w-7xl mx-auto rounded-[2rem] relative overflow-hidden"
            style={{ background: "#0a1628", minHeight: "380px" }}>
            <Image
              src="/smile-closeup.png"
              alt="Casos reales Luxury Smile"
              fill className="object-cover" style={{ opacity: 0.15 }}
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.6) 100%)" }} />
            <div className="relative z-10 px-8 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
              <div>
                <p className="label mb-5">Síguenos</p>
                <h2 className="f-serif font-light text-white leading-tight" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                  Mira casos reales<br /><em>de nuestros pacientes</em>
                </h2>
                <p className="f-sans mt-5" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", maxWidth: "28rem", lineHeight: "1.85" }}>
                  Antes y después reales. Diseños de sonrisa, implantes y armonizaciones publicados todos los días.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-shrink-0">
                <a href={IG} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IGIcon /> @luxurysmile_monteria
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                  <WAIcon /> Agendar cita
                </a>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA FINAL — with dental pattern
          ══════════════════════════════════════════════════════════ */}
      <section className="py-40 px-6 text-center relative" style={{ background: "#0a1628" }}>
        <DentalPattern opacity={0.03} />
        <RevealWrapper className="max-w-xl mx-auto relative z-10">
          <div className="relative w-24 h-24 mx-auto mb-12 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 20px 50px rgba(10,22,40,0.4)" }}>
            <Image src="/logo.jpg" alt="Luxury Smile" fill className="object-cover" />
          </div>
          <p className="label mb-6">Primera consulta</p>
          <h2 className="f-serif font-light text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem,5.5vw,4.5rem)" }}>
            Valoración<br /><em style={{ color: "rgba(255,255,255,0.5)" }}>completamente gratis</em>
          </h2>
          <p className="f-sans leading-relaxed mx-auto mb-14" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", maxWidth: "28rem", lineHeight: "1.9" }}>
            Te evaluamos, presentamos el plan de tratamiento y el presupuesto completo,
            sin ningún costo ni compromiso. Solo en Montería, Córdoba.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-white"
            style={{ fontSize: "0.8rem", padding: "1.2rem 3rem" }}>
            <WAIcon /> Agendar por WhatsApp — Gratis
          </a>
          <p className="f-sans mt-10" style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.18)" }}>
            LUN – VIE 8AM–7PM · SÁB 8AM–2PM · MONTERÍA, CÓRDOBA
          </p>
        </RevealWrapper>
      </section>

      <Footer />
    </>
  );
}
