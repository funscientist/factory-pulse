import { SlideLayout } from "./SlideLayout";
import { Bell, FileText, Search, Users, Cloud, DollarSign } from "lucide-react";

export function SlideDashboard() {
  const useCases = [
    {
      icon: Bell,
      title: "SOC Alert Triage 자동화",
      description: "알림 묶음(클러스터) + 우선순위 + \"왜 위험한지\" 근거 제공",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "침해사고(Incident) 타임라인·리포트 자동 생성",
      description: "사건 개요/영향/확산경로/권고조치/재발 방지까지 한 번에",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Search,
      title: "Threat Hunting / 이상행동 탐지",
      description: "계정·자산·네트워크·클라우드 이벤트를 상관분석하여 탐지 범위 확장",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "IAM/권한 리스크 모니터링",
      description: "과다권한/이상 로그인/권한 변경 추적 → 내부자 리스크 대응",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "클라우드·SaaS 보안 준수 점검",
      description: "정책 위반 탐지 + 우선순위 + 조치 권고(티켓/런북 연계)",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: DollarSign,
      title: "(옵션) Cost-to-Operate / Risk-to-ROI 연결",
      description: "보안 운영 비용 vs 리스크 노출(사건·통제 수준) 연결해 투자 우선순위 제시",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <SlideLayout slideNumber={9} totalSlides={10} category="Use Cases">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-base font-semibold shadow-md mb-4 fade-in-up">
            Core Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground fade-in-up stagger-1">
            핵심 Use Case
          </h2>
          <p className="mt-3 text-lg text-muted-foreground fade-in-up stagger-2">
            보안 특화 적용 영역
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${useCase.color} shadow-lg shrink-0`}>
                  <useCase.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
