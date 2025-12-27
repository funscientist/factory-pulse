import { SlideLayout } from "./SlideLayout";
import { TrendingUp, Shield, ArrowUpRight, Clock } from "lucide-react";

export function SlideWhyNow() {
  const stats = [
    { value: "30-50%", label: "다운타임 감소", source: "Industry 4.0" },
    { value: "10-30%", label: "처리량 증가", source: "McKinsey" },
    { value: "15-30%", label: "노동생산성 개선", source: "제조 벤치마크" }
  ];

  return (
    <SlideLayout slideNumber={4} totalSlides={12} category="Market">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Market Timing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            Why Now
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl fade-in-up stagger-2 opacity-0">
            정량 근거로 보는 "팩토리 성과" + "리스크"
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-xl bg-card border border-border group hover:border-primary/30 transition-all fade-in-up stagger-${index + 3} opacity-0`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">{stat.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two columns: Performance + Security */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-6 rounded-xl bg-card border border-border fade-in-up stagger-5 opacity-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Industry 4.0 성과 사례</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              다운타임 30–50% 감소, throughput 10–30% 증가, 노동생산성 15–30% 개선 등이 
              글로벌 제조 현장에서 반복 보고되고 있습니다.
            </p>
            <p className="mt-3 text-xs text-muted-foreground italic">
              — McKinsey & Company
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border fade-in-up stagger-5 opacity-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">OT 보안 필수화</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              제조 현장은 사이버/운영 리스크가 커져 OT 보안·망분리·세그멘테이션 기반 설계가 
              필수 전제가 되었습니다.
            </p>
            <p className="mt-3 text-xs text-muted-foreground italic">
              — NIST Publications
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
