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

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive/10 border-destructive/30 text-destructive";
      case "high":
        return "bg-amber-500/10 border-amber-500/30 text-amber-500";
      default:
        return "bg-primary/10 border-primary/30 text-primary";
    }
  };

  return (
    <SlideLayout slideNumber={3} totalSlides={12} category="Problem">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium mb-4 fade-in-up opacity-0">
            Pain Points
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            현황과 Pain Point
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl fade-in-up stagger-2 opacity-0">
            현장 현실을 직시합니다
          </p>
        </div>

        <div className="space-y-4 max-w-4xl">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`flex items-start gap-5 p-6 rounded-xl bg-card border border-border fade-in-up stagger-${index + 3} opacity-0`}
            >
              <div className={`p-3 rounded-lg ${getSeverityStyles(point.severity)}`}>
                <point.icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                  {point.severity === "critical" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium">
                      <AlertTriangle className="w-3 h-3" />
                      Critical
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key constraint highlight */}
        <div className="mt-8 p-4 rounded-lg border border-destructive/20 bg-destructive/5 max-w-4xl fade-in-up stagger-5 opacity-0">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">가장 큰 제약:</span> 원청 보안 정책으로 인한 오프라인(외부망 차단) 수집·처리 필수
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
