import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="pt-40 pb-32 lg:pt-52 lg:pb-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-normal leading-tight tracking-tight text-foreground text-balance">
            Quality legal services
            <br />
            <span className="italic">across the nation</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Connect with trusted legal institutions nationwide. 
            We bridge the gap between you and quality legal representation, 
            wherever you are in the country.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 gap-2">
              Find an Institution
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
