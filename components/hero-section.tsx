"use client";

import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [openViewer, setOpenViewer] = useState(false);
  const [page, setPage] = useState(1);
  const [animate, setAnimate] = useState(false);

  const totalPages = 47;

  const nextPage = () => page < totalPages && setPage(page + 1);
  const prevPage = () => page > 1 && setPage(page - 1);

  const timelinePhases = [
    {
      phase: "Phase 1",
      color: "bg-green-500",
      items: [
        { text: "Blueprint Completed: Oct – Dec 2025", position: "above" },
        { text: "SRS Convergent Planned: Jan - April 2026", position: "above", offset: "mb-10" }, // middle milestone
        { text: "Contract Award: Dec 2026 ", position: "below" },
      ],
    },
    {
      phase: "Phase 2",
      color: "bg-blue-500",
      items: [
        { text: "Development: Jan – Dec 2027", position: "above" },
        { text: "Dec 2027 Development Complete", position: "below" },
      ],
    },
    {
      phase: "Phase 3",
      color: "bg-red-500",
      items: [
        { text: "Development: Jan – Dec 2027", position: "above" },
        { text: "SRS", position: "below" },
      ],
    },
    {
      phase: "Phase 4",
      color: "bg-red-500",
      items: [
        { text: "Trial: Jan – Jun 2029", position: "above" },
        { text: "Jun 2029 Trial Complete", position: "below" },
      ],
    },
    {
      phase: "Phase 5",
      color: "bg-red-500",
      items: [
        { text: "Go Live: Mid 2029", position: "above" },
        { text: "Mid 2029 System Go-Live", position: "below" },
      ],
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <section id="home" className="pt-40 pb-32 lg:pt-52 lg:pb-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">

            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-sans font-normal leading-tight tracking-tight text-foreground">
              Justice Sector Data Integration Project
            </h1>

            {/* TIMELINE */}
            <div className="mt-10 mb-8 relative px-4">
              <div className="relative w-full flex flex-col lg:flex-row justify-between items-center">

                {/* Horizontal timeline line with phase-wise colors */}
                <div className="hidden lg:flex absolute top-1/2 left-0 right-0 h-2 rounded-full -translate-y-1/2 z-0 overflow-hidden">
                  {timelinePhases.map((phase, idx) => (
                    <div
                      key={idx}
                      className={`${phase.color} h-2 w-0 rounded-full`}
                      style={{
                        animation: animate ? `grow-phase 1s ease-out forwards ${idx * 0.5}s` : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Timeline Phases */}
                {timelinePhases.map((phase, idx) => (
                  <div key={idx} className="relative flex flex-col items-center lg:w-1/5 z-10">

                    {/* Milestones ABOVE */}
                    <div className="flex flex-col items-center space-y-4 mb-2">
                      {phase.items
                        .filter(item => item.position === "above")
                        .map((item, i) => (
                          <div
                            key={i}
                            className={`flex flex-col items-center ${item.offset || ""} opacity-0 animate-fade-in`}
                            style={{ animationDelay: `${i * 0.4 + idx * 0.4}s`, animationFillMode: "forwards" }}
                          >
                            {/* Text */}
                            <span className="text-xs font-semibold text-center bg-white px-2 py-1 rounded shadow max-w-[140px] break-words mb-1 animate-text-fade">
                              {item.text}
                            </span>
                            {/* Circle */}
                            <div className={`w-4 h-4 rounded-full ${phase.color} shadow-md mb-1 animate-pulse-circle`} />
                            {/* Vertical line */}
                            {/* Only show vertical line if there is a corresponding 'below' milestone */}
                            {phase.items.some(i => i.position === "below") && (
                              <div className={`w-1 h-20 ${phase.color} rounded-full animate-line-scale`} />
                            )}
                          </div>
                        ))}
                    </div>

                    {/* Milestones BELOW */}
                    <div className="flex flex-col items-center mt-4 space-y-2">
                      {phase.items
                        .filter(item => item.position === "below")
                        .map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center opacity-0 animate-fade-in"
                            style={{ animationDelay: `${i * 0.4 + idx * 0.4}s`, animationFillMode: "forwards" }}
                          >
                            <div className={`w-1 h-20 ${phase.color} rounded-full animate-line-scale`} />
                            <div className={`w-4 h-4 rounded-full ${phase.color} shadow-md mt-1 animate-pulse-circle`} />
                            <span className="text-xs font-semibold text-center bg-gray-700 text-white px-2 py-1 rounded shadow max-w-[140px] break-words mt-1 animate-text-fade">
                              {item.text}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Phase Label near horizontal line */}
                    <span className="text-xs font-semibold absolute top-[calc(50%+0.5rem)] text-center w-full">
                      {phase.phase}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              “A digitally integrated Justice Sector where cases
              flow seamlessly from investigation to adjudication,
              citizens have real-time visibility, and agencies
              collaborate through shared data and standards.”
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2" onClick={() => setOpenViewer(true)}>
                Justice Sector Blue Print <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Learn More
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL */}
      {openViewer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-[90%] lg:w-[70%] h-[80vh] rounded-xl shadow-xl flex flex-col">
            <div className="relative flex flex-col items-start p-4 border-b">
              <h2 className="text-lg font-semibold">Justice Sector Digital Blueprint</h2>
              <span className="text-sm text-muted-foreground mt-1">Accelerated Roadmap – Go-Live by Mid 2029</span>
              <button onClick={() => setOpenViewer(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1">
              <iframe src={`/blueprint.pdf#page=${page}`} className="w-full h-full" title="Blueprint PDF" />
            </div>
            <div className="flex justify-center items-center gap-6 p-3 border-t">
              <Button variant="outline" onClick={prevPage} disabled={page === 1}><ChevronLeft size={18} /> Previous</Button>
              <span className="text-sm">Page {page} of {totalPages}</span>
              <Button variant="outline" onClick={nextPage} disabled={page === totalPages}>Next <ChevronRight size={18} /></Button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes grow-phase {
          0% { width: 0%; }
          100% { width: 20%; } /* each phase 20% */
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-circle {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(0,0,0,0.3); }
          50% { transform: scale(1.3); box-shadow: 0 0 10px rgba(0,0,0,0.5); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(0,0,0,0.3); }
        }
        @keyframes line-scale {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes text-fade {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-pulse-circle {
          animation: pulse-circle 2s ease-in-out infinite;
        }
        .animate-line-scale {
          animation: line-scale 0.8s ease forwards;
        }
        .animate-text-fade {
          animation: text-fade 0.8s ease forwards;
        }
      `}</style>
    </>
  );
}