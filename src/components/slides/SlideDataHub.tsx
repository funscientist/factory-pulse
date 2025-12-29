import { SlideLayout } from "./SlideLayout";
import { Database, Server, FileSpreadsheet, CheckCircle2, AlertCircle } from "lucide-react";

export function SlideDataHub() {
  const components = [
    {
      icon: Server,
      title: "Edge Collector",
      items: ["설비/센서 데이터", "로그 수집", "실시간 스트리밍"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "내부 DB/데이터레이크",
      items: ["표준화된 저장소", "시계열 데이터", "히스토리 관리"],
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: FileSpreadsheet,
      title: "표준 스키마",
      items: ["설비/공정 ID 체계", "레시피/LOT 매핑", "품질측정/유틸리티"],
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <SlideLayout slideNumber={7} totalSlides={12} category="Product" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Layer 1: Data Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            Offline Data Hub
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-2xl fade-in-up stagger-2">
            1단계 통합 수집 인프라가 프로젝트의 핵심입니다
          </p>
        </div>

        {/* Why section */}
        <div className="p-4 rounded-xl border-l-4 border-primary bg-blue-50 max-w-5xl mb-6 fade-in-up stagger-3">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">왜 1단계가 데이터 통합인가?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                고객사 현황상 <span className="text-primary font-semibold">"수집은 되어도 연결/표준화가 안 됨"</span>이 병목입니다.
                PoC 성공의 70%가 여기서 결정됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="grid grid-cols-3 gap-6 max-w-6xl mb-5">
          {components.map((comp, index) => (
            <div 
              key={index}
              className={`p-5 rounded-xl bg-card shadow-card fade-in-up stagger-${index + 4}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${comp.color}`}>
                  <comp.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{comp.title}</h3>
              </div>
              <ul className="space-y-2">
                {comp.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick start option */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-dashed border-border shadow-sm max-w-6xl fade-in-up stagger-5">
          <FileSpreadsheet className="w-5 h-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">(옵션)</span> 파일 기반 적재(Excel/CSV)로 빠른 MVP 시작 가능
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
