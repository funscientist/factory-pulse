import { SlideLayout } from "./SlideLayout";
import { Search, Wrench, CheckSquare, Database, Shield, Brain } from "lucide-react";

export function SlidePOC() {
  const phases = [
    {
      weeks: "Week 1-2",
      title: "Data Discovery",
      icon: Search,
      tasks: [
        "수집 가능 데이터 확정 (제어/품질/유틸리티)",
        "키 체계(LOT/설비ID/레시피)와 표준 스키마 정의",
        "보안 게이트웨이 정책(무엇을 밖으로 내보낼지) 합의"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      weeks: "Week 3-5",
      title: "Pilot Build",
      icon: Wrench,
      tasks: [
        "온프렘 수집·정제 파이프라인 구축 (최소 1개 라인/설비군)",
        "인사이트 2~3개 구현 (불량 원인 랭킹, 조기 경보, 셋업 최적화)"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      weeks: "Week 6-8",
      title: "Validate & Readout",
      icon: CheckSquare,
      tasks: [
        "경영진/현장 대시보드 시연",
        "KPI/운영 프로세스(플레이북) 확정"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const pocScope = [
    { icon: Database, text: "데이터 통합" },
    { icon: Brain, text: "인사이트 2~3개" },
    { icon: Shield, text: "대시보드" }
  ];

  return (
    <SlideLayout slideNumber={11} totalSlides={12} category="Implementation" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Proof of Concept</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            PoC 제안 <span className="text-primary">(6-8주)</span>
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-3xl fade-in-up stagger-2">
            "데이터 통합 + 인사이트 2~3개 + 대시보드"로 증명
          </p>
        </div>

        {/* PoC Scope badges */}
        <div className="flex gap-3 mb-5 fade-in-up stagger-2">
          {pocScope.map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-3 gap-6 max-w-6xl">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                  {phase.weeks}
                </span>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${phase.color}`}>
                    <phase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {phase.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
