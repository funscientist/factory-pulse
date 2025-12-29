import { SlideLayout } from "./SlideLayout";
import { Target, Search, Gauge, TrendingDown, LineChart } from "lucide-react";
export function SlideCustomerGoals() {
  const goals = [{
    icon: Search,
    title: "조기 품질 이슈 식별",
    description: "완성품 검수 이전 중간 공정에서 품질 저하 포인트를 조기 식별",
    metric: "재작업 감소",
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: Gauge,
    title: "생산성 최적화",
    description: "다품종 소량 생산에서 설비 세팅/레시피 최적화로 납기·생산성 개선",
    metric: "납기 준수율 ↑",
    color: "from-violet-500 to-purple-500"
  }, {
    icon: TrendingDown,
    title: "비용 절감",
    description: "생산성 향상을 통한 인건비/운영비 절감 실현",
    metric: "운영비용 ↓",
    color: "from-emerald-500 to-green-500"
  }, {
    icon: LineChart,
    title: "경영 의사결정 대시보드",
    description: "설비 데이터 + 원가 분석(재무)까지 연계한 C-Level 의사결정 지원",
    metric: "리드타임 단축",
    color: "from-orange-500 to-amber-500"
  }];
  return <SlideLayout slideNumber={2} totalSlides={12} category="Executive Summary">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Customer Objectives</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">주요 해결 과제 및 목표</h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">현장의 데이터를 경영의 가치로 바꿉니다</p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {goals.map((goal, index) => <div key={index} className={`group p-6 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} shadow-lg shrink-0`}>
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-border">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Target className="w-4 h-4" />
                  {goal.metric}
                </span>
              </div>
            </div>)}
        </div>
      </div>
    </SlideLayout>;
}