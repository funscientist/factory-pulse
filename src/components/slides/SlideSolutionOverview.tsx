import { SlideLayout } from "./SlideLayout";
import { Database, Brain, LayoutDashboard, ArrowRight, DollarSign } from "lucide-react";

export function SlideSolutionOverview() {
  const layers = [
    {
      icon: Database,
      layer: "Layer 1",
      title: "Offline Data Hub",
      description: "데이터 통합/정제",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      layer: "Layer 2", 
      title: "LLM Insight Engine",
      description: "불량 원인/공정 비효율/세팅 최적화 분석",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: LayoutDashboard,
      layer: "Layer 3",
      title: "Dual Dashboard",
      description: "경영진 의사결정 + 현장 KPI",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={12} category="Solution" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-4">
          <span className="badge badge-info mb-2 fade-in-up text-xs">Solution Overview</span>
          <h2 className="text-xl md:text-2xl font-bold text-foreground fade-in-up stagger-1">
            Polarpulse 제안 개요
          </h2>
          <p className="mt-1 text-base text-primary font-semibold fade-in-up stagger-2">
            "Factory Intelligence + Executive Dashboard"
          </p>
        </div>

        {/* 3-Layer Architecture */}
        <div className="relative max-w-5xl">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {layers.map((item, index) => (
              <div 
                key={index}
                className={`relative p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
              >
                <div className="absolute -top-2 left-3">
                  <span className="px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold">
                    {item.layer}
                  </span>
                </div>
                
                <div className="pt-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} w-fit mb-2`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>

                {/* Arrow connector */}
                {index < layers.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Optional: Financial integration */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-dashed border-border shadow-sm fade-in-up stagger-5">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground">(옵션)</span>
              <p className="text-xs text-foreground font-medium">원가/재무 데이터 연계로 "공정 → 손익" 추적</p>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="mt-4 p-4 rounded-xl hero-gradient max-w-5xl fade-in-up stagger-5">
          <p className="text-sm text-white font-medium text-center">
            "대시보드가 아니라, 오프라인에서도 굴러가는 
            <span className="font-bold"> 데이터 → 인사이트 → 의사결정</span> 체계를 구축합니다."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
