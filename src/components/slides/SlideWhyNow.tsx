import { SlideLayout } from "./SlideLayout";
import { Target, TrendingDown, Gauge, Settings, Clock } from "lucide-react";

export function SlideWhyNow() {
  const kpis = [
    {
      icon: TrendingDown,
      title: "불량 PPM 감소",
      benefit: "클레임 비용 절감, 납품 품질 신뢰도 강화",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "재작업률 감소",
      benefit: "직접 원가 절감, 리드타임 단축",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Gauge,
      title: "Cpk 향상",
      benefit: "공정 변동성 축소, 품질 예측 가능성 확보",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Settings,
      title: "공정 조건 편차 감소",
      benefit: "레시피/설비 조건 유지로 불량 사전 차단",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Clock,
      title: "LOT 추적 리드타임 단축",
      benefit: "원인 규명·격리 속도 개선",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <SlideLayout slideNumber={3} totalSlides={10} category="Target KPI">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Target KPI</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">목표 KPI</h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">
            정량적 성과 지표로 측정하는 품질·생산성 개선
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl">
          {kpis.slice(0, 3).map((kpi, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${kpi.color}`}>
                  <kpi.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{kpi.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{kpi.benefit}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mt-4">
          {kpis.slice(3).map((kpi, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 6}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${kpi.color}`}>
                  <kpi.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{kpi.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{kpi.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
