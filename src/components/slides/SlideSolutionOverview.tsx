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
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="badge badge-info mb-4 fade-in-up">Solution Overview</span>
          <h2 className="text-h1 text-foreground fade-in-up stagger-1">
            Polarpulse 제안 개요
          </h2>
          <p className="mt-3 text-h3 text-primary font-semibold fade-in-up stagger-2">
            "Factory Intelligence + Executive Dashboard"
          </p>
        </div>

        {/* 3-Layer Architecture */}
        <div className="relative max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {layers.map((item, index) => (
              <div 
                key={index}
                className={`relative card-base fade-in-up stagger-${index + 3}`}
              >
                <div className="absolute -top-3 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-tiny font-bold">
                    {item.layer}
                  </span>
                </div>
                
                <div className="pt-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} w-fit mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-h4 text-foreground mb-2">{item.title}</h3>
                  <p className="text-body text-muted-foreground">{item.description}</p>
                </div>

                {/* Arrow connector */}
                {index < layers.length - 1 && (
                  <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Optional: Financial integration */}
          <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-dashed border-border shadow-sm fade-in-up stagger-5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-tiny text-muted-foreground">(옵션)</span>
              <p className="text-body text-foreground font-medium">원가/재무 데이터 연계로 "공정 → 손익" 추적</p>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="mt-10 p-8 rounded-2xl hero-gradient max-w-5xl fade-in-up stagger-5">
          <p className="text-h3 text-white font-medium text-center">
            "대시보드가 아니라, 오프라인에서도 굴러가는 
            <span className="font-bold"> 데이터 → 인사이트 → 의사결정</span> 체계를 구축합니다."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
