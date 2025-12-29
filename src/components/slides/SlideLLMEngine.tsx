import { SlideLayout } from "./SlideLayout";
import { Shield, Server, Key, FileCheck, Users, Eye, Lock, CheckCircle2 } from "lucide-react";

export function SlideLLMEngine() {
  const securityItems = [
    {
      icon: Server,
      title: "원천 데이터",
      description: "온프렘 저장/처리 (기본)"
    },
    {
      icon: FileCheck,
      title: "외부 전송 (필요 시)",
      description: "비식별/집계/피처 데이터만 최소 전송"
    },
    {
      icon: Key,
      title: "암호화/키관리",
      description: "고객 KMS 옵션, 전송·저장 암호화"
    },
    {
      icon: Users,
      title: "접근통제",
      description: "RBAC, 계정 분리(운영/분석/승인), MFA 옵션"
    },
    {
      icon: Eye,
      title: "감사로그",
      description: "조회/다운로드/권한 변경/모델 실행 기록"
    },
    {
      icon: Lock,
      title: "모델 학습",
      description: "고객 데이터 기반 범용 학습 금지(기본), 사전 합의 시 예외"
    }
  ];

  return (
    <SlideLayout slideNumber={8} totalSlides={10} category="Security">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-4">
          <span className="badge badge-warning mb-2 fade-in-up">Security & Residency</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground fade-in-up stagger-1">
            보안·레지던시
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mb-4">
          {securityItems.map((item, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 2}`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shrink-0">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full on-prem option */}
        <div className="p-4 rounded-xl bg-secondary max-w-6xl fade-in-up stagger-7">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">완전 온프렘 옵션</h4>
              <p className="text-xs text-muted-foreground">클라우드 불가 정책 시 분석/LLM까지 내부망 구축 가능</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
