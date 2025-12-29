import { SlideLayout } from "./SlideLayout";
import { TrendingUp, Zap, Clock, CheckCircle2 } from "lucide-react";

export function SlideWhyNow() {
  const benefits = [
    "다운타임 감소",
    "생산성/Throughput 개선",
    "품질 이슈 조기 발견",
    "의사결정 리드타임 단축"
  ];

  return (
    <SlideLayout slideNumber={4} totalSlides={12} category="Market">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="badge badge-info mb-3 fade-in-up">Market Timing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            Why Now
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-3xl fade-in-up stagger-2">
            제조 성과는 <span className="text-primary font-semibold">'조기 탐지 → 조치'</span>에서 발생합니다
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          {/* Left: Key insight */}
          <div className="space-y-5 fade-in-up stagger-3">
            <div className="p-6 rounded-xl bg-card shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Industry 4.0 도입 효과</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Industry 4.0/스마트 제조 도입 효과로 다운타임 감소, 생산성/throughput 개선 등이 
                <span className="text-foreground font-medium"> 반복적으로 보고</span>됩니다.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground italic">
                — Microsoft Learn, McKinsey & Company
              </p>
            </div>
          </div>

          {/* Right: AIOps importance */}
          <div className="space-y-5 fade-in-up stagger-4">
            <div className="p-6 rounded-xl bg-card shadow-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">AIOps가 성과를 좌우</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "분석을 빨리 하는 것"보다, <span className="text-primary font-semibold">조기 탐지 → 조치 가능 형태</span>
                (워크플로/대시보드/플레이북)로 만드는 AIOps가 성과를 좌우합니다.
              </p>
              
              <div className="p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">핵심 포인트</span>
                </div>
              <p className="text-sm text-muted-foreground">
                  분석 속도 &lt; <span className="text-foreground font-medium">조치 가능한 인사이트</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
