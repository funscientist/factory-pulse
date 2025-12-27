import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
  onToggleOverview: () => void;
}

export function SlideNavigation({ currentSlide, totalSlides, onNavigate, onToggleOverview }: SlideNavigationProps) {
  const handlePrev = () => {
    if (currentSlide > 1) {
      onNavigate(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      onNavigate(currentSlide + 1);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-card shadow-lg border border-border backdrop-blur-sm">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 1}
          className="p-2.5 rounded-full hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Slide indicators */}
        <div className="flex items-center gap-1.5 px-3">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => onNavigate(i + 1)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === i + 1 
                  ? "bg-primary w-6" 
                  : "bg-border hover:bg-muted-foreground/30 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides}
          className="p-2.5 rounded-full hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        <div className="w-px h-6 bg-border mx-1" />

        <button
          onClick={onToggleOverview}
          className="p-2.5 rounded-full hover:bg-secondary transition-colors"
          aria-label="Slide overview"
        >
          <Grid3X3 className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}
