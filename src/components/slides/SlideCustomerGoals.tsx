import { SlideLayout } from "./SlideLayout";
import { Database, AlertTriangle, LineChart, Shield, ArrowRight } from "lucide-react";

export function SlideCustomerGoals() {
  const values = [
    {
      icon: Database,
      title: "현장 데이터 통합/정합",
      description: "설비·검사·레시피·LOT 데이터 Traceability 확보",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AlertTriangle,
      title: "이상 조기경보 & 원인 분석",
      description: "이상 조기경보, 원인 후보 Top-N, 조치·성과 추적",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: LineChart,
      title: "Zero-Impact 수집",
      description: "생산 시스템과 분리된 읽기 전용 수집",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Shield,
      title: "보안 원칙",
      description: "원천 데이터 온프렘 고정, 필요 시 비식별/집계만 전송",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <SlideLayout slideNumber={2} totalSlides={10} category="Value Proposition">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Core Value</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">핵심 가치</h2>
          <p className="mt-2 text-lg text-primary font-semibold fade-in-up stagger-2">
            현장 데이터 → 근거 기반 조치 → KPI 개선
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`group p-6 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} shadow-lg shrink-0`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-8 flex items-center justify-center gap-4 p-5 rounded-xl hero-gradient max-w-4xl mx-auto fade-in-up stagger-6">
          <span className="text-white font-medium">현장 데이터</span>
          <ArrowRight className="w-5 h-5 text-white/80" />
          <span className="text-white font-medium">근거 기반 조치</span>
          <ArrowRight className="w-5 h-5 text-white/80" />
          <span className="text-white font-bold">KPI 개선</span>
        </div>
      </div>
    </SlideLayout>
  );
}
