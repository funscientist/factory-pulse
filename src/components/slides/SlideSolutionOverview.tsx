import { SlideLayout } from "./SlideLayout";
import { Database, Brain, LayoutDashboard } from "lucide-react";

export function SlideSolutionOverview() {
  const layers = [
    {
      icon: Database,
      layer: "Layer 1",
      title: "On-Prem Data Hub",
      items: [
        "설비/검사/레시피/LOT 데이터 통합·정제",
        "망분리/사내 서버 기반",
        "원천 데이터 외부 반출 없음"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      layer: "Layer 2",
      title: "Evidence Engine + LLM Assist",
      items: [
        "Evidence Engine: 이상탐지, 기여도/상관 분석, 원인 후보 랭킹(신뢰도/재현성)",
        "LLM Assist: 질의/설명/요약(근거 지표·기간·변수 함께 제시)"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: LayoutDashboard,
      layer: "Layer 3",
      title: "Dual Dashboard",
      items: [
        "경영진: 품질·리스크·생산성 KPI, 이슈 Top, ROI 추적",
        "현장: 알람, 원인 후보, 권장 조치, 조치 결과 트래킹"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={10} category="Solution" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Solution Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">솔루션 구조</h2>
          <p className="mt-2 text-base text-muted-foreground max-w-3xl fade-in-up stagger-2">
            3계층 아키텍처로 보안과 분석을 동시에 달성
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-6xl">
          {layers.map((item, index) => (
            <div 
              key={index} 
              className={`relative p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="absolute -top-3 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                  {item.layer}
                </span>
              </div>
              
              <div className="pt-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} w-fit mb-3`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 rounded-xl hero-gradient max-w-6xl fade-in-up stagger-5">
          <p className="text-base text-white font-medium text-center">
            "대시보드가 아니라, 오프라인에서도 굴러가는 
            <span className="font-bold"> 데이터 → 인사이트 → 의사결정</span> 체계를 구축합니다."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
