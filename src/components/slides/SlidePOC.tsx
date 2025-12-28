import { SlideLayout } from "./SlideLayout";
import { Search, Wrench, CheckSquare, FileText, ListChecks } from "lucide-react";

export function SlidePOC() {
  const phases = [
    {
      weeks: "Week 1-2",
      title: "Data Discovery & Design",
      icon: Search,
      tasks: [
        "수집 가능 데이터 범위 확정 (제어/품질/유틸리티)",
        "표준 스키마·ID 체계 정의 (설비/LOT/공정/레시피)"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      weeks: "Week 3-5",
      title: "Pilot Build",
      icon: Wrench,
      tasks: [
        "오프라인 수집/정제 파이프라인 구축 (최소 1개 라인/설비군)",
        "LLM 인사이트 2~3개 유즈케이스 구현 (불량 원인/셋업 영향/병목)"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      weeks: "Week 6-8",
      title: "Validate & Readout",
      icon: CheckSquare,
      tasks: [
        "경영진/현장 대시보드 시연",
        "개선 액션과 KPI 정의 (현장 실행 가능한 수준)"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const preparations = [
    "가상 데이터 기반 MVP 데모 (Excel로 생성 가능)",
    "아키텍처 비교 1페이지 시각자료",
    "질의 리스트 (데이터 현황/지표/변수/엑셀 사용)"
  ];

  return (
    <SlideLayout slideNumber={11} totalSlides={12} category="Implementation" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-3">
          <span className="badge badge-info mb-2 fade-in-up text-xs">Proof of Concept</span>
          <h2 className="text-xl md:text-2xl font-bold text-foreground fade-in-up stagger-1">
            PoC 제안 <span className="text-primary">(6-8주)</span>
          </h2>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl fade-in-up stagger-2">
            "데이터 통합 + 인사이트 + 대시보드"를 최소 단위로 증명
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-3 gap-4 max-w-6xl mb-4">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative p-3 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="absolute -top-2 left-3">
                <span className="px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold">
                  {phase.weeks}
                </span>
              </div>
              
              <div className="pt-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${phase.color}`}>
                    <phase.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold text-foreground">{phase.title}</h3>
                </div>
                
                <ul className="space-y-1.5">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Preparation checklist */}
        <div className="p-3 rounded-xl bg-card shadow-card max-w-6xl fade-in-up stagger-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
              <ListChecks className="w-3.5 h-3.5 text-white" />
            </div>
            <h3 className="text-xs font-semibold text-foreground">미팅 전 준비물</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {preparations.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-secondary">
                <FileText className="w-3 h-3 text-primary shrink-0" />
                <p className="text-[10px] text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
