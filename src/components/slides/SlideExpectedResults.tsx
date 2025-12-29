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
        <div className="mb-5">
          <span className="badge badge-success mb-3 fade-in-up">Expected Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            기대 효과 & KPI
          </h2>
        </div>

        {/* Benchmarks */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-4 fade-in-up stagger-2">
            스마트 제조 도입 기업 벤치마크 (Deloitte)
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-5xl">
            {benchmarks.map((item, index) => (
              <div 
                key={index}
                className={`p-5 rounded-xl bg-card shadow-card text-center fade-in-up stagger-${index + 3}`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} w-fit mx-auto mb-3`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-gradient mb-1">최대 {item.value}</p>
                <p className="text-base font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project KPIs */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-4 fade-in-up stagger-5">
            본 프로젝트 KPI 프레임 (고객 데이터/공정 맞춤)
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-5xl">
            {kpis.map((kpi, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl bg-card shadow-card border-l-4 ${kpi.color} fade-in-up stagger-5`}
              >
                <h4 className="text-base font-semibold text-primary mb-3">{kpi.category}</h4>
                <ul className="space-y-2">
                  {kpi.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Wrench className="w-4 h-4 text-muted-foreground shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Contact */}
        <div className="p-5 rounded-xl hero-gradient max-w-5xl fade-in-up stagger-5">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h3 className="text-xl text-white font-bold mb-1">PolarPulse</h3>
              <p className="text-sm text-white/80">Factory Intelligence Platform</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:gritgiver@polarpulse.ai" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-primary text-sm font-medium hover:bg-white/90">
                <Mail className="w-4 h-4" />
                gritgiver@polarpulse.ai
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium">
                <Phone className="w-4 h-4" />
                010-7767-0905
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
