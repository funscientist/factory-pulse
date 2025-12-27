import { SlideLayout } from "./SlideLayout";
import { Database, BarChart3, Brain, Settings, ArrowRight } from "lucide-react";

export function SlideCover() {
  return (
    <SlideLayout slideNumber={1} totalSlides={12} variant="hero">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        {/* Main headline */}
        <div className="max-w-4xl">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Factory Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-display font-bold leading-tight mb-6 fade-in-up stagger-1">
            오프라인(망분리) 제조 현장에서,
            <br />
            <span className="text-white/90">품질·생산성·원가 의사결정</span>을 한 번에
          </h1>
          
          <p className="text-lg md:text-body-lg text-white/80 mb-10 max-w-2xl fade-in-up stagger-2">
            다품종 소량 생산 환경에서 품질 안정화 / 생산성 향상 / 데이터 기반 의사결정을 동시에 달성
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl">
            {[
              { icon: Database, title: "설비·품질·유틸리티 데이터 통합", desc: "LLM 기반 분석으로 인사이트화" },
              { icon: BarChart3, title: "Dual Dashboard 제공", desc: "경영진 의사결정 + 현장 KPI" },
              { icon: Brain, title: "AI 기반 품질/생산성 분석", desc: "불량 원인·공정 최적화 도출" },
              { icon: Settings, title: "(옵션) 재무/원가 데이터 연계", desc: '"공정 → 손익"까지 추적' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all fade-in-up stagger-${index + 3}`}
              >
                <div className="p-2 rounded-lg bg-white/20">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{item.title}</p>
                  <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 fade-in-up stagger-5">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg">
              PoC 상담 요청
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all">
              제품 둘러보기
            </button>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
