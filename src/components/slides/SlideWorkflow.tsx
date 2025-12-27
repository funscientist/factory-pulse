import { SlideLayout } from "./SlideLayout";
import { FileText, Database, Brain, LayoutDashboard, ArrowDown, Users, Factory } from "lucide-react";

export function SlideWorkflow() {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "요구사항 추출",
      description: "주문/요청 이메일·문서에서 핵심 요구사항 자동 추출"
    },
    {
      step: "02",
      icon: Database,
      title: "데이터 수집·가공",
      description: "오프라인에서 설비/품질/유틸리티 데이터 수집 → 분석용 형태로 정제"
    },
    {
      step: "03",
      icon: Brain,
      title: "LLM 분석",
      description: "불량 원인/공정 병목/비효율/세팅 개선안 도출"
    },
    {
      step: "04",
      icon: LayoutDashboard,
      title: "대시보드 제공",
      description: "경영진 + 현장 맞춤 대시보드"
    }
  ];

  return (
    <SlideLayout slideNumber={6} totalSlides={12} category="Solution">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            End-to-End Workflow
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            4단계 자동화 흐름
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {/* Left: Workflow steps */}
          <div className="space-y-4">
            {steps.map((item, index) => (
              <div key={index} className={`relative fade-in-up stagger-${index + 2} opacity-0`}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-primary mb-2">{item.step}</span>
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-4 h-4 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Dashboard outputs */}
          <div className="space-y-4 fade-in-up stagger-5 opacity-0">
            <h3 className="text-lg font-semibold text-foreground mb-4">대시보드 출력</h3>
            
            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">경영진 Dashboard</p>
                  <p className="text-xs text-muted-foreground">Executive Decision Support</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-12">
                <li>• 리스크·생산성·품질 의사결정 지원</li>
                <li>• KPI 트렌드 및 예측</li>
                <li>• 원가 영향 분석 (옵션)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Factory className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">현장 Dashboard</p>
                  <p className="text-xs text-muted-foreground">Operational KPIs</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-12">
                <li>• 라인/설비/공정 KPI 모니터링</li>
                <li>• 실시간 이상 감지</li>
                <li>• 개선안 실행 추적</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
