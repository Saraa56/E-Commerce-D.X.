"use client"

import { useState } from "react"

const faqs = [
  {
    q: "¿Los jabones son aptos para pieles sensibles?",
    a: "Sí. Nuestras fórmulas están diseñadas para ser suaves con la piel. Los jabones de arcilla rosa y lavanda son especialmente recomendados para pieles sensibles. Sin embargo, si tienes alguna condición dermatológica específica, consulta a tu médico antes de usar cualquier producto nuevo.",
  },
  {
    q: "¿Cuánto dura cada barra de jabón?",
    a: "Con un uso diario normal, una barra dura entre 4 y 6 semanas. Para prolongar su vida útil, te recomendamos guardarlo en un porta-jabones con drenaje y dejarlo secar entre usos.",
  },
  {
    q: "¿Tienen envíos a toda Colombia?",
    a: "Sí, enviamos a cualquier ciudad y municipio de Colombia. Los envíos se realizan a través de operadores logísticos confiables y el tiempo de entrega es de 2 a 5 días hábiles dependiendo de tu ubicación.",
  },
  {
    q: "¿Los jabones son veganos?",
    a: "La mayoría de nuestros jabones son veganos. Los que contienen miel u otros derivados de colmena están claramente identificados en el catálogo. Nunca usamos grasa animal en ninguna de nuestras fórmulas.",
  },
  {
    q: "¿Puedo personalizar los kits de regalo?",
    a: "Por supuesto. Puedes elegir los jabones que prefieras, el tipo de empaque y agregar una tarjeta personalizada con tu mensaje. Escríbenos por WhatsApp o al correo y con gusto te ayudamos a armar el regalo perfecto.",
  },
  {
    q: "¿Cuáles son los métodos de pago disponibles?",
    a: "Aceptamos tarjetas de crédito y débito, PSE, Nequi, Daviplata y pago contraentrega en algunas ciudades. Todos los pagos son procesados de forma segura a través de plataformas certificadas.",
  },
  {
    q: "¿Tienen algún jabón especial para acné?",
    a: "El Jabón de Carbón & Coco es ideal para pieles propensas al acné, ya que el carbón activado ayuda a desintoxicar los poros y el aceite de coco tiene propiedades antimicrobianas naturales. Úsalo máximo dos veces al día para evitar resecar la piel.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#F5EFE0] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#B85C3A]" />
            <span
              className="font-sans text-[#B85C3A] uppercase tracking-[0.25em]"
              style={{ fontSize: "0.7rem", fontFamily: "var(--font-sans)" }}
            >
              Preguntas Frecuentes
            </span>
            <span className="w-8 h-px bg-[#B85C3A]" />
          </div>
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#2A2318]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Resolvemos tus{" "}
            <em className="italic text-[#B85C3A]" style={{ fontStyle: "italic" }}>
              dudas
            </em>
          </h2>
        </div>

        {/* Acordeón */}
        <div className="flex flex-col divide-y divide-[#D9C9A8] border-y border-[#D9C9A8]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-serif text-lg text-[#2A2318] group-hover:text-[#B85C3A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 border border-[#D9C9A8] flex items-center justify-center text-[#B85C3A] font-sans text-lg transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p
                  className="font-sans text-[#6B5C47] leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA contacto */}
        <div className="text-center mt-12">
          <p
            className="font-sans text-[#6B5C47] mb-4"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            ¿No encontraste lo que buscabas?
          </p>
          <a
            href="https://wa.me/573000000000"
            className="inline-flex items-center gap-3 bg-[#2E4A44] text-[#FAF6EE] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#B85C3A] transition-colors duration-300"
            style={{ letterSpacing: "0.12em", fontFamily: "var(--font-sans)" }}
          >
            Escríbenos por WhatsApp
            <span className="w-5 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  )
}
