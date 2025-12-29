import { SlideLayout } from "./SlideLayout";
import { Target, Gauge, Clock, LineChart, Mail, Phone } from "lucide-react";

export function SlideExpectedResults() {
  const kpiFramework = [
    {
      category: "품질",
      icon: Target,
      metrics: ["불량률/재작업률", "중간공정 조기 탐지 리드타임"],
      color: "border-blue-500",
      iconColor: "from-blue-500 to-cyan-500"
    },
    {
      category: "생산성",
      icon: Gauge,
      metrics: ["OEE", "셋업 시간", "다운타임", "병목 공정 리드타임"],
      color: "border-violet-500",
      iconColor: "from-violet-500 to-purple-500"
    },
    {
      category: "운영",
      icon: Clock,
      metrics: ["경보 조사 시간(MTTR)", "원인 규명 정확도", "재발 방지율"],
      color: "border-emerald-500",
      iconColor: "from-emerald-500 to-green-500"
    },
    {
      category: "경영",
      icon: LineChart,
      metrics: ["의사결정 리드타임", "주간/월간 보고 자동화", "납기 준수율"],
      color: "border-amber-500",
      iconColor: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <SlideLayout slideNumber={12} totalSlides={12} category="KPI Framework">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-success mb-3 fade-in-up">Success Metrics</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            성공 지표(KPI) 프레임
          </h2>
        </div>

        {/* KPI Framework */}
        <div className="grid grid-cols-4 gap-5 max-w-6xl mb-6">
          {kpiFramework.map((kpi, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card border-l-4 ${kpi.color} fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${kpi.iconColor}`}>
                  <kpi.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-base font-semibold text-foreground">{kpi.category}</h4>
              </div>
              <ul className="space-y-2">
                {kpi.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Contact */}
        <div className="p-5 rounded-xl hero-gradient max-w-6xl fade-in-up stagger-5">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h3 className="text-xl text-white font-bold mb-1">Polarpulse x BaronTech</h3>
              <p className="text-sm text-white/80">Secure AIOps for Manufacturing</p>
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
