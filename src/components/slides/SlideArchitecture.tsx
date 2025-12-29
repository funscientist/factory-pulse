import { SlideLayout } from "./SlideLayout";
import { Database, Brain, LayoutDashboard, FileText, Shield } from "lucide-react";

export function SlideArchitecture() {
  const deliverables = [
    {
      icon: Database,
      title: "Offline Data Hub",
      items: ["수집 커넥터", "표준 스키마", "정제 파이프라인"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Insight Pack",
      items: ["불량/병목/셋업 개선 인사이트", "템플릿(설명 가능 형태)"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: LayoutDashboard,
      title: "Dual Dashboard",
      items: ["경영진 KPI 대시보드", "현장 KPI 대시보드"],
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: FileText,
      title: "Ops Playbook",
      items: ["경보 발생 시 원인 후보", "우선 조치/검증 절차", "운영 프로세스 포함"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Audit Log",
      items: ["전송/분석/질의 이력", "보안/승인 대응용"],
      color: "from-slate-500 to-gray-600"
    }
  ];

  return (
    <SlideLayout slideNumber={10} totalSlides={12} category="Deliverables">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-success mb-3 fade-in-up">Deliverables</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            고객이 받는 산출물
          </h2>
          <p className="mt-2 text-base text-muted-foreground fade-in-up stagger-2">
            "구축물" 중심의 실제 인도 항목
          </p>
        </div>

        <div className="grid grid-cols-5 gap-4 max-w-6xl">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} w-fit mb-3`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <ul className="space-y-1">
                {item.items.map((subItem, i) => (
                  <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 p-5 rounded-xl hero-gradient max-w-6xl fade-in-up stagger-5">
          <p className="text-base text-white font-medium text-center">
            단순 분석 리포트가 아닌, <span className="font-bold">운영 가능한 시스템과 프로세스</span>를 인도합니다.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
