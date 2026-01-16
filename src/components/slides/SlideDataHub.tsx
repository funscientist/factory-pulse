import { SlideLayout } from "./SlideLayout";
import { Server, Cloud, Shield } from "lucide-react";

export function SlideDataHub() {
  const onPremItems = [
    "로그/이벤트 수집(Collector) & 내부 Data Lake",
    "정책 엔진(마스킹/허용목록/전송 통제) + 감사 로그",
    "키 관리(KMS/HSM), 접근통제(RBAC/ABAC), 암호화"
  ];

  const cloudItems = [
    "LLM/분석 서비스(전용 VPC/Private Endpoint)",
    "모델 레지스트리/모니터링(드리프트, 재학습)",
    "대시보드 서비스(권한 기반)"
  ];

  return (
    <SlideLayout slideNumber={7} totalSlides={10} category="Architecture">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-6">
          <span className="inline-flex gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base font-semibold shadow-md mb-4 fade-in-up">
            Hybrid Reference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground fade-in-up stagger-1">단일 아키텍처: Hybrid Reference</h2>
          <p className="mt-3 text-lg text-muted-foreground fade-in-up stagger-2">
            원칙: 원천 데이터는 내부에 고정, 분석 레이어만 통제된 하이브리드로 구성
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          {/* On-Prem */}
          <div className="p-6 rounded-xl bg-card shadow-card fade-in-up stagger-3">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">On-Prem</h3>
                <p className="text-sm text-muted-foreground">망분리/내부 구역</p>
              </div>
            </div>
            <ul className="space-y-3">
              {onPremItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud */}
          <div className="p-6 rounded-xl bg-card shadow-card fade-in-up stagger-4">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Cloud</h3>
                <p className="text-sm text-muted-foreground">승인된 연결 구역 | 옵션</p>
              </div>
            </div>
            <ul className="space-y-3">
              {cloudItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zero Trust message */}
        <div className="p-5 rounded-xl bg-secondary fade-in-up stagger-5">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-foreground">Zero Trust 적용</h4>
              <p className="text-sm text-muted-foreground">"경계 기반이 아니라 사용자·자산·세션 중심으로 통제" (ZTA)</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
