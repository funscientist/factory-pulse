import { SlideLayout } from "./SlideLayout";
import { Brain, Database, BarChart3, Workflow, CheckCircle2 } from "lucide-react";

export function SlideSolutionOverview() {
  const capabilities = [
    "이벤트 상관 분석",
    "이상 감지",
    "인과(원인) 판단",
    "운영 프로세스 자동화"
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={12} category="Solution" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Solution Overview</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            Polarpulse Secure AIOps
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          {/* Left: Definition */}
          <div className="fade-in-up stagger-2">
            <div className="p-6 rounded-xl bg-card shadow-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Secure AIOps란?</h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                운영 데이터(로그/이벤트/지표)를 AI로 상관·이상탐지·원인추정해 
                <span className="text-foreground font-semibold"> 운영 프로세스를 자동화</span>
              </p>

              <div className="p-4 rounded-lg bg-secondary mb-4">
                <p className="text-sm text-muted-foreground italic">
                  "AIOps는 빅데이터와 머신러닝으로 이벤트 상관, 이상 감지, 인과(원인) 판단 등 
                  IT/운영 프로세스를 자동화하는 접근입니다."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Gartner</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Application */}
          <div className="fade-in-up stagger-3">
            <div className="p-6 rounded-xl bg-card shadow-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">제조 현장 적용</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Polarpulse는 이를 <span className="text-primary font-semibold">제조 현장(설비/품질/유틸리티) 로그</span>에 적용해 
                "공정 운영"을 자동화 가능한 인사이트로 변환합니다.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Database, text: "설비/품질/유틸리티 로그 통합", color: "from-blue-500 to-cyan-500" },
                  { icon: Brain, text: "LLM/AI 기반 원인 분석", color: "from-violet-500 to-purple-500" },
                  { icon: BarChart3, text: "실행 가능한 대시보드 제공", color: "from-amber-500 to-orange-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="mt-6 p-5 rounded-xl hero-gradient max-w-6xl fade-in-up stagger-4">
          <p className="text-base text-white font-medium text-center">
            "대시보드가 아니라, 
            <span className="font-bold"> 데이터 → 인사이트 → 실행</span> 체계를 구축합니다."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
