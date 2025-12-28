import { SlideLayout } from "./SlideLayout";
import { TrendingUp, Shield, ArrowUpRight } from "lucide-react";

export function SlideWhyNow() {
  const stats = [
    { value: "30-50%", label: "다운타임 감소", source: "Industry 4.0" },
    { value: "10-30%", label: "처리량 증가", source: "McKinsey" },
    { value: "15-30%", label: "노동생산성 개선", source: "제조 벤치마크" }
  ];

  return (
    <SlideLayout slideNumber={4} totalSlides={12} category="Market">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-4">
          <span className="badge badge-info mb-2 fade-in-up text-xs">Market Timing</span>
          <h2 className="text-xl md:text-2xl font-bold text-foreground fade-in-up stagger-1">
            Why Now
          </h2>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl fade-in-up stagger-2">
            정량 근거로 보는 "팩토리 성과" + "리스크"
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 mb-6 max-w-4xl">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card group cursor-pointer fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start justify-between mb-1">
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Two columns: Performance + Security */}
        <div className="grid grid-cols-2 gap-4 max-w-4xl">
          <div className="p-4 rounded-xl bg-card shadow-card fade-in-up stagger-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Industry 4.0 성과 사례</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              다운타임 30–50% 감소, throughput 10–30% 증가, 노동생산성 15–30% 개선
            </p>
            <p className="mt-2 text-[10px] text-muted-foreground italic">
              — McKinsey & Company
            </p>
          </div>

          <div className="p-4 rounded-xl bg-card shadow-card fade-in-up stagger-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">OT 보안 필수화</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              제조 현장은 OT 보안·망분리·세그멘테이션 기반 설계가 필수 전제
            </p>
            <p className="mt-2 text-[10px] text-muted-foreground italic">
              — NIST Publications
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
