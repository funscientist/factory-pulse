import { SlideLayout } from "./SlideLayout";
import { Database, BarChart3, Brain, Shield } from "lucide-react";

export function SlideCover() {
  return (
    <SlideLayout slideNumber={1} totalSlides={12} variant="hero">
      <div className="flex flex-col justify-center h-full">
        {/* Main headline */}
        <div className="max-w-5xl">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Polarpulse x BaronTech | Hybrid Only
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in-up stagger-1">
            Secure AIOps
            <br />
            <span className="text-white/90">제조 특화 프로세스 최적화 솔루션</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl fade-in-up stagger-2">
            오프라인(망분리) 제조 데이터를 'Secure AIOps'로 연결해 
            <span className="font-semibold text-white"> 품질·생산성·의사결정</span>을 동시에 달성
          </p>

          {/* Key features */}
          <div className="grid grid-cols-2 gap-4 max-w-4xl">
            {[
              {
                icon: Database,
                title: "설비·품질·유틸리티 로그 통합",
                desc: "LLM/AI 분석 → 대시보드 → 실행으로 연결"
              },
              {
                icon: BarChart3,
                title: "Dual Dashboard 제공",
                desc: "경영진 의사결정 + 현장 KPI"
              },
              {
                icon: Brain,
                title: "다품종 소량 생산 최적화",
                desc: "품질 안정화 / 생산성 향상 / 데이터 기반 의사결정"
              },
              {
                icon: Shield,
                title: "Hybrid Architecture",
                desc: "DB/원천 데이터는 사내 고정, 분석은 승인형 하이브리드"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all fade-in-up stagger-${index + 3}`}
              >
                <div className="p-2 rounded-lg bg-white/20">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">{item.title}</p>
                  <p className="text-xs text-white/70 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
