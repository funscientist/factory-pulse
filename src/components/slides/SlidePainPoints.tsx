import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, Database, Search, Settings, BarChart3, Brain } from "lucide-react";

export function SlidePainPoints() {
  const painPoints = [
    {
      icon: Database,
      title: "데이터 분산·체계 부재",
      description: "제어/품질/유틸리티 데이터가 분산되어 통합 수집·정규화·이력 관리 체계 부재",
      severity: "high"
    },
    {
      icon: Search,
      title: "불량 원인 조기 식별 불가",
      description: '"데이터는 있는데" 불량의 원인을 조기에 못 잡고 있음',
      severity: "critical"
    },
    {
      icon: Settings,
      title: "셋업 최적화 경험 의존",
      description: "다품종 셋업 최적화가 경험 의존이며 표준화되지 않음",
      severity: "high"
    },
    {
      icon: BarChart3,
      title: "사후 리포팅 중심",
      description: "경영진 보고는 사후 리포팅 중심으로 의사결정 지연",
      severity: "medium"
    },
    {
      icon: Brain,
      title: "AI 파이프라인 경험 부족",
      description: "AI 도입 의지는 강하지만 운영 가능한 데이터/모델 파이프라인 경험 부족",
      severity: "medium"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <span className="badge badge-error text-xs">Critical</span>;
      case "high":
        return <span className="badge badge-warning text-xs">High</span>;
      default:
        return <span className="badge badge-info text-xs">Medium</span>;
    }
  };

  return (
    <SlideLayout slideNumber={3} totalSlides={12} category="Problem" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-error mb-3 fade-in-up">Pain Points</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            현재 Pain Point
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl">
          {painPoints.slice(0, 3).map((point, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-secondary shrink-0">
                  <point.icon className="w-5 h-5 text-foreground" />
                </div>
                {getSeverityBadge(point.severity)}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mt-4">
          {painPoints.slice(3).map((point, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 5}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-secondary shrink-0">
                  <point.icon className="w-5 h-5 text-foreground" />
                </div>
                {getSeverityBadge(point.severity)}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
