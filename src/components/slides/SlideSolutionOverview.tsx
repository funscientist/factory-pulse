import { SlideLayout } from "./SlideLayout";
import { Database, Brain, LayoutDashboard } from "lucide-react";

export function SlideSolutionOverview() {
  const layers = [
    {
      icon: Database,
      layer: "Layer 1",
      title: "On-Prem Security Data Hub",
      items: [
        "로그/이벤트/자산/취약점/IAM 데이터 통합·정규화",
        "내부 DB/Data Lake 저장, 보관주기/마스킹 정책 적용",
        "원천 데이터 외부 반출 없음(기본 원칙)"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      layer: "Layer 2",
      title: "Evidence Engine + Secure LLM Assist",
      items: [
        "Evidence Engine: 상관분석/이상탐지/증거 그래프/우선순위 산정",
        "LLM Assist: 사건 요약·원인·권고조치 생성 (근거 링크/로그 포인트 포함)",
        "프롬프트/출력 정책 제어(민감정보 차단, 승인된 컨텍스트만 사용)"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: LayoutDashboard,
      layer: "Layer 3",
      title: "Dual Dashboard (CISO & SOC)",
      items: [
        "CISO/경영진: 리스크 Top, 노출자산, 통제 수준, 대응 KPI, 투자 우선순위",
        "SOC/실무: 실시간 알림, 사건 타임라인, 증거 묶음, 실행 체크리스트, 결과 트래킹"
      ],
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={10} category="Solution Architecture">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white text-base font-semibold shadow-md mb-4 fade-in-up">
            Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground fade-in-up stagger-1">솔루션 구조</h2>
          <p className="mt-3 text-lg text-muted-foreground fade-in-up stagger-2">
            3계층 아키텍처로 '보안'과 '분석'과 '감사추적'을 동시에 달성
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${layer.color} shadow-lg`}>
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{layer.layer}</span>
                  <h3 className="text-base font-semibold text-foreground">{layer.title}</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {layer.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="p-5 rounded-xl hero-gradient fade-in-up stagger-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-base font-medium">
              "툴을 추가하는 게 아니라, 보안 데이터 → 증거 → 대응 의사결정 체계를 구축합니다."
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
