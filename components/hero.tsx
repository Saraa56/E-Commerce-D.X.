import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#F5EFE0] overflow-hidden"
    >
      {/* Detalle botánico — círculo decorativo */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-[#EDE5D0] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#E8DBC8] rounded-full -translate-x-1/2 translate-y-1/3 pointer-events-none" />

      {/* Línea vertical decorativa */}
      <div className="absolute left-[50%] top-28 bottom-0 w-px bg-[#D9C9A8]/50 hidden lg:block pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="flex flex-col gap-6">
          {/* Etiqueta pequeña */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#B85C3A]" />
            <span
              className="text-[#B85C3A] uppercase tracking-[0.25em] text-xs font-sans"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}
            >
              Artesanal · Natural · Colombiano
            </span>
          </div>

          {/* Titular principal */}
          <h1
            className="font-serif text-5xl lg:text-7xl leading-[1.05] text-balance text-[#2A2318]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Rituales de{" "}
            <em
              className="italic text-[#B85C3A]"
              style={{ fontStyle: "italic", fontWeight: 400 }}
            >
              limpieza
            </em>
            <br />
            para tu piel.
          </h1>

          {/* Subtítulo */}
          <p
            className="font-sans text-base lg:text-lg text-[#6B5C47] leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Jabones elaborados a mano con ingredientes naturales que respetan tu
            piel y el planeta. Cuidado facial y corporal con el poder de la
            naturaleza.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#productos"
              className="inline-flex justify-center items-center bg-[#B85C3A] text-[#FAF6EE] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#2E4A44] transition-colors duration-300"
              style={{ letterSpacing: "0.12em" }}
            >
              Explorar Jabones
            </a>
            <a
              href="#regalos"
              className="inline-flex justify-center items-center border border-[#2A2318]/30 text-[#2A2318] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-[#B85C3A] hover:text-[#B85C3A] transition-colors duration-300"
              style={{ letterSpacing: "0.12em" }}
            >
              Arma tu Regalo
            </a>
          </div>

          {/* Stats pequeños */}
          <div className="flex gap-10 pt-6 border-t border-[#D9C9A8] mt-2">
            {[
              { num: "100%", label: "Natural" },
              { num: "Envíos", label: "Colombia" },
              { num: "Hecho", label: "a mano" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  className="font-serif text-xl text-[#2A2318]"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {s.num}
                </span>
                <span
                  className="font-sans text-xs text-[#6B5C47] uppercase tracking-widest"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Frame decorativo */}
          <div className="absolute inset-4 border border-[#D9C9A8]/60 rounded-sm pointer-events-none z-10" />
          <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-soaps.png"
              alt="Jabones artesanales naturales Jabones D.X. sobre superficie rústica con flores botánicas"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-[#B85C3A]/5" />
          </div>

          {/* Tarjeta flotante */}
          <div className="absolute bottom-8 -left-4 lg:-left-8 bg-[#FAF6EE] border border-[#D9C9A8] p-4 shadow-lg max-w-[180px]">
            <div className="flex items-center gap-2 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-[#B85C3A] text-xs">★</span>
              ))}
            </div>
            <p
              className="font-serif text-sm italic text-[#2A2318] leading-snug"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              &ldquo;Mi piel nunca se sintió tan bien.&rdquo;
            </p>
            <span className="font-sans text-xs text-[#6B5C47] mt-1 block" style={{ fontSize: "0.65rem" }}>
              — Cliente fiel
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-xs uppercase tracking-widest text-[#6B5C47]" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-[#B85C3A]/40" />
      </div>
    </section>
  )
}
