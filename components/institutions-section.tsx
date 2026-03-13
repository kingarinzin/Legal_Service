"use client";

import { useState, useEffect } from "react";
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
  X,
} from "lucide-react";

const institutions = [
  {
    name: "National Bar Association",
    icon: Scale,
    location: "Nationwide",
    description:
      "The National Bar Association represents legal professionals across the country and promotes justice and professional standards.",
  },
  {
    name: "Metropolitan Legal Aid",
    icon: Building2,
    location: "Urban Centers",
    description:
      "Metropolitan Legal Aid provides legal support and advisory services for citizens in urban communities.",
  },
  {
    name: "Federal Court Services",
    icon: Landmark,
    location: "Federal Districts",
    description:
      "Federal Court Services manages federal court operations and judicial support systems.",
  },
  {
    name: "Justice Partners",
    icon: Gavel,
    location: "Eastern Region",
    description:
      "Justice Partners collaborate with law enforcement and legal institutions to strengthen justice delivery.",
  },
  {
    name: "Legal Defense Network",
    icon: Shield,
    location: "Southern States",
    description:
      "A network dedicated to protecting legal rights and ensuring fair defense services.",
  },
  {
    name: "Law Institute",
    icon: BookOpen,
    location: "Academic Partners",
    description:
      "The Law Institute promotes legal education, research, and policy development.",
  },
  {
    name: "Community Legal Center",
    icon: Users,
    location: "Local Communities",
    description:
      "Community Legal Centers provide free or affordable legal support to communities.",
  },
  {
    name: "Corporate Law Group",
    icon: Briefcase,
    location: "Business Districts",
    description:
      "Specialized legal services for corporate governance and compliance.",
  },
  {
    name: "Civil Rights Foundation",
    icon: FileText,
    location: "Western Region",
    description:
      "Focused on protecting civil liberties and promoting equal justice.",
  },
  {
    name: "Excellence Legal Services",
    icon: Award,
    location: "Northern States",
    description:
      "Recognized for delivering high-quality legal services and professional excellence.",
  },
  {
    name: "International Law Firm",
    icon: Globe,
    location: "Cross-Border",
    description:
      "Provides international legal advisory and cross-border dispute resolution.",
  },
];

export function InstitutionsSection() {
  const radius = 260;
  const size = radius * 2 + 200;
  const total = institutions.length;

  const [selected, setSelected] = useState(null);

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Our Network
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-normal text-foreground">
            11 trusted institutions serving you
          </h2>
        </div>

        {/* Circular Layout */}
        <div
          className="relative mx-auto"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          {institutions.map((institution, index) => {
            const angle = (360 / total) * index;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(${radius}px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div
                  onClick={() => setSelected(institution)}
                  className="cursor-pointer flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <institution.icon
                      className="w-10 h-10 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-3 font-medium text-sm lg:text-base text-foreground leading-tight max-w-[140px]">
                    {institution.name}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    {institution.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 z-10 animate-fade-in">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">

              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                <selected.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {selected.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {selected.location}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {selected.description}
              </p>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}