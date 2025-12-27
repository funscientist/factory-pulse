import { SlideLayout } from "./SlideLayout";
import { Target, Search, Gauge, TrendingDown, LineChart } from "lucide-react";

export function SlideCustomerGoals() {
  const goals = [
    {
      icon: Search,
      title: "조기 품질 이슈 식별",
      description: "완성품 검수 이전 중간 공정에서 품질 저하 포인트를 조기 식별",
      metric: "재작업 감소",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Gauge,
      title: "생산성 최적화",
      description: "다품종 소량 생산에서 설비 세팅/레시피 최적화로 납기·생산성 개선",
      metric: "납기 준수율 ↑",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: TrendingDown,
      title: "비용 절감",
      description: "생산성 향상을 통한 인건비/운영비 절감 실현",
      metric: "운영비용 ↓",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: LineChart,
      title: "경영 의사결정 대시보드",
      description: "설비 데이터 + 원가 분석(재무)까지 연계한 C-Level 의사결정 지원",
      metric: "리드타임 단축",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <SlideLayout slideNumber={2} totalSlides={12} category="Executive Summary">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="badge badge-info mb-4 fade-in-up">Customer Objectives</span>
          <h2 className="text-h1 text-foreground fade-in-up stagger-1">
            고객이 원하는 것
          </h2>
          <p className="mt-3 text-body-lg text-muted-foreground max-w-xl fade-in-up stagger-2">
            혹시 이런 문제들을 겪고 계신가요?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className={`group card-base fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} shadow-lg`}>
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 text-foreground mb-2">{goal.title}</h3>
                  <p className="text-small text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              </div>
              
              <div className="mt-5 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-1.5 text-small font-semibold text-primary">
                  <Target className="w-4 h-4" />
                  {goal.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
