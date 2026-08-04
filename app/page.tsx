import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Ingredients from "@/components/ingredients"
import Gifts from "@/components/gifts"
import About from "@/components/about"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Ingredients />
      <Gifts />
      <About />
      <FAQ />
      <Footer />
    </main>
  )
}
