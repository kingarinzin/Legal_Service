import {
  Scale,
  Building2,
  Landmark,
  Gavel,
  Shield,
  BookOpen,
  Users,
  Briefcase,
  FileText,
  Award,
  Globe,
} from "lucide-react";

const institutions = [
  { name: "National Bar Association", icon: Scale, location: "Nationwide" },
  {
    name: "Metropolitan Legal Aid",
    icon: Building2,
    location: "Urban Centers",
  },
  {
    name: "Federal Court Services",
    icon: Landmark,
    location: "Federal Districts",
  },
  { name: "Justice Partners", icon: Gavel, location: "Eastern Region" },
  { name: "Legal Defense Network", icon: Shield, location: "Southern States" },
  { name: "Law Institute", icon: BookOpen, location: "Academic Partners" },
  {
    name: "Community Legal Center",
    icon: Users,
    location: "Local Communities",
  },
  {
    name: "Corporate Law Group",
    icon: Briefcase,
    location: "Business Districts",
  },
  {
    name: "Civil Rights Foundation",
    icon: FileText,
    location: "Western Region",
  },
  {
    name: "Excellence Legal Services",
    icon: Award,
    location: "Northern States",
  },
  { name: "International Law Firm", icon: Globe, location: "Cross-Border" },
];

export function InstitutionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Our Network
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-normal text-foreground text-balance">
            11 trusted institutions serving you
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 lg:p-8 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-secondary group-hover:bg-card flex items-center justify-center mb-6 transition-colors duration-300">
                <institution.icon
                  className="w-7 h-7 lg:w-8 lg:h-8 text-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-medium text-foreground mb-2 leading-tight">
                {institution.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {institution.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
