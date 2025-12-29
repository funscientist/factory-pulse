import { useState, useEffect, useCallback } from "react";
import { SlideCover } from "@/components/slides/SlideCover";
import { SlideCustomerGoals } from "@/components/slides/SlideCustomerGoals";
import { SlideWhyNow } from "@/components/slides/SlideWhyNow";
import { SlidePainPoints } from "@/components/slides/SlidePainPoints";
import { SlideSolutionOverview } from "@/components/slides/SlideSolutionOverview";
import { SlidePOC } from "@/components/slides/SlidePOC";
import { SlideDataHub } from "@/components/slides/SlideDataHub";
import { SlideLLMEngine } from "@/components/slides/SlideLLMEngine";
import { SlideDashboard } from "@/components/slides/SlideDashboard";
import { SlideNextSteps } from "@/components/slides/SlideNextSteps";
import { SlideNavigation } from "@/components/SlideNavigation";
import { SlideOverview } from "@/components/SlideOverview";

const TOTAL_SLIDES = 10;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showOverview, setShowOverview] = useState(false);

  const navigateToSlide = useCallback((slide: number) => {
    if (slide >= 1 && slide <= TOTAL_SLIDES) {
      setCurrentSlide(slide);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showOverview) {
        if (e.key === "Escape") {
          setShowOverview(false);
        }
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          navigateToSlide(currentSlide + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          navigateToSlide(currentSlide - 1);
          break;
        case "Home":
          e.preventDefault();
          navigateToSlide(1);
          break;
        case "End":
          e.preventDefault();
          navigateToSlide(TOTAL_SLIDES);
          break;
        case "Escape":
          setShowOverview(true);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, showOverview, navigateToSlide]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <SlideCover />;
      case 2:
        return <SlideCustomerGoals />;
      case 3:
        return <SlideWhyNow />;
      case 4:
        return <SlidePainPoints />;
      case 5:
        return <SlideSolutionOverview />;
      case 6:
        return <SlidePOC />;
      case 7:
        return <SlideDataHub />;
      case 8:
        return <SlideLLMEngine />;
      case 9:
        return <SlideDashboard />;
      case 10:
        return <SlideNextSteps />;
      default:
        return <SlideCover />;
    }
  };

  return (
    <>
      <div className="relative overflow-hidden" key={currentSlide}>
        {renderSlide()}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNavigate={navigateToSlide}
        onToggleOverview={() => setShowOverview(true)}
      />

      {showOverview && (
        <SlideOverview
          currentSlide={currentSlide}
          onNavigate={navigateToSlide}
          onClose={() => setShowOverview(false)}
        />
      )}
    </>
  );
};

export default Index;
