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
    <SlideLayout slideNumber={9} totalSlides={12} category="Product" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Layer 3: Visualization</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            Dual Dashboard
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">
            경영진용 vs 현장용을 분리하여 각 사용자에 최적화된 뷰 제공
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          {/* Executive Dashboard */}
          <div className="fade-in-up stagger-3">
            <div className="p-6 rounded-xl bg-card shadow-card h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">경영진용</h3>
                  <p className="text-sm text-muted-foreground">Executive Dashboard</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {executiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-secondary">
                    <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground">의사결정 지원 최적화</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ops Dashboard */}
          <div className="fade-in-up stagger-4">
            <div className="p-6 rounded-xl bg-card shadow-card h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">현장용</h3>
                  <p className="text-sm text-muted-foreground">Ops/KPI Dashboard</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {opsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-secondary">
                    <feature.icon className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm text-muted-foreground">실시간 모니터링 및 액션</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
