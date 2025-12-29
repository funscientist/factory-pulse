import { SlideLayout } from "./SlideLayout";
import { Server, Database, Wifi, FileText, Package, CheckCircle2 } from "lucide-react";

export function SlideDataHub() {
  const integrationTargets = [
    { icon: Server, text: "설비/센서/로그" },
    { icon: Database, text: "검사/수율" },
    { icon: FileText, text: "레시피/조건" },
    { icon: Wifi, text: "MES/QMS" },
    { icon: Package, text: "원자재 LOT (ERP/자재)" }
  ];

  const integrationMethods = [
    "OPC-UA / Modbus / SECS-GEM",
    "DB Read-only / API / SFTP·파일 드랍"
  ];

  const operationPrinciples = [
    "생산 시스템과 독립 구성, 읽기 전용 수집",
    "PolarPulse 장애 발생 시에도 생산 라인 영향 0"
  ];

  return (
    <SlideLayout slideNumber={7} totalSlides={10} category="Integration" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Data Integration</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            연동 범위·운영 원칙
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl">
          {/* Left: Integration targets */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-2">
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                연동 대상 (최소 범위)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {integrationTargets.map((target, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <target.icon className="w-4 h-4 text-primary shrink-0" />
                    {target.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-3">
              <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-primary" />
                연동 방식 (환경별)
              </h3>
              <ul className="space-y-2">
                {integrationMethods.map((method, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Operation principles */}
          <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-4">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              운영 원칙
            </h3>
            <div className="space-y-4">
              {operationPrinciples.map((principle, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-foreground font-medium">{principle}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl hero-gradient">
              <p className="text-sm text-white font-medium text-center">
                Zero-Impact: 생산 시스템과 완전 분리
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
