import { SlideLayout } from "./SlideLayout";
import { Search, Database, Brain, LayoutDashboard } from "lucide-react";

export function SlidePOC() {
  const phases = [
    {
      weeks: "1~2주",
      title: "데이터 연결·검증",
      icon: Search,
      tasks: [
        "누락/중복/시간동기/키 매핑(LOT·설비·공정)",
        "표준 스키마, KPI 베이스라인 산출"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      weeks: "3~4주",
      title: "분석/랭킹",
      icon: Brain,
      tasks: [
        "이상탐지 + 원인 후보 Top-N(신뢰도 포함)"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      weeks: "5~6주",
      title: "대시보드/성과 측정",
      icon: LayoutDashboard,
      tasks: [
        "알람·리포트·KPI 추적",
        "재현성 확인"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const pocScope = [
    { icon: Database, text: "데이터 통합" },
    { icon: Brain, text: "이상탐지 + 원인랭킹" },
    { icon: LayoutDashboard, text: "대시보드" }
  ];

  return (
    <SlideLayout slideNumber={6} totalSlides={10} category="PoC Plan">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Proof of Concept</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            실행 단계 <span className="text-primary">(6주 PoC)</span>
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-3xl fade-in-up stagger-2">
            "불량 조기경보 + 원인 후보 랭킹" 정량 성과 검증
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
