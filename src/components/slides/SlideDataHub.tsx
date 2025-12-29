import { SlideLayout } from "./SlideLayout";
import { Server, Database, Cloud, Shield, ArrowRight } from "lucide-react";
export function SlideDataHub() {
  const onPremComponents = ["OT/설비 로그 수집 (Edge Collector)", "내부 DB/Data Lake (원천 데이터 저장)", "정제/피처 생성 (표준 스키마, LOT/설비ID/레시피)", "보안 게이트웨이 (전송 정책/마스킹/허용 목록/감사 로그)"];
  const cloudComponents = ["LLM/AI 분석 서비스 (원인추정/상관/추천)", "모델 레지스트리/모니터링 (성능 드리프트, 재학습)", "대시보드 서비스 (경영진/현장)"];
  return <SlideLayout slideNumber={7} totalSlides={12} category="Architecture" variant="gray">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-5">
          <span className="badge badge-info mb-3 fade-in-up">Hybrid Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">
            단일 아키텍처: Hybrid Reference
          </h2>
          <p className="mt-2 text-base text-muted-foreground max-w-3xl fade-in-up stagger-2">
            원칙: 원천 데이터는 사내에 고정, <span className="text-primary font-semibold">"분석 레이어만"</span> 승인형 하이브리드로 고성능 운영
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-6xl mb-5">
          {/* On-Prem */}
          <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">On-Prem</h3>
                <p className="text-xs text-muted-foreground">망분리 구역</p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {onPremComponents.map((item, index) => <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Database className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>)}
            </ul>
          </div>

          {/* Cloud */}
          <div className="p-5 rounded-xl bg-card shadow-card fade-in-up stagger-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Cloud</h3>
                <p className="text-xs text-muted-foreground">승인된 연결 구역</p>
              </div>
            </div>
            
            <ul className="space-y-2">
              {cloudComponents.map((item, index) => <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Cloud className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>)}
            </ul>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card shadow-card max-w-4xl mx-auto fade-in-up stagger-5">
          <div className="text-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 w-fit mx-auto mb-2">
              <Server className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-medium text-foreground">On-Prem</p>
            <p className="text-[10px] text-muted-foreground">원천 데이터 고정</p>
          </div>
          
          <div className="flex flex-col items-center">
            <ArrowRight className="w-8 h-8 text-primary" />
            <p className="text-[10px] text-muted-foreground mt-1">피처/집계/마스킹 데이터</p>
          </div>
          
          <div className="p-3 rounded-lg bg-secondary">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">보안 게이트웨이</span>
            </div>
          </div>
          
          <ArrowRight className="w-6 h-6 text-border" />
          
          <div className="text-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 w-fit mx-auto mb-2">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs font-medium text-foreground">Cloud</p>
            <p className="text-[10px] text-muted-foreground">AI 분석/대시보드</p>
          </div>
        </div>

        
      </div>
    </SlideLayout>;
}