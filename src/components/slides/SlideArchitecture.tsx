import { SlideLayout } from "./SlideLayout";
import { Server, Cloud, CheckCircle2, XCircle, Shield } from "lucide-react";

export function SlideArchitecture() {
  const options = [
    {
      title: "옵션 1: 완전 오프라인",
      subtitle: "On-Prem",
      icon: Server,
      config: "DB + 분석(LLM) 서버 모두 내부 구축",
      pros: ["최고 수준 보안 (외부망 차단)", "데이터 외부 유출 원천 차단"],
      cons: ["성능/정확도 한계 가능", "원격 지원 어려움"],
      recommended: "원청 정책이 '완전 차단'일 때"
    },
    {
      title: "옵션 2: 하이브리드",
      subtitle: "Semi-Online",
      icon: Cloud,
      config: "DB는 내부, 분석은 클라우드 수행 (승인 필요)",
      pros: ["성능/확장성 우수", "원격 유지보수/보정 용이"],
      cons: ["보안 승인 필요", "고객 우려 관리 필요"],
      recommended: "정책상 '제한적 연계'가 가능할 때"
    }
  ];

  return (
    <SlideLayout slideNumber={10} totalSlides={12} category="Architecture">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Architecture Options
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            아키텍처 선택지
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl fade-in-up stagger-2 opacity-0">
            오프라인 제약을 충족하는 2가지 배포 옵션
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
          {options.map((option, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all fade-in-up stagger-${index + 3} opacity-0`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-foreground mb-4 p-3 rounded-lg bg-muted/30">
                {option.config}
              </p>

              <div className="space-y-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">장점</p>
                  <ul className="space-y-1.5">
                    {option.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">단점</p>
                  <ul className="space-y-1.5">
                    {option.cons.map((con, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <XCircle className="w-4 h-4 text-destructive shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary font-medium">권장 상황:</span> {option.recommended}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security note */}
        <div className="mt-8 p-4 rounded-xl bg-card/50 border border-border max-w-6xl fade-in-up stagger-5 opacity-0">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              OT 환경 보안은 <span className="text-foreground font-medium">네트워크 분리/세그멘테이션</span> 등 
              아키텍처 기반 통제가 핵심 권고사항입니다. — NIST Publications
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
