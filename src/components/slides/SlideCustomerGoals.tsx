import { SlideLayout } from "./SlideLayout";
import { Target, Search, Gauge, TrendingDown, LineChart, AlertTriangle } from "lucide-react";

export function SlideCustomerGoals() {
  const goals = [
    {
      icon: Search,
      title: "중간 공정 품질 식별",
      description: "완성품 검수 전 중간 공정에서 품질 저하 포인트 식별",
      metric: "조기 탐지",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Gauge,
      title: "설비 세팅 최적화",
      description: "다품종 소량 생산에서 설비 세팅 최적화로 생산성 향상",
      metric: "생산성 향상",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: TrendingDown,
      title: "운영비/인건비 절감",
      description: "생산성 향상 기반 운영비/인건비 절감 실현",
      metric: "비용 절감",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: LineChart,
      title: "C-Level 의사결정 대시보드",
      description: "설비 데이터 + (옵션) 원가/경영 데이터 연계로 경영진 대시보드 구축",
      metric: "의사결정 지원",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <SlideLayout slideNumber={2} totalSlides={12} category="Executive Summary">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Customer Objectives</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            고객 목표
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">
            회의록 기반 핵심 요구사항
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-6xl mb-6">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className={`group p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} shadow-lg shrink-0`}>
                  <goal.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Target className="w-4 h-4" />
                  {goal.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Key constraint highlight */}
        <div className="p-4 rounded-xl border-l-4 border-destructive bg-red-50 max-w-6xl fade-in-up stagger-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">핵심 제약:</span> 원청 보안 정책(망분리/오프라인 수집) 준수 필수
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
