export function AboutSection() {
  const values = [
    {
      number: "01",
      title: "Accessibility",
      description: "We believe quality legal services should be available to everyone, regardless of location or background.",
    },
    {
      number: "02",
      title: "Excellence",
      description: "Our network consists of top-tier legal professionals committed to delivering outstanding results.",
    },
    {
      number: "03",
      title: "Trust",
      description: "Built on decades of combined experience, we maintain the highest standards of professional integrity.",
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground leading-tight text-balance">
              A unified approach to legal excellence
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              LexConnect was founded with a singular vision: to create a seamless 
              network of legal institutions that transcends geographical boundaries. 
              Our platform connects individuals and businesses with qualified legal 
              professionals across all regions of the country.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 11 partner institutions and thousands of practicing attorneys, 
              we ensure that quality legal representation is never out of reach.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value) => (
            <div key={value.number} className="border-t border-border pt-8">
              <span className="text-sm text-muted-foreground font-medium">
                {value.number}
              </span>
              <h3 className="text-xl font-medium text-foreground mt-4 mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
