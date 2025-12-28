import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
  onToggleOverview: () => void;
}
export function SlideNavigation({
  currentSlide,
  totalSlides,
  onNavigate,
  onToggleOverview
}: SlideNavigationProps) {
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
  return <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      
    </div>;
}