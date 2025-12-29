import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, Search, Settings, Gauge, Users, DollarSign } from "lucide-react";

export function SlideDashboard() {
  const useCases = [
    {
      icon: AlertTriangle,
      title: "중간 공정 품질 조기 경보",
      description: "완성품 검수 전 이상 징후 탐지",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Search,
      title: "불량 원인 후보 자동 랭킹",
      description: "설비/레시피/유틸리티/공정 조건 상관 분석",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "다품종 셋업 최적화",
      description: "유사 조건 검색 + 최적 세팅 추천 (레시피/조건 편차 관리)",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Gauge,
      title: "공정 병목/비효율 탐지",
      description: "셋업 타임, 대기, 재작업 패턴 기반 개선 포인트 제시",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "C-Level 대시보드",
      description: "품질 리스크·생산성·납기 영향 요인 Top-N + 실행 결과 추적",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: DollarSign,
      title: "(옵션) Cost-to-Operate 연결",
      description: "불량/다운타임이 비용·마진에 미치는 영향까지 확장",
      color: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <SlideLayout slideNumber={9} totalSlides={12} category="Use Cases" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Core Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            핵심 Use Case
          </h2>
          <p className="mt-2 text-base text-muted-foreground fade-in-up stagger-2">
            제조 특화 AIOps 적용 영역
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${useCase.color}`}>
                  <useCase.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
