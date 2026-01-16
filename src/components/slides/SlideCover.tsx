import { SlideLayout } from "./SlideLayout";
import { Shield, Database, Zap, ArrowRight } from "lucide-react";

export function SlideCover() {
  return (
    <SlideLayout slideNumber={1} totalSlides={9} variant="hero">
      <div className="flex flex-col justify-center h-full">
        {/* Main headline */}
        <div className="max-w-5xl">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              PolarPulse
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 fade-in-up stagger-1">
            Secure Decision Intelligence
            <br />
            <span className="text-white/90">보안 특화 Security Operations 최적화 솔루션</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl fade-in-up stagger-2">
            경영진의 "보안 질문"을 근거 기반 의사결정으로 즉시 전환
          </p>

          {/* Key flow */}
          <div className="flex items-center gap-6 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 max-w-4xl mb-10 fade-in-up stagger-3">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/20">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium text-lg">보안 데이터</span>
            </div>
            <ArrowRight className="w-6 h-6 text-white/60" />
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium text-lg">증거(Evidence)</span>
            </div>
            <ArrowRight className="w-6 h-6 text-white/60" />
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-white/20">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">대응(Action)</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-white/60 text-sm fade-in-up stagger-4">
            대표 이성용 | Jan, 2026
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
