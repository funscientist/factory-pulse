import { SlideLayout } from "./SlideLayout";
import { Search, Rocket, FileText, BarChart3, Mail, Phone } from "lucide-react";

export function SlideNextSteps() {
  const phases = [
    {
      title: "2주 진단",
      icon: Search,
      tasks: [
        "데이터 환경 점검",
        "KPI 베이스라인 산출",
        "PoC 과제 1~2개 확정"
      ],
      deliverables: "데이터 맵, 베이스라인 리포트, PoC 설계서(보안 포함)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "6주 PoC",
      icon: Rocket,
      tasks: [
        "이상 조기경보/원인랭킹 구현",
        "정량 KPI 개선 및 ROI 산출"
      ],
      deliverables: "대시보드/알람, PoC 결과보고서(재현성·ROI), 본 도입 확산안(RACI 포함)",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <SlideLayout slideNumber={10} totalSlides={10} category="Next Steps" variant="hero">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-4 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Next Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white fade-in-up stagger-1">
            다음 단계
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-5xl mb-8">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${phase.color}`}>
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
              </div>

              <ul className="space-y-2 mb-4">
                {phase.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-lg bg-white/10">
                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70">
                    <span className="font-semibold text-white/90">산출물: </span>
                    {phase.deliverables}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 max-w-5xl fade-in-up stagger-4">
          <h3 className="text-lg font-bold text-white mb-4">담당자 연락처</h3>
          <div className="flex items-center gap-8">
            <div>
              <p className="text-white font-semibold">이성용</p>
              <p className="text-white/70 text-sm">Cofounder & CEO</p>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="w-4 h-4" />
              <span className="text-sm">010-7767-0905</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-4 h-4" />
              <span className="text-sm">gritgiver@polarpulse.ai / contact@polarpulse.ai</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
