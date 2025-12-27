import { SlideLayout } from "./SlideLayout";
import { Target, Search, Gauge, TrendingDown, LineChart } from "lucide-react";

export function SlideCustomerGoals() {
  const goals = [
    {
      icon: Search,
      title: "조기 품질 이슈 식별",
      description: "완성품 검수 이전 중간 공정에서 품질 저하 포인트를 조기 식별",
      metric: "재작업 감소"
    },
    {
      icon: Gauge,
      title: "생산성 최적화",
      description: "다품종 소량 생산에서 설비 세팅/레시피 최적화로 납기·생산성 개선",
      metric: "납기 준수율 ↑"
    },
    {
      icon: TrendingDown,
      title: "비용 절감",
      description: "생산성 향상을 통한 인건비/운영비 절감 실현",
      metric: "운영비용 ↓"
    },
    {
      icon: LineChart,
      title: "경영 의사결정 대시보드",
      description: "설비 데이터 + 원가 분석(재무)까지 연계한 C-Level 의사결정 지원",
      metric: "리드타임 단축"
    }
  ];

  return (
    <SlideLayout slideNumber={2} totalSlides={12} category="Executive Summary">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Customer Objectives
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            고객이 원하는 것
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className={`group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 fade-in-up stagger-${index + 2} opacity-0`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <goal.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Target className="w-3.5 h-3.5" />
                  {goal.metric}
                </span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
