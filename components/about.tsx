import Image from "next/image"

const values = [
  {
    icon: "◈",
    title: "100% Natural",
    desc: "Todos nuestros ingredientes son de origen vegetal o mineral. Sin parabenos, sin colorantes artificiales.",
    color: "#B85C3A",
  },
  {
    icon: "◇",
    title: "Hecho a Mano",
    desc: "Cada jabón es elaborado en pequeños lotes para garantizar calidad y atención al detalle en cada barra.",
    color: "#2E4A44",
  },
  {
    icon: "○",
    title: "Sin Crueldad",
    desc: "Nunca probamos en animales. Nuestros productos son aptos para veganos y respetuosos con la vida.",
    color: "#4A6135",
  },
  {
    icon: "◆",
    title: "Envíos Colombia",
    desc: "Llevamos nuestros jabones a cualquier ciudad o municipio del territorio colombiano con embalaje seguro.",
    color: "#B85C3A",
  },
]

export default function About() {
  return (
    <section id="nosotros" className="bg-[#FAF6EE] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Valores — fila rápida */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D9C9A8] border border-[#D9C9A8] mb-24">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col gap-3 p-6 lg:p-8 bg-[#FAF6EE] hover:bg-[#F5EFE0] transition-colors duration-200"
            >
              <span
                className="text-xl"
                style={{ color: v.color, fontFamily: "var(--font-serif)" }}
              >
                {v.icon}
              </span>
              <h3
                className="font-serif text-lg text-[#2A2318]"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {v.title}
              </h3>
              <p
                className="font-sans text-sm text-[#6B5C47] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Historia */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            {/* Detalle decorativo */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F0E0C0] rounded-full pointer-events-none" />
            <div className="relative aspect-[4/5] overflow-hidden z-10">
              <Image
                src="/images/about-brand.png"
                alt="Elaboración artesanal de jabones naturales en el taller de Jabones D.X."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Ornamento de número */}
            <div className="absolute -top-4 -right-4 bg-[#B85C3A] w-16 h-16 flex items-center justify-center z-20">
              <span
                className="font-serif text-[#FAF6EE] text-2xl leading-none"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
              >
                D
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#B85C3A]" />
              <span
                className="font-sans text-[#B85C3A] uppercase tracking-[0.25em]"
                style={{ fontSize: "0.7rem", fontFamily: "var(--font-sans)" }}
              >
                Nuestra Historia
              </span>
            </div>

            <h2
              className="font-serif text-4xl lg:text-5xl text-[#2A2318] text-balance leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              Jabones con{" "}
              <em
                className="italic text-[#B85C3A]"
                style={{ fontStyle: "italic" }}
              >
                alma
              </em>{" "}
              colombiana
            </h2>

            <div
              className="border-l-2 border-[#B85C3A] pl-5 font-serif text-xl italic text-[#6B5C47]"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              &ldquo;Cada jabón lleva el cuidado y la intención de quienes lo
              elaboraron con sus manos.&rdquo;
            </div>

            <p
              className="font-sans text-[#6B5C47] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              Jabones D.X. nació de la pasión por el bienestar natural y el amor
              por los rituales de cuidado personal. Comenzamos en una pequeña
              cocina, aprendiendo el arte milenario de la saponificación fría y
              experimentando con los mejores ingredientes botánicos.
            </p>

            <p
              className="font-sans text-[#6B5C47] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              Hoy, llevamos nuestros jabones a toda Colombia, conectando a las
              personas con la naturaleza a través de su rutina de cuidado
              diario. Cada barra es un pequeño lujo accesible que nutre, respeta
              y celebra tu piel.
            </p>

            <div className="flex gap-8 pt-4 border-t border-[#D9C9A8]">
              {[
                { n: "3+", l: "Años de experiencia" },
                { n: "500+", l: "Clientes felices" },
                { n: "20+", l: "Variedades" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col gap-1">
                  <span
                    className="font-serif text-2xl text-[#B85C3A]"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
                  >
                    {s.n}
                  </span>
                  <span
                    className="font-sans text-xs text-[#6B5C47] leading-snug"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}
                  >
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#productos"
              className="self-start bg-[#B85C3A] text-[#FAF6EE] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#2E4A44] transition-colors duration-300"
              style={{ letterSpacing: "0.12em", fontFamily: "var(--font-sans)" }}
            >
              Conoce nuestros jabones
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
