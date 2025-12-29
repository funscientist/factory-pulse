import { SlideLayout } from "./SlideLayout";
import { Shield, Server, Key, FileCheck, CheckCircle2 } from "lucide-react";

export function SlideLLMEngine() {
  const securityPrinciples = [
    {
      icon: Server,
      title: "원천 데이터 사내 고정",
      description: "로그/측정값은 절대 외부로 나가지 않음"
    },
    {
      icon: FileCheck,
      title: "피처/집계/마스킹 데이터만 전송",
      description: "정책 기반으로 가공된 데이터만 클라우드로"
    },
    {
      icon: Key,
      title: "허용 목록 + 감사 로그 + 키관리",
      description: "고객 관리 키 옵션 제공"
    }
  ];

  const references = [
    {
      source: "NIST Publications",
      content: "ICS/OT 환경은 성능·가용성·안전 요구가 높아 네트워크 분리/세그멘테이션 중심 아키텍처 권고"
    },
    {
      source: "Microsoft Azure",
      content: "하이브리드 구성에서는 데이터 레지던시/소버린 요구(저장 위치/접근 통제/암호화/키관리)가 중요"
    }
  ];

  return (
    <SlideLayout slideNumber={8} totalSlides={12} category="Security">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-4">
          <span className="badge badge-warning mb-2 fade-in-up">Security & Compliance</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground fade-in-up stagger-1">
            Polarpulse 보안 설계
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {/* Left: Security principles */}
          <div className="fade-in-up stagger-2">
            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              핵심 보안 원칙
            </h3>
            <div className="space-y-2">
              {securityPrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-xl bg-card shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shrink-0">
                      <principle.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold text-foreground mb-0.5">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary checklist */}
            <div className="mt-3 p-3 rounded-xl bg-secondary">
              <h4 className="text-sm font-semibold text-foreground mb-2">보안 체크리스트</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {[
                  "네트워크 분리/세그멘테이션",
                  "데이터 레지던시 준수",
                  "접근 통제 및 암호화",
                  "감사 로그 및 키 관리"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Industry references */}
          <div className="fade-in-up stagger-3">
            <h3 className="text-base font-semibold text-foreground mb-3">업계 권고 사항</h3>
            <div className="space-y-3">
              {references.map((ref, index) => (
                <div key={index} className="p-4 rounded-xl bg-card shadow-card">
                  <p className="text-base text-muted-foreground leading-relaxed mb-2">
                    "{ref.content}"
                  </p>
                  <p className="text-sm text-primary font-medium">— {ref.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
