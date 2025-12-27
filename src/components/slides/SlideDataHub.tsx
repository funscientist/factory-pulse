import { SlideLayout } from "./SlideLayout";
import { Database, Server, FileSpreadsheet, CheckCircle2, AlertCircle } from "lucide-react";

export function SlideDataHub() {
  const components = [
    {
      title: "Edge Collector",
      items: ["설비/센서 데이터", "로그 수집", "실시간 스트리밍"]
    },
    {
      title: "내부 DB/데이터레이크",
      items: ["표준화된 저장소", "시계열 데이터", "히스토리 관리"]
    },
    {
      title: "표준 스키마",
      items: ["설비/공정 ID 체계", "레시피/LOT 매핑", "품질측정/유틸리티"]
    }
  ];

  return (
    <SlideLayout slideNumber={7} totalSlides={12} category="Product">
      <div className="flex flex-col justify-center h-full min-h-[80vh]">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 fade-in-up opacity-0">
            Layer 1: Data Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground fade-in-up stagger-1 opacity-0">
            Offline Data Hub
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl fade-in-up stagger-2 opacity-0">
            1단계 통합 수집 인프라가 프로젝트의 핵심입니다
          </p>
        </div>

        {/* Why section */}
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 max-w-4xl mb-8 fade-in-up stagger-3 opacity-0">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">왜 1단계가 데이터 통합인가?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                고객사 현황상 <span className="text-primary font-medium">"수집은 되어도 연결/표준화가 안 됨"</span>이 병목입니다.
                PoC 성공의 70%가 여기서 결정됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-8">
          {components.map((comp, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl bg-card border border-border fade-in-up stagger-${index + 4} opacity-0`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  {index === 0 && <Server className="w-5 h-5 text-primary" />}
                  {index === 1 && <Database className="w-5 h-5 text-primary" />}
                  {index === 2 && <FileSpreadsheet className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="font-semibold text-foreground">{comp.title}</h3>
              </div>
              <ul className="space-y-2">
                {comp.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick start option */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-dashed border-border max-w-5xl fade-in-up stagger-5 opacity-0">
          <FileSpreadsheet className="w-5 h-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">(옵션)</span> 파일 기반 적재(Excel/CSV)로 빠른 MVP 시작 가능
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
