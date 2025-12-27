import { SlideLayout } from "./SlideLayout";
import { Calendar, Search, Wrench, CheckSquare, FileText, LayoutDashboard, ListChecks } from "lucide-react";

export function SlidePOC() {
  const phases = [
    {
      weeks: "Week 1-2",
      title: "Data Discovery & Design",
      icon: Search,
      tasks: [
        "수집 가능 데이터 범위 확정 (제어/품질/유틸리티)",
        "표준 스키마·ID 체계 정의 (설비/LOT/공정/레시피)"
      ]
    },
    {
      weeks: "Week 3-5",
      title: "Pilot Build",
      icon: Wrench,
      tasks: [
        "오프라인 수집/정제 파이프라인 구축 (최소 1개 라인/설비군)",
        "LLM 인사이트 2~3개 유즈케이스 구현 (불량 원인/셋업 영향/병목)"
      ]
    },
    {
      weeks: "Week 6-8",
      title: "Validate & Readout",
      icon: CheckSquare,
      tasks: [
        "경영진/현장 대시보드 시연",
        "개선 액션과 KPI 정의 (현장 실행 가능한 수준)"
      ]
    }
  ];

  const preparations = [
    "가상 데이터 기반 MVP 데모 (Excel로 생성 가능)",
    "아키텍처 비교 1페이지 시각자료",
    "질의 리스트 (데이터 현황/지표/변수/엑셀 사용)"
  ];

  return (
    <SlideLayout slideNumber={11} totalSlides={12} category="Implementation">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Proof of Concept
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            PoC 제안 <span className="text-primary">(6-8주)</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl fade-in-up stagger-2 opacity-0">
            "데이터 통합 + 인사이트 + 대시보드"를 최소 단위로 증명
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mb-10">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-xl bg-card border border-border fade-in-up stagger-${index + 3} opacity-0`}
            >
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {phase.weeks}
                </span>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <phase.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{phase.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Preparation checklist */}
        <div className="p-6 rounded-xl bg-card border border-border max-w-6xl fade-in-up stagger-5 opacity-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <ListChecks className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">미팅 전 준비물</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {preparations.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <FileText className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
