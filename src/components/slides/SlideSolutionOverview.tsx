import { SlideLayout } from "./SlideLayout";
import { Database, Brain, LayoutDashboard, ArrowRight, DollarSign } from "lucide-react";

export function SlideSolutionOverview() {
  const layers = [
    {
      icon: Database,
      layer: "Layer 1",
      title: "Offline Data Hub",
      description: "데이터 통합/정제",
      color: "primary"
    },
    {
      icon: Brain,
      layer: "Layer 2", 
      title: "LLM Insight Engine",
      description: "불량 원인/공정 비효율/세팅 최적화 분석",
      color: "primary"
    },
    {
      icon: LayoutDashboard,
      layer: "Layer 3",
      title: "Dual Dashboard",
      description: "경영진 의사결정 + 현장 KPI",
      color: "primary"
    }
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={12} category="Solution">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Solution Overview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            Polarpulse 제안 개요
          </h2>
          <p className="mt-4 text-xl text-primary font-medium fade-in-up stagger-2 opacity-0">
            "Factory Intelligence + Executive Dashboard"
          </p>
        </div>

        {/* 3-Layer Architecture */}
        <div className="relative max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {layers.map((item, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all fade-in-up stagger-${index + 3} opacity-0`}
              >
                <div className="absolute -top-3 left-4">
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {item.layer}
                  </span>
                </div>
                
                <div className="pt-2">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Arrow connector */}
                {index < layers.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Optional: Financial integration */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-dashed border-border fade-in-up stagger-5 opacity-0">
            <div className="p-2 rounded-lg bg-primary/10">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">(옵션)</span>
              <p className="text-sm text-foreground font-medium">원가/재무 데이터 연계로 "공정 → 손익" 추적</p>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20 max-w-5xl fade-in-up stagger-5 opacity-0">
          <p className="text-lg text-foreground font-medium text-center">
            "대시보드가 아니라, 오프라인에서도 굴러가는 
            <span className="text-primary"> 데이터 → 인사이트 → 의사결정</span> 체계를 구축합니다."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
