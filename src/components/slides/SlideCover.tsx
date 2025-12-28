import { SlideLayout } from "./SlideLayout";
import { Database, BarChart3, Brain, Settings, ArrowRight } from "lucide-react";
export function SlideCover() {
  return <SlideLayout slideNumber={1} totalSlides={12} variant="hero">
      <div className="flex flex-col justify-center h-full">
        {/* Main headline */}
        <div className="max-w-4xl">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Factory Intelligence Platform
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 fade-in-up stagger-1">
            Secure AI Ops
            <br />
            <span className="text-white/90">제조 특화 프로세스 최적화 솔루션</span>
          </h1>
          
          <p className="text-sm md:text-base text-white/80 mb-6 max-w-2xl fade-in-up stagger-2">
            다품종 소량 생산 환경에서 품질 안정화 / 생산성 향상 / 데이터 기반 의사결정을 동시에 달성
          </p>

          {/* Key features */}
          <div className="grid grid-cols-2 gap-3 mb-6 max-w-3xl">
            {[{
            icon: Database,
            title: "설비·품질·유틸리티 데이터 통합",
            desc: "LLM 기반 분석으로 인사이트화"
          }, {
            icon: BarChart3,
            title: "Dual Dashboard 제공",
            desc: "경영진 의사결정 + 현장 KPI"
          }, {
            icon: Brain,
            title: "AI 기반 품질/생산성 분석",
            desc: "불량 원인·공정 최적화 도출"
          }, {
            icon: Settings,
            title: "(옵션) 재무/원가 데이터 연계",
            desc: '"공정 → 손익"까지 추적'
          }].map((item, index) => <div key={index} className={`flex items-start gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all fade-in-up stagger-${index + 3}`}>
                <div className="p-1.5 rounded-md bg-white/20">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white font-medium">{item.title}</p>
                  <p className="text-[10px] text-white/70 mt-0.5">{item.desc}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </SlideLayout>;
}