import { SlideLayout } from "./SlideLayout";
import { Database, Bell, FileWarning, RotateCcw, Brain } from "lucide-react";

export function SlidePainPoints() {
  const painPoints = [
    {
      icon: Database,
      title: "보안 데이터 분산·맥락 단절",
      description: "SIEM/EDR/NDR/Cloud/IAM/취약점/자산 데이터가 분절",
      detail: '"한 사건"을 한 화면에서 설명하기 어렵고, 인수인계가 느림',
      severity: "high"
    },
    {
      icon: Bell,
      title: "Alert 피로 + 우선순위 부재",
      description: "알림은 많은데, 실제 위험 이벤트를 놓침",
      detail: "우선순위가 사람 경험에 의존",
      severity: "critical"
    },
    {
      icon: FileWarning,
      title: "증거(Evidence) 기반 리포팅 한계",
      description: "감사/경영보고가 수작업(스크린샷·엑셀·워드)",
      detail: '"왜 이 결론인지"를 재현하기 어려움',
      severity: "high"
    },
    {
      icon: RotateCcw,
      title: "대응 실행·결과 추적 미흡",
      description: "권고 조치가 실행으로 연결되지 않거나, 완료 검증이 어려움",
      detail: "반복되는 유사 사고에 대한 학습(Closed loop) 부재",
      severity: "medium"
    },
    {
      icon: Brain,
      title: "LLM 도입은 필요하지만, 보안·거버넌스가 불안",
      description: "데이터 외부 전송/프롬프트 유출/감사 추적 문제",
      detail: "승인된 범위 내에서만 안전하게 쓰는 구조가 필요",
      severity: "medium"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">Critical</span>;
      case "high":
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-orange-500/20 text-orange-400">High</span>;
      case "medium":
        return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-yellow-500/20 text-yellow-400">Medium</span>;
      default:
        return null;
    }
  };

  return (
    <SlideLayout slideNumber={3} totalSlides={9} category="Problem">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="inline-flex gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold shadow-md mb-3 fade-in-up">
            Pain Points
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            데이터는 쌓이지만, 위협은 사라지지 않습니다
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-6xl">
          {painPoints.slice(0, 2).map((point, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg shrink-0">
                  <point.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {getSeverityBadge(point.severity)}
                    <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">{point.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mt-4">
          {painPoints.slice(2).map((point, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 4}`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shrink-0">
                  <point.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {getSeverityBadge(point.severity)}
                  </div>
                  <h3 className="text-xs font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-xs text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
