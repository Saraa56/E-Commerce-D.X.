"use client"

const footerLinks = {
  Productos: ["Jabones Faciales", "Jabones Corporales", "Jabones Decorativos", "Kits de Regalo"],
  Información: ["Ingredientes", "Cuidado de Piel", "Sobre Nosotros", "Preguntas Frecuentes"],
  Compras: ["Envíos a Colombia", "Política de Devoluciones", "Métodos de Pago", "Rastrear Pedido"],
}

export default function Footer() {
  return (
    <footer className="bg-[#2A2318] text-[#C8B898]">

      {/* Banner superior */}
      <div className="bg-[#B85C3A] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-serif text-[#FAF6EE] text-lg italic"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            &ldquo;Envíos a toda Colombia — Fácil, seguro y rápido.&rdquo;
          </p>
          <a
            href="#productos"
            className="font-sans text-xs uppercase tracking-widest text-[#FAF6EE] border border-[#FAF6EE]/50 px-6 py-2.5 hover:bg-[#FAF6EE] hover:text-[#B85C3A] transition-colors duration-200 whitespace-nowrap"
            style={{ letterSpacing: "0.12em" }}
          >
            Ver jabones
          </a>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Marca */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-2xl font-bold tracking-widest uppercase text-[#FAF6EE]"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.18em" }}
              >
                Jabones
              </span>
              <span
                className="font-serif text-xs font-light italic tracking-[0.35em] text-[#B85C3A] -mt-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                D . X .
              </span>
            </div>
            <p
              className="font-sans text-sm text-[#6B5C47] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              Jabones artesanales elaborados con ingredientes naturales para el
              cuidado de tu piel. Hechos con amor en Colombia.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3 mt-2">
              {["Ig", "Fb", "Wa"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-[#6B5C47] flex items-center justify-center font-sans text-xs text-[#6B5C47] hover:border-[#B85C3A] hover:text-[#B85C3A] transition-colors duration-200"
                  aria-label={s === "Ig" ? "Instagram" : s === "Fb" ? "Facebook" : "WhatsApp"}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4
                className="font-serif text-sm text-[#FAF6EE] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-serif)", fontSize: "0.7rem", letterSpacing: "0.2em" }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-[#6B5C47] hover:text-[#C8B898] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="my-12 h-px bg-[#6B5C47]/30" />

        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h4
              className="font-serif text-lg text-[#FAF6EE] mb-1"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              Únete a la comunidad
            </h4>
            <p
              className="font-sans text-sm text-[#6B5C47]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 300 }}
            >
              Recibe consejos de cuidado de piel y ofertas exclusivas.
            </p>
          </div>
          <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tucorreo@email.com"
              className="flex-1 bg-[#3A3028] border border-[#6B5C47] text-[#FAF6EE] font-sans text-sm px-4 py-3 placeholder:text-[#6B5C47] focus:outline-none focus:border-[#B85C3A]"
              style={{ fontFamily: "var(--font-sans)" }}
            />
            <button
              type="submit"
              className="bg-[#B85C3A] text-[#FAF6EE] font-sans text-xs uppercase tracking-widest px-6 hover:bg-[#2E4A44] transition-colors duration-200"
              style={{ letterSpacing: "0.1em" }}
            >
              Suscribir
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B5C47]">
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem" }}>
            © 2025 Jabones D.X. · Todos los derechos reservados · Colombia
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#C8B898] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#C8B898] transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
