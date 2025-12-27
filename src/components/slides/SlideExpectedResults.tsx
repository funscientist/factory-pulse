import { SlideLayout } from "./SlideLayout";
import { TrendingUp, Target, Clock, Wrench, BarChart3, Mail, Phone } from "lucide-react";

export function SlideExpectedResults() {
  const benchmarks = [
    { value: "20%", label: "생산 산출 개선", icon: TrendingUp },
    { value: "20%", label: "직원 생산성 개선", icon: Target },
    { value: "15%", label: "언락드 캐파 확보", icon: BarChart3 }
  ];

  const kpis = [
    {
      category: "품질",
      metrics: ["불량률 감소", "재작업 비용 절감"]
    },
    {
      category: "생산성",
      metrics: ["가동률 향상", "셋업 시간 단축"]
    },
    {
      category: "의사결정",
      metrics: ["리포트 생성 시간 단축", "분석 리드타임 감소"]
    }
  ];

  return (
    <SlideLayout slideNumber={12} totalSlides={12} category="Results">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Expected Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            기대 효과 & KPI
          </h2>
        </div>

        {/* Benchmarks */}
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-4 fade-in-up stagger-2 opacity-0">
            스마트 제조 도입 기업 벤치마크 (Deloitte)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {benchmarks.map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-card border border-border text-center fade-in-up stagger-${index + 3} opacity-0`}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gradient mb-1">최대 {item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project KPIs */}
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-4 fade-in-up stagger-5 opacity-0">
            본 프로젝트 KPI 프레임 (고객 데이터/공정 맞춤)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {kpis.map((kpi, index) => (
              <div 
                key={index}
                className={`p-5 rounded-xl bg-card border border-border fade-in-up stagger-5 opacity-0`}
              >
                <h4 className="font-semibold text-primary mb-3">{kpi.category}</h4>
                <ul className="space-y-2">
                  {kpi.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Wrench className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 max-w-4xl fade-in-up stagger-5 opacity-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">PolarPulse</h3>
              <p className="text-sm text-muted-foreground">Factory Intelligence Platform</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:gritgiver@polarpulse.ai" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                gritgiver@polarpulse.ai
              </a>
              <span className="flex items-center gap-2 text-sm text-foreground">
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
