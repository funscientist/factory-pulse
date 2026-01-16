import { SlideLayout } from "./SlideLayout";
import { HelpCircle, Database, Brain, LayoutDashboard } from "lucide-react";

export function SlideWhyNow() {
  const steps = [
    {
      number: "01",
      icon: HelpCircle,
      title: "요구사항/질문 추출",
      items: [
        '"지금 가장 위험한 이벤트는?" "왜 위험한가?" "무엇을 해야 하나?"',
        "정책/감사/운영 질문을 표준 쿼리 템플릿으로 변환"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Database,
      title: "데이터 수집·정규화",
      items: [
        "SIEM/EDR/NDR/Cloud/SaaS/IAM/취약점/자산 연동",
        "공통 스키마로 정리(시간/사용자/자산/행위/정책 기준)"
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      number: "03",
      icon: Brain,
      title: "Evidence 분석 + LLM 리포팅",
      items: [
        "사건 클러스터링, 우선순위, 영향범위(Blast radius) 추정",
        "사건 요약/타임라인/권고조치/근거를 자동 생성"
      ],
      color: "from-emerald-500 to-green-500"
    },
    {
      number: "04",
      icon: LayoutDashboard,
      title: "대시보드 + 실행 추적",
      items: [
        "티켓/런북 연계, 조치 완료/재발 방지 검증",
        "동일 유형 사건의 재발 방지 룰/정책으로 환류(Closed loop)"
      ],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const dashboards = [
    {
      title: "CISO Dashboard",
      items: "KRI/통제 커버리지/감사 증빙/리스크 추세"
    },
    {
      title: "SOC Dashboard", 
      items: "실시간 경보/우선순위/증거팩/조치 체크리스트"
    }
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={9} category="End-to-End Workflow">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white text-base font-semibold shadow-md mb-4 fade-in-up">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground fade-in-up stagger-1">4단계 자동화 흐름</h2>
        </div>

        <div className="grid grid-cols-4 gap-5 mb-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                  {step.number}
                </span>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color}`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">{step.title}</h3>
              <ul className="space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dashboard output */}
        <div className="grid grid-cols-2 gap-5 fade-in-up stagger-6">
          {dashboards.map((dashboard, index) => (
            <div key={index} className="p-5 rounded-xl bg-secondary">
              <h4 className="text-base font-semibold text-foreground mb-2">{dashboard.title}</h4>
              <p className="text-sm text-muted-foreground">{dashboard.items}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
