import Image from "next/image"

const occasions = [
  { label: "Cumpleaños", icon: "♡" },
  { label: "Aniversario", icon: "◇" },
  { label: "Baby Shower", icon: "○" },
  { label: "Día de la Madre", icon: "✦" },
  { label: "San Valentín", icon: "◈" },
  { label: "Navidad", icon: "◆" },
]

const steps = [
  {
    num: "01",
    title: "Elige tus jabones",
    desc: "Selecciona entre 1 y 6 jabones de nuestro catálogo.",
  },
  {
    num: "02",
    title: "Personaliza el empaque",
    desc: "Escoge el tamaño del cesto, papel kraft o caja elegante.",
  },
  {
    num: "03",
    title: "Agrega un mensaje",
    desc: "Incluimos una tarjeta escrita a mano con tu dedicatoria.",
  },
  {
    num: "04",
    title: "Enviamos a toda Colombia",
    desc: "Empaque seguro y entrega a domicilio en todo el país.",
  },
]

export default function Gifts() {
  return (
    <section id="regalos" className="bg-[#2E4A44] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#F0E0C0]" />
              <span
                className="font-sans text-[#F0E0C0] uppercase tracking-[0.25em]"
                style={{ fontSize: "0.7rem", fontFamily: "var(--font-sans)" }}
              >
                Regala bienestar
              </span>
            </div>
            <h2
              className="font-serif text-4xl lg:text-5xl text-[#FAF6EE] text-balance leading-tight"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              Arma tu{" "}
              <em className="italic text-[#F0E0C0]" style={{ fontStyle: "italic" }}>
                regalo
              </em>{" "}
              perfecto
            </h2>
            <p
              className="font-sans text-[#C8B898] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              Diseña un kit de jabones personalizados para cada ocasión especial.
              Incluimos empaque artesanal, tarjeta personalizada y envío a cualquier
              rincón de Colombia.
            </p>

            {/* Pasos */}
            <div className="flex flex-col gap-5 mt-2">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <span
                    className="font-serif text-3xl text-[#F0E0C0]/30 leading-none flex-shrink-0 w-10 text-right"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4
                      className="font-serif text-lg text-[#FAF6EE]"
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="font-sans text-sm text-[#C8B898] leading-relaxed"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="self-start mt-4 inline-flex items-center gap-3 bg-[#B85C3A] text-[#FAF6EE] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#F0E0C0] hover:text-[#2A2318] transition-colors duration-300"
              style={{ letterSpacing: "0.12em", fontFamily: "var(--font-sans)" }}
            >
              Armar mi regalo
              <span className="w-5 h-px bg-current" />
            </a>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#F0E0C0]/20" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/gift-set.png"
                alt="Kit de regalo de jabones artesanales naturales, envueltos en papel kraft con detalles botánicos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#2E4A44]/20" />
            </div>

            {/* Tarjeta precio */}
            <div className="absolute bottom-6 right-6 bg-[#FAF6EE] p-4 shadow-xl">
              <span
                className="font-sans text-[0.6rem] uppercase tracking-widest text-[#6B5C47] block mb-1"
                style={{ letterSpacing: "0.15em" }}
              >
                Desde
              </span>
              <span
                className="font-serif text-2xl text-[#B85C3A]"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
              >
                $45.000
              </span>
              <span
                className="font-sans text-xs text-[#6B5C47] block"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                con envío incluido
              </span>
            </div>
          </div>
        </div>

        {/* Ocasiones */}
        <div className="border-t border-[#FAF6EE]/10 pt-16">
          <p
            className="font-sans text-center text-[#C8B898] text-xs uppercase tracking-[0.3em] mb-8"
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.25em" }}
          >
            Perfecto para cada ocasión
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {occasions.map((occ) => (
              <span
                key={occ.label}
                className="flex items-center gap-2 border border-[#FAF6EE]/20 text-[#FAF6EE]/70 font-sans text-xs uppercase tracking-widest px-5 py-2.5 hover:border-[#F0E0C0] hover:text-[#F0E0C0] transition-colors duration-200 cursor-pointer"
                style={{ letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}
              >
                <span className="text-[#B85C3A]">{occ.icon}</span>
                {occ.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
