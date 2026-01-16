import { SlideLayout } from "./SlideLayout";
import { Shield, Server, Key, FileCheck, Users, Eye, Lock, Network, Database, Workflow } from "lucide-react";

export function SlideLLMEngine() {
  const principles = [
    {
      icon: Server,
      title: "원천 데이터 사내 고정",
      description: "로그/이벤트/계정정보 외부 반출 최소화"
    },
    {
      icon: FileCheck,
      title: "정책 기반 전송 통제",
      description: "필요 시 비식별/요약/피처만 제한 전송"
    },
    {
      icon: Key,
      title: "허용목록 + 감사로그 + 키관리",
      description: "누가/언제/무엇을/왜 조회했는지 재현"
    }
  ];

  const llmControls = [
    "프롬프트/출력 DLP, 민감정보 Redaction",
    '사건 리포트에 "근거(로그 포인트)"를 강제 삽입 → 감사 추적성 강화',
    "모델 접근은 Zero Trust 원칙으로 최소권한 적용"
  ];

  const irItems = [
    "IR 단계/역할/커뮤니케이션을 표준 템플릿으로 내재화",
    "CSF 2.0의 Detect/Respond/Recover 정렬 지표 제공"
  ];

  const checklist = [
    { icon: Network, title: "네트워크 분리/세그멘테이션" },
    { icon: Lock, title: "접근 통제 & 암호화" },
    { icon: Database, title: "데이터 레지던시/보관주기" },
    { icon: Key, title: "감사 로그 & 키 관리" },
    { icon: Workflow, title: "사고대응 워크플로우/증거팩 자동화" },
    { icon: Eye, title: "모델 거버넌스(프롬프트/출력/권한)" }
  ];

  return (
    <SlideLayout slideNumber={8} totalSlides={10} category="Security & Compliance">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="inline-flex gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-base font-semibold shadow-md mb-3 fade-in-up">
            Security
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            PolarPulse 보안 설계
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-5">
          {/* Core Principles */}
          <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-2">
            <h3 className="text-base font-semibold text-foreground mb-4">핵심 보안 원칙</h3>
            <div className="space-y-4">
              {principles.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LLM Controls */}
          <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-3">
            <h3 className="text-base font-semibold text-foreground mb-4">LLM 사용을 위한 추가 통제</h3>
            <ul className="space-y-3">
              {llmControls.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IR Alignment */}
          <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-4">
            <h3 className="text-base font-semibold text-foreground mb-4">Incident Response 정렬</h3>
            <ul className="space-y-3">
              {irItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Security Checklist */}
        <div className="p-5 rounded-xl bg-secondary fade-in-up stagger-5">
          <h3 className="text-base font-semibold text-foreground mb-4">보안 체크리스트</h3>
          <div className="grid grid-cols-6 gap-4">
            {checklist.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center">
                <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
