import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { InstitutionsSection } from "@/components/institutions-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InstitutionsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
