import { SlideLayout } from "./SlideLayout";
import { TrendingUp, Target, Wrench, BarChart3, Mail, Phone, ArrowRight } from "lucide-react";

export function SlideExpectedResults() {
  const benchmarks = [
    { value: "20%", label: "생산 산출 개선", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { value: "20%", label: "직원 생산성 개선", icon: Target, color: "from-violet-500 to-purple-500" },
    { value: "15%", label: "언락드 캐파 확보", icon: BarChart3, color: "from-emerald-500 to-green-500" }
  ];

  const kpis = [
    {
      category: "품질",
      metrics: ["불량률 감소", "재작업 비용 절감"],
      color: "border-blue-500"
    },
    {
      category: "생산성",
      metrics: ["가동률 향상", "셋업 시간 단축"],
      color: "border-violet-500"
    },
    {
      category: "의사결정",
      metrics: ["리포트 생성 시간 단축", "분석 리드타임 감소"],
      color: "border-emerald-500"
    }
  ];

  return (
    <SlideLayout slideNumber={12} totalSlides={12} category="Results">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-3">
          <span className="badge badge-success mb-2 fade-in-up text-xs">Expected Outcomes</span>
          <h2 className="text-xl md:text-2xl font-bold text-foreground fade-in-up stagger-1">
            기대 효과 & KPI
          </h2>
        </div>

        {/* Benchmarks */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-3 fade-in-up stagger-2">
            스마트 제조 도입 기업 벤치마크 (Deloitte)
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-4xl">
            {benchmarks.map((item, index) => (
              <div 
                key={index}
                className={`p-3 rounded-xl bg-card shadow-card text-center fade-in-up stagger-${index + 3}`}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} w-fit mx-auto mb-2`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg font-bold text-gradient mb-0.5">최대 {item.value}</p>
                <p className="text-xs font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project KPIs */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-3 fade-in-up stagger-5">
            본 프로젝트 KPI 프레임 (고객 데이터/공정 맞춤)
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-4xl">
            {kpis.map((kpi, index) => (
              <div 
                key={index}
                className={`p-3 rounded-xl bg-card shadow-card border-l-4 ${kpi.color} fade-in-up stagger-5`}
              >
                <h4 className="text-xs font-semibold text-primary mb-2">{kpi.category}</h4>
                <ul className="space-y-1">
                  {kpi.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Wrench className="w-3 h-3 text-muted-foreground shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Contact */}
        <div className="p-4 rounded-xl hero-gradient max-w-4xl fade-in-up stagger-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg text-white font-bold mb-0.5">PolarPulse</h3>
              <p className="text-xs text-white/80">Factory Intelligence Platform</p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:gritgiver@polarpulse.ai" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-primary text-xs font-medium hover:bg-white/90">
                <Mail className="w-3.5 h-3.5" />
                gritgiver@polarpulse.ai
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 text-white text-xs font-medium">
                <Phone className="w-3.5 h-3.5" />
                010-7767-0905
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
