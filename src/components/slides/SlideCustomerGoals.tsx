import { SlideLayout } from "./SlideLayout";
import { AlertTriangle, Clock, FileCheck, BarChart3 } from "lucide-react";

export function SlideCustomerGoals() {
  const objectives = [
    {
      icon: AlertTriangle,
      title: "① 조기 위협 징후 식별",
      description: "분산된 로그/이벤트를 상관분석하여 조기 경보",
      detail: "오탐(Noise) 줄이고 우선순위 자동 정렬",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "② 사고 대응 속도 개선 (MTTR↓)",
      description: "사건 타임라인·증거·권고 조치를 자동 생성",
      detail: "티켓/플레이북 기반 대응 실행 추적",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: FileCheck,
      title: "③ 컴플라이언스/감사 준비 자동화",
      description: "정책/접근/변경/감사 로그를 근거로 증빙 패키지 자동 구성",
      detail: "규제 대응 리포트 표준화 (내부/외부 감사)",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: BarChart3,
      title: "④ CISO·경영진 의사결정 대시보드",
      description: "핵심 리스크 지표(KRI) / 노출자산 / 대응현황을 한 화면에",
      detail: '"무엇을 먼저 막고, 어디에 투자할지" 근거 제공 (CSF 2.0 관점 정렬)',
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <SlideLayout slideNumber={2} totalSlides={9} category="Executive Summary">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-md mb-3 fade-in-up">
            Customer Objectives
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">주요 해결 과제 및 목표</h2>
          <p className="mt-2 text-lg text-primary font-semibold fade-in-up stagger-2">
            보안 데이터를 '리스크 감소'와 '감사 대응력'으로 전환합니다
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-6xl">
          {objectives.map((item, index) => (
            <div 
              key={index} 
              className={`group p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 3}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <p className="text-xs text-muted-foreground/80 mt-1">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
