import { X } from "lucide-react";

interface SlideOverviewProps {
  currentSlide: number;
  onNavigate: (slide: number) => void;
  onClose: () => void;
}

const slideTitles = [
  { number: 1, title: "Cover", subtitle: "Factory Intelligence Platform" },
  { number: 2, title: "고객 목표 요약", subtitle: "Customer Objectives" },
  { number: 3, title: "현황과 Pain Point", subtitle: "Problem Statement" },
  { number: 4, title: "Why Now", subtitle: "Market Timing" },
  { number: 5, title: "Polarpulse 제안 개요", subtitle: "Solution Overview" },
  { number: 6, title: "End-to-End Workflow", subtitle: "4단계 자동화" },
  { number: 7, title: "Offline Data Hub", subtitle: "Layer 1" },
  { number: 8, title: "LLM Insight Engine", subtitle: "Layer 2" },
  { number: 9, title: "Dual Dashboard", subtitle: "Layer 3" },
  { number: 10, title: "아키텍처 선택지", subtitle: "Architecture Options" },
  { number: 11, title: "PoC 제안", subtitle: "6-8 Weeks" },
  { number: 12, title: "기대 효과 & KPI", subtitle: "Expected Results" },
];

export function SlideOverview({ currentSlide, onNavigate, onClose }: SlideOverviewProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">슬라이드 개요</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close overview"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {slideTitles.map((slide) => (
            <button
              key={slide.number}
              onClick={() => {
                onNavigate(slide.number);
                onClose();
              }}
              className={`group p-4 rounded-xl border transition-all text-left ${
                currentSlide === slide.number
                  ? "bg-primary/10 border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`text-2xl font-bold ${
                  currentSlide === slide.number ? "text-primary" : "text-muted-foreground"
                }`}>
                  {String(slide.number).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate">{slide.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{slide.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
