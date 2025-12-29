import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, Search, Settings, TrendingDown, Gauge, Target } from "lucide-react";

export function SlideDashboard() {
  const useCases = [
    {
      icon: AlertTriangle,
      title: "중요 공정 품질 이상 조기경보",
      input: "실시간 설비/공정 조건",
      output: "이상 패턴 예측·알람",
      action: "선제 점검/조건 수정",
      kpi: "불량 PPM↓, 재작업률↓",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Search,
      title: "불량 원인 후보 자동 랭킹",
      input: "불량 발생 데이터 + 전 공정 이력",
      output: "원인 후보 Top-N + 신뢰도",
      action: "상위 원인부터 집중 개선",
      kpi: "LOT 추적 리드타임↓, Cpk↑",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "다품종 셋업 최적화",
      input: "제품별 셋업 조건 + 수율/품질",
      output: "초기 셋업 레시피 추천(가드레일)",
      action: "셋업 시간 단축, 초기 불량 감소",
      kpi: "조건편차↓, 재작업률↓",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <SlideLayout slideNumber={9} totalSlides={10} category="Use Cases" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Priority PoC Cases</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            적용 사례 (우선순위 PoC)
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 max-w-6xl">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${useCase.color}`}>
                  <useCase.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="text-sm font-semibold text-foreground mb-3">{useCase.title}</h3>
              
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-muted-foreground">입력: </span>
                  <span className="text-foreground">{useCase.input}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">산출: </span>
                  <span className="text-foreground">{useCase.output}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">조치: </span>
                  <span className="text-foreground">{useCase.action}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">{useCase.kpi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
