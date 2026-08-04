"use client"

import { useState } from "react"
import Image from "next/image"

const categories = ["Todos", "Facial", "Corporal", "Decorativos"]

const products = [
  {
    id: 1,
    name: "Jabón de Miel & Avena",
    category: "Facial",
    skin: "Piel seca",
    price: "22.000",
    description: "Hidrata profundamente con la dulzura de la miel y la suavidad de la avena molida.",
    ingredients: ["Miel orgánica", "Avena molida", "Aceite de coco"],
    image: "/images/facial-care.png",
    tag: "Más vendido",
    tagColor: "#B85C3A",
  },
  {
    id: 2,
    name: "Jabón de Carbón & Coco",
    category: "Corporal",
    skin: "Piel mixta a grasa",
    price: "24.000",
    description: "Purifica y desintoxica con el poder del carbón activado y el aceite de coco virgen.",
    ingredients: ["Carbón activado", "Aceite de coco", "Kaolín"],
    image: "/images/body-soap.png",
    tag: "Nuevo",
    tagColor: "#2E4A44",
  },
  {
    id: 3,
    name: "Jabón Rosa & Arcilla",
    category: "Facial",
    skin: "Piel sensible",
    price: "26.000",
    description: "Cuida tu piel con arcilla rosa purificante y el aroma delicado de pétalos de rosa.",
    ingredients: ["Arcilla rosa", "Aceite de rosa", "Manteca de karité"],
    image: "/images/hero-soaps.png",
    tag: null,
    tagColor: null,
  },
  {
    id: 4,
    name: "Jabón de Lavanda & Menta",
    category: "Corporal",
    skin: "Todo tipo de piel",
    price: "20.000",
    description: "Relajante y refrescante, ideal para el momento del baño nocturno.",
    ingredients: ["Lavanda francesa", "Menta piperita", "Aceite de girasol"],
    image: "/images/gift-set.png",
    tag: null,
    tagColor: null,
  },
  {
    id: 5,
    name: "Jabón Osito de Amor",
    category: "Decorativos",
    skin: "Piel normal",
    price: "28.000",
    description: "Diseño decorativo en forma de osito, perfecto para regalar en cualquier ocasión especial.",
    ingredients: ["Glicerina vegetal", "Aceite de almendra", "Esencias naturales"],
    image: "/images/decorative-soaps.png",
    tag: "Ideal para regalar",
    tagColor: "#4A6135",
  },
  {
    id: 6,
    name: "Jabón Ramo de Uvas",
    category: "Decorativos",
    skin: "Piel seca",
    price: "30.000",
    description: "Forma artística de ramo de uvas con extracto de semillas de uva antioxidante.",
    ingredients: ["Extracto de uva", "Aceite de argán", "Vitamina E"],
    image: "/images/decorative-soaps.png",
    tag: "Edición especial",
    tagColor: "#4A6135",
  },
]

export default function Products() {
  const [active, setActive] = useState("Todos")
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = active === "Todos" ? products : products.filter((p) => p.category === active)

  return (
    <section id="productos" className="bg-[#FAF6EE] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#B85C3A]" />
            <span className="font-sans text-[#B85C3A] uppercase tracking-[0.25em]" style={{ fontSize: "0.7rem" }}>
              Catálogo
            </span>
            <span className="w-8 h-px bg-[#B85C3A]" />
          </div>
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#2A2318] text-balance"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Nuestros Jabones
          </h2>
          <p
            className="font-sans text-[#6B5C47] max-w-lg leading-relaxed text-base"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Cada barra es elaborada a mano con ingredientes seleccionados para nutrir
            tu piel de forma natural.
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200 ${
                  active === cat
                    ? "bg-[#B85C3A] border-[#B85C3A] text-[#FAF6EE]"
                    : "bg-transparent border-[#D9C9A8] text-[#6B5C47] hover:border-[#B85C3A] hover:text-[#B85C3A]"
                }`}
                style={{ letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col bg-[#F5EFE0] border border-[#D9C9A8] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay al hover */}
                <div
                  className={`absolute inset-0 bg-[#2E4A44]/40 flex items-center justify-center transition-opacity duration-300 ${
                    hovered === product.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="bg-[#FAF6EE] text-[#2A2318] font-sans text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#B85C3A] hover:text-[#FAF6EE] transition-colors duration-200" style={{ letterSpacing: "0.12em" }}>
                    Ver detalle
                  </button>
                </div>
                {/* Tag */}
                {product.tag && (
                  <span
                    className="absolute top-3 left-3 font-sans text-[0.6rem] uppercase tracking-widest px-2.5 py-1 text-[#FAF6EE]"
                    style={{ background: product.tagColor!, letterSpacing: "0.12em" }}
                  >
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span
                      className="font-sans text-[0.65rem] uppercase tracking-widest text-[#B85C3A] block mb-1"
                      style={{ letterSpacing: "0.15em" }}
                    >
                      {product.category} · {product.skin}
                    </span>
                    <h3
                      className="font-serif text-xl text-[#2A2318]"
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <span
                    className="font-serif text-lg text-[#B85C3A] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                  >
                    ${product.price}
                  </span>
                </div>

                <p
                  className="font-sans text-sm text-[#6B5C47] leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {product.description}
                </p>

                {/* Ingredientes */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-[#D9C9A8]">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="font-sans text-[0.6rem] uppercase tracking-wider bg-[#EDE5D0] text-[#6B5C47] px-2 py-0.5"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <button className="mt-3 w-full bg-[#B85C3A] text-[#FAF6EE] font-sans text-xs tracking-widest uppercase py-3 hover:bg-[#2E4A44] transition-colors duration-300" style={{ letterSpacing: "0.12em" }}>
                  Agregar al carrito
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA ver más */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-[#2A2318]/30 text-[#2A2318] font-sans text-xs tracking-widest uppercase px-8 py-4 hover:border-[#B85C3A] hover:text-[#B85C3A] transition-colors duration-300"
            style={{ letterSpacing: "0.12em" }}
          >
            Ver catálogo completo
            <span className="w-6 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  )
}
