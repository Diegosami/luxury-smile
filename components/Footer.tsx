import Image from "next/image";

const WA = `https://wa.me/573004970078?text=${encodeURIComponent("Hola Luxury Smile, quiero agendar una cita")}`;

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-20 grid grid-cols-1 md:grid-cols-3 gap-14 mb-0">

        <div>
          <div className="relative w-32 h-11 mb-7">
            <Image src="/logo.jpg" alt="Luxury Smile" fill className="object-contain object-left" />
          </div>
          <p className="f-sans leading-relaxed" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", lineHeight: "1.85", maxWidth: "20rem" }}>
            Clínica odontológica de alta estética en Montería. Implantología, armonización y diseño de sonrisa con estándares internacionales.
          </p>
        </div>

        <div>
          <p className="f-sans font-semibold mb-7" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.25)" }}>SERVICIOS</p>
          <div className="flex flex-col gap-3.5">
            {["Diseño de Sonrisa","Implantes Dentales","Armonización Orofacial","Ortodoncia","Blanqueamiento","Cirugía Oral"].map((s) => (
              <span key={s} className="f-sans transition-colors duration-200 hover:text-white cursor-default" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>{s}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="f-sans font-semibold mb-7" style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "rgba(255,255,255,0.25)" }}>CONTACTO</p>
          <div className="flex flex-col gap-3 mb-10">
            <p className="f-sans" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Montería, Córdoba, Colombia</p>
            <p className="f-sans" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>+57 300 497 0078</p>
            <p className="f-sans" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>Lun – Vie 8am–7pm · Sáb 8am–2pm</p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline inline-flex"
            style={{ fontSize: "0.65rem", padding: "0.7rem 1.5rem" }}>
            Agendar por WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-6 md:mx-14 py-7 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="f-sans" style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.15)" }}>
          © 2025 · LUXURY SMILE CLÍNICA ODONTOLÓGICA · MONTERÍA, COLOMBIA
        </p>
      </div>
    </footer>
  );
}
