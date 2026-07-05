import { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import promoCinema from "@/assets/automisebiz-promo-cinema.mp4";

interface VSLSectionProps {
  onBookAudit: () => void;
}

const VSLSection = ({ onBookAudit }: VSLSectionProps) => {
  const { ref, visible } = useScrollReveal(0.15);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const playVideo = () => {
    setHasStarted(true);
    void videoRef.current?.play();
  };

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-3 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Watch a system walkthrough
        </h2>
        <p className={`text-base sm:text-lg text-muted-foreground font-normal mb-8 max-w-2xl leading-relaxed transition-all duration-700 ease-out delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          See how Automisebiz turns messy manual workflows into AI systems that find, enrich, qualify, and move work forward.
        </p>

        <div className={`w-full aspect-video rounded-2xl overflow-hidden relative skeu-card transition-all duration-700 ease-out delay-300 hover:shadow-lg ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={promoCinema}
            muted
            loop
            playsInline
            controls={hasStarted}
            preload="metadata"
            aria-label="Automisebiz cinematic workflow walkthrough"
          />
          {!hasStarted && (
            <button
              type="button"
              onClick={playVideo}
              className="absolute inset-0 flex items-center justify-center bg-foreground/10 backdrop-blur-[1px] transition-colors hover:bg-foreground/15"
              aria-label="Play Automisebiz system demo"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20">
                <Play className="ml-1 h-7 w-7 sm:h-9 sm:w-9" fill="currentColor" />
              </span>
            </button>
          )}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
              Automisebiz system demo
            </span>
          </div>
        </div>

        <button onClick={onBookAudit} className={`btn-skeu-primary mt-8 flex items-center gap-2 transition-all duration-700 ease-out delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Book a Free Audit <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default VSLSection;
