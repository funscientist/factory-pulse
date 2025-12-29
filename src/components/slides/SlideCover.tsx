import { SlideLayout } from "./SlideLayout";
import { Target, Shield, Clock, TrendingDown } from "lucide-react";

export function SlideCover() {
  return (
    <SlideLayout slideNumber={1} totalSlides={10} variant="hero">
      <div className="flex flex-col justify-center h-full">
        {/* Main headline */}
        <div className="max-w-5xl">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              PolarPulse x Baron Tech 맞춤형 제안서
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in-up stagger-1">
            Secure Decision Intelligence로
            <br />
            <span className="text-white/90">생산 지능화: 수율 극대화 · 품질 안정화</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl fade-in-up stagger-2">
            망분리/온프렘 환경에서 원천 데이터 외부 반출 없이 분석·인사이트 제공
          </p>

          {/* Key features */}
          <div className="grid grid-cols-2 gap-4 max-w-4xl mb-6">
            {[
              {
                icon: Target,
                title: "목표 KPI",
                desc: "불량 PPM↓ · 재작업률↓ · Cpk↑ · 조건편차↓ · LOT 추적 리드타임↓"
              },
              {
                icon: Clock,
                title: "PoC 6주",
                desc: "\"불량 조기경보 + 원인 후보 랭킹\" 정량 성과 검증"
              },
              {
                icon: Shield,
                title: "보안 아키텍처",
                desc: "원천 데이터 온프렘 고정, 비식별/집계 데이터만 전송"
              },
              {
                icon: TrendingDown,
                title: "Zero-Impact 수집",
                desc: "생산 시스템과 분리된 읽기 전용 수집"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all fade-in-up stagger-${index + 3}`}
              >
                <div className="p-2 rounded-lg bg-white/20">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">{item.title}</p>
                  <p className="text-xs text-white/70 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
