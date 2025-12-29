import { SlideLayout } from "./SlideLayout";
import { FileText, Database, Brain, LayoutDashboard, ArrowDown, Users, Factory } from "lucide-react";

export function SlideWorkflow() {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "요구사항 추출",
      description: "주문 요청(이메일/문서)에서 핵심 요구사항 1차 구조화",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      icon: Database,
      title: "데이터 수집·가공",
      description: "오프라인 구역에서 설비/품질/유틸리티 데이터 수집 → 분석용 정제/표준화",
      color: "from-violet-500 to-purple-500"
    },
    {
      step: "03",
      icon: Brain,
      title: "LLM/AI 분석",
      description: "불량 원인 후보, 공정 비효율/병목, 세팅 최적화 인사이트 도출",
      color: "from-emerald-500 to-green-500"
    },
    {
      step: "04",
      icon: LayoutDashboard,
      title: "Dual Dashboard",
      description: "경영진 의사결정 대시보드 + 현장 KPI 대시보드(Drill-down)",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <SlideLayout slideNumber={6} totalSlides={12} category="Solution">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">End-to-End Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            End-to-End Workflow
          </h2>
          <p className="mt-2 text-base text-muted-foreground fade-in-up stagger-2">
            회의록 워크플로 기반 4단계 자동화
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          {/* Left: Workflow steps */}
          <div className="space-y-3">
            {steps.map((item, index) => (
              <div key={index} className={`relative fade-in-up stagger-${index + 2}`}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-card">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-primary mb-1">{item.step}</span>
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color}`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Dashboard outputs */}
          <div className="space-y-4 fade-in-up stagger-5">
            <h3 className="text-base font-semibold text-foreground mb-3">대시보드 출력</h3>
            
            <div className="p-5 rounded-xl bg-card shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">경영진 Dashboard</p>
                  <p className="text-xs text-muted-foreground">Executive Decision Support</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  품질 리스크·생산성·납기 영향 요인 Top-N
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  실행 결과 추적
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-card shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                  <Factory className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">현장 Dashboard</p>
                  <p className="text-xs text-muted-foreground">Operational KPIs + Drill-down</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  라인/설비/공정 KPI 모니터링
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  실시간 이상 감지 및 Drill-down
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
