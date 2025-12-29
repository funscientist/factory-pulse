import { SlideLayout } from "./SlideLayout";
import { Brain, Search, TrendingUp, Settings2, Shield, CheckCircle2 } from "lucide-react";

export function SlideLLMEngine() {
  const features = [
    {
      icon: Search,
      title: "불량 원인 자동 랭킹",
      description: "공정/설비/레시피/유틸 조건과의 상관관계 분석",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "공정 비효율/병목 탐지",
      description: "셋업 타임, 대기, 재작업 패턴 식별",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Settings2,
      title: "최적 셋업 추천",
      description: "다품종 소량 생산용 '유사 조건 검색 + 최적 셋업'",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const strategies = [
    "통계/규칙 기반 분석으로 빠른 시작",
    "검색(RAG) 기반 유사 사례 매칭",
    "경량 모델 조합으로 정확도 확보",
    "데이터 축적에 따른 모델 고도화"
  ];

  return (
    <SlideLayout slideNumber={8} totalSlides={12} category="Product">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Layer 2: AI Analytics</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            LLM Insight Engine
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">
            오프라인 제약을 전제로 "정확도 확보 방식"을 설계합니다
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl">
          {/* Analysis features */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2 fade-in-up stagger-3">
              <Brain className="w-5 h-5 text-primary" />
              분석 기능
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 4}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${feature.color} shrink-0`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offline accuracy strategy */}
          <div className="fade-in-up stagger-5">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              오프라인 정확도 확보 전략
            </h3>
            <div className="p-5 rounded-xl bg-card shadow-card">
              <p className="text-sm text-muted-foreground mb-4">
                초기에는 대규모 학습 의존을 줄이고, 다음 조합으로 "식별 가능" 영역부터 확장:
              </p>
              <ul className="space-y-3">
                {strategies.map((strategy, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    {strategy}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  데이터가 쌓일수록 <span className="text-primary font-semibold">라인/제품군별 모델 고도화</span> 진행
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
