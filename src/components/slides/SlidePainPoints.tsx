import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, Database, Cpu, Shield } from "lucide-react";

export function SlidePainPoints() {
  const painPoints = [
    {
      icon: Database,
      title: "데이터 분산 및 사일로",
      description: "제어/품질/유틸리티 데이터가 개별 시스템에 흩어져 있고, 통합 수집·관리 인프라 부재",
      severity: "high"
    },
    {
      icon: Cpu,
      title: "AI/ML 역량 부족",
      description: "AI 도입 필요성은 크지만 데이터 운영/ML 파이프라인 구축 경험 부족",
      severity: "medium"
    },
    {
      icon: Shield,
      title: "보안 정책 제약",
      description: "원청(예: 삼성 SDI) 보안 정책 → 오프라인(외부망 차단) 수집·처리 요구",
      severity: "critical"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <span className="badge badge-error">Critical</span>;
      case "high":
        return <span className="badge badge-warning">High</span>;
      default:
        return <span className="badge badge-info">Medium</span>;
    }
  };

  return (
    <SlideLayout slideNumber={3} totalSlides={12} category="Problem" variant="gray">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="badge badge-error mb-4 fade-in-up">Pain Points</span>
          <h2 className="text-h1 text-foreground fade-in-up stagger-1">
            현황과 Pain Point
          </h2>
          <p className="mt-3 text-body-lg text-muted-foreground max-w-xl fade-in-up stagger-2">
            현장 현실을 직시합니다
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`flex items-start gap-5 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 fade-in-up stagger-${index + 3}`}
            >
              <div className="p-3 rounded-xl bg-secondary">
                <point.icon className="w-6 h-6 text-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-h4 text-foreground">{point.title}</h3>
                  {getSeverityBadge(point.severity)}
                </div>
                <p className="text-body text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key constraint highlight */}
        <div className="mt-8 p-5 rounded-xl border-l-4 border-destructive bg-red-50 max-w-4xl fade-in-up stagger-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
            <p className="text-body text-foreground">
              <span className="font-semibold">가장 큰 제약:</span> 원청 보안 정책으로 인한 오프라인(외부망 차단) 수집·처리 필수
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
