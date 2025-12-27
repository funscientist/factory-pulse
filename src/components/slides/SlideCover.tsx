import { SlideLayout } from "./SlideLayout";
import { Database, BarChart3, Brain, Settings } from "lucide-react";

export function SlideCover() {
  return (
    <SlideLayout slideNumber={1} totalSlides={12}>
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        {/* Main headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in-up">
            <span className="text-foreground">오프라인(망분리) 제조 현장에서,</span>
            <br />
            <span className="text-gradient">품질·생산성·원가 의사결정</span>
            <span className="text-foreground">을 한 번에</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl fade-in-up stagger-1 opacity-0">
            다품종 소량 생산 환경에서 품질 안정화 / 생산성 향상 / 데이터 기반 의사결정을 동시에 달성
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 fade-in-up stagger-2 opacity-0">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Database className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground font-medium">설비·품질·유틸리티 데이터 통합</p>
                <p className="text-xs text-muted-foreground mt-1">LLM 기반 분석으로 인사이트화</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <BarChart3 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground font-medium">Dual Dashboard 제공</p>
                <p className="text-xs text-muted-foreground mt-1">경영진 의사결정 + 현장 KPI</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Brain className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground font-medium">AI 기반 품질/생산성 분석</p>
                <p className="text-xs text-muted-foreground mt-1">불량 원인·공정 최적화 도출</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Settings className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground font-medium">(옵션) 재무/원가 데이터 연계</p>
                <p className="text-xs text-muted-foreground mt-1">"공정 → 손익"까지 추적</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="fade-in-up stagger-3 opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Factory Intelligence Platform
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
