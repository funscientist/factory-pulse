import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, FileX, Link2Off, ClipboardX, PackageX } from "lucide-react";

export function SlidePainPoints() {
  const painPoints = [
    {
      icon: FileX,
      title: "설비 로그 포맷 상이",
      description: "라인/공정 단위 통합 분석 지연",
      severity: "critical"
    },
    {
      icon: Link2Off,
      title: "검사/수율 데이터 단절",
      description: "영향 공정 식별에 시간 소요",
      severity: "critical"
    },
    {
      icon: ClipboardX,
      title: "레시피/조건 ↔ 결과 연결 부재",
      description: "셋업이 경험 의존",
      severity: "high"
    },
    {
      icon: AlertTriangle,
      title: "작업 표준 ↔ 작업 이력 불일치",
      description: "표준 검증/개선 어려움",
      severity: "high"
    },
    {
      icon: PackageX,
      title: "원자재 LOT ↔ 품질 상관 분석 부재",
      description: "책임 규명/재발 방지 지연",
      severity: "medium"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <span className="px-2 py-0.5 rounded text-xs font-medium bg-destructive/10 text-destructive">Critical</span>;
      case "high":
        return <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-600">High</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground">Medium</span>;
    }
  };

  return (
    <SlideLayout slideNumber={4} totalSlides={10} category="Current State" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold shadow-md mb-3 fade-in-up">Pain Points</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">현재 문제</h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">
            데이터는 쌓이지만, 연결되지 않아 분석이 지연됩니다
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl">
          {painPoints.slice(0, 3).map((point, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
                  <point.icon className="w-5 h-5 text-white" />
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
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 6}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
                  <point.icon className="w-5 h-5 text-white" />
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
