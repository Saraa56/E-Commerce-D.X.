const ingredients = [
  {
    icon: "◈",
    name: "Aceite de Coco",
    benefit: "Hidratación profunda",
    description:
      "Penetra las capas de la piel para aportar humedad duradera y un suave efecto antimicrobiano natural.",
    color: "#F0E0C0",
  },
  {
    icon: "◈",
    name: "Arcilla de Caolín",
    benefit: "Purificación",
    description:
      "Absorbe impurezas y exceso de sebo sin resecar. Ideal para pieles mixtas y propensas a imperfecciones.",
    color: "#EDE5D0",
  },
  {
    icon: "◈",
    name: "Manteca de Karité",
    benefit: "Nutrición",
    description:
      "Rica en vitaminas A, E y F. Regenera, suaviza y protege la piel del efecto del sol y el viento.",
    color: "#E8DBC8",
  },
  {
    icon: "◈",
    name: "Miel Orgánica",
    benefit: "Antioxidante",
    description:
      "Propiedades antibacterianas naturales. Retiene la humedad y aporta luminosidad a la tez.",
    color: "#F0E0C0",
  },
  {
    icon: "◈",
    name: "Aceite de Argán",
    benefit: "Anti-edad",
    description:
      "El oro líquido de Marruecos. Aport tocoferoles que combaten los radicales libres y tensan la piel.",
    color: "#EDE5D0",
  },
  {
    icon: "◈",
    name: "Carbón Activado",
    benefit: "Detox",
    description:
      "Atrae y elimina toxinas como un imán. Ideal para una limpieza profunda que deja la piel radiante.",
    color: "#E8DBC8",
  },
]

const skinTypes = [
  {
    type: "Piel Seca",
    icon: "○",
    color: "#B85C3A",
    products: ["Jabón de Miel & Avena", "Jabón Ramo de Uvas"],
    tip: "Busca jabones con manteca de karité y aceite de argán que aporten nutrición extra.",
  },
  {
    type: "Piel Grasa",
    icon: "◎",
    color: "#2E4A44",
    products: ["Jabón de Carbón & Coco"],
    tip: "El carbón activado y la arcilla kaolín son tus mejores aliados para regular el sebo.",
  },
  {
    type: "Piel Sensible",
    icon: "◯",
    color: "#4A6135",
    products: ["Jabón Rosa & Arcilla", "Jabón de Lavanda & Menta"],
    tip: "Elige fórmulas sin fragancia sintética. La arcilla rosa es muy suave y no irrita.",
  },
  {
    type: "Piel Mixta",
    icon: "◑",
    color: "#B85C3A",
    products: ["Jabón de Carbón & Coco", "Jabón Rosa & Arcilla"],
    tip: "Combina en tu rutina un jabón purificante para la zona T y otro hidratante para las mejillas.",
  },
]

export default function Ingredients() {
  return (
    <section id="ingredientes" className="bg-[#F5EFE0] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#4A6135]" />
            <span className="font-sans text-[#4A6135] uppercase tracking-[0.25em]" style={{ fontSize: "0.7rem" }}>
              Ingredientes
            </span>
            <span className="w-8 h-px bg-[#4A6135]" />
          </div>
          <h2
            className="font-serif text-4xl lg:text-5xl text-[#2A2318] text-balance"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Lo que hay dentro{" "}
            <em className="italic text-[#4A6135]" style={{ fontStyle: "italic" }}>
              importa
            </em>
          </h2>
          <p
            className="font-sans text-[#6B5C47] max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Seleccionamos cada ingrediente por su eficacia y origen natural. Sin químicos
            agresivos, sin parabenos, sin crueldad animal.
          </p>
        </div>

        {/* Ingredientes grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="flex gap-4 p-6 border border-[#D9C9A8] hover:border-[#B85C3A] transition-colors duration-200 group"
              style={{ background: ing.color }}
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#FAF6EE] text-[#B85C3A] text-lg font-serif">
                {ing.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span
                  className="font-sans text-[0.65rem] uppercase tracking-widest text-[#B85C3A]"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {ing.benefit}
                </span>
                <h3
                  className="font-serif text-lg text-[#2A2318]"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {ing.name}
                </h3>
                <p
                  className="font-sans text-sm text-[#6B5C47] leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                >
                  {ing.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Separador ornamental */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex-1 h-px bg-[#D9C9A8]" />
          <span className="font-serif text-lg text-[#D9C9A8]" style={{ fontFamily: "var(--font-serif)" }}>
            ✦
          </span>
          <div className="flex-1 h-px bg-[#D9C9A8]" />
        </div>

        {/* Recomendaciones tipo de piel */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#2E4A44]" />
            <span className="font-sans text-[#2E4A44] uppercase tracking-[0.25em]" style={{ fontSize: "0.7rem" }}>
              Cuidado de Piel
            </span>
            <span className="w-8 h-px bg-[#2E4A44]" />
          </div>
          <h2
            className="font-serif text-3xl lg:text-4xl text-[#2A2318]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Encuentra tu jabón ideal
          </h2>
          <p
            className="font-sans text-[#6B5C47] max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
          >
            Cada tipo de piel necesita un cuidado específico. Te orientamos para elegir el mejor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skinTypes.map((skin) => (
            <div
              key={skin.type}
              className="flex flex-col gap-4 p-6 bg-[#FAF6EE] border border-[#D9C9A8] hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 flex items-center justify-center text-2xl font-serif border-2 self-start"
                style={{ borderColor: skin.color, color: skin.color, fontFamily: "var(--font-serif)" }}
              >
                {skin.icon}
              </div>
              <h3
                className="font-serif text-xl text-[#2A2318]"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {skin.type}
              </h3>
              <p
                className="font-sans text-sm text-[#6B5C47] leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
              >
                {skin.tip}
              </p>
              <div className="pt-3 border-t border-[#D9C9A8]">
                <span
                  className="font-sans text-[0.6rem] uppercase tracking-widest text-[#6B5C47] block mb-2"
                  style={{ letterSpacing: "0.12em" }}
                >
                  Te recomendamos:
                </span>
                {skin.products.map((p) => (
                  <span
                    key={p}
                    className="block font-serif text-sm italic"
                    style={{ fontFamily: "var(--font-serif)", color: skin.color, fontStyle: "italic" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
              <button
                className="font-sans text-xs uppercase tracking-widest py-2.5 text-[#FAF6EE] transition-colors duration-200"
                style={{ background: skin.color, letterSpacing: "0.1em" }}
              >
                Ver productos
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
