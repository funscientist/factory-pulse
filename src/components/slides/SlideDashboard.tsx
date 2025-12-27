import { SlideLayout } from "./SlideLayout";
import { Users, Factory, AlertTriangle, TrendingUp, Gauge, DollarSign, Settings, BarChart3 } from "lucide-react";

export function SlideDashboard() {
  const executiveFeatures = [
    { icon: AlertTriangle, text: "품질 리스크 조기경보 (중간 공정 기반)" },
    { icon: TrendingUp, text: "생산성/납기 영향 요인 Top5" },
    { icon: DollarSign, text: "(옵션) 품질/가동률 변동의 원가·손익 영향" }
  ];

  const opsFeatures = [
    { icon: Gauge, text: "설비별 이상징후/불량률/레시피 편차" },
    { icon: BarChart3, text: "LOT/공정별 원인 Drill-down" },
    { icon: Settings, text: "개선안 실행 후 Before/After 추적" }
  ];

  return (
    <SlideLayout slideNumber={9} totalSlides={12} category="Product">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Layer 3: Visualization
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            Dual Dashboard
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl fade-in-up stagger-2 opacity-0">
            경영진용 vs 현장용을 분리하여 각 사용자에 최적화된 뷰 제공
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
          {/* Executive Dashboard */}
          <div className="fade-in-up stagger-3 opacity-0">
            <div className="p-6 rounded-xl bg-card border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">경영진용</h3>
                  <p className="text-sm text-muted-foreground">Executive Dashboard</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {executiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-muted-foreground">의사결정 지원 최적화</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ops Dashboard */}
          <div className="fade-in-up stagger-4 opacity-0">
            <div className="p-6 rounded-xl bg-card border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">현장용</h3>
                  <p className="text-sm text-muted-foreground">Ops/KPI Dashboard</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {opsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-muted-foreground">실시간 모니터링 및 액션</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
