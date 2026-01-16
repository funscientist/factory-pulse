import { SlideLayout } from "./SlideLayout";

export function SlideIceberg() {
  return (
    <SlideLayout slideNumber={4} totalSlides={10} category="Problem">
      <div className="flex flex-col justify-center h-full">
        <div className="mb-8">
          <span className="inline-flex gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-base font-semibold shadow-md mb-4 fade-in-up">
            Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground fade-in-up stagger-1">
            재무 조직의 비효율성은 <span className="text-primary">'암묵지'</span>에 있습니다
          </h2>
        </div>

        {/* Iceberg Diagram */}
        <div className="relative flex justify-center items-end h-[480px] fade-in-up stagger-2">
          {/* Water Line */}
          <div className="absolute top-[140px] left-0 right-0 z-10">
            <div className="h-1 bg-gradient-to-r from-cyan-400/20 via-cyan-500 to-cyan-400/20" />
            <svg className="w-full h-6 mt-[-2px]" viewBox="0 0 1200 24" preserveAspectRatio="none">
              <path 
                d="M0,12 Q50,4 100,12 T200,12 T300,12 T400,12 T500,12 T600,12 T700,12 T800,12 T900,12 T1000,12 T1100,12 T1200,12" 
                fill="none" 
                stroke="rgba(6, 182, 212, 0.5)" 
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Iceberg Shape */}
          <div className="relative w-full max-w-3xl">
            {/* Above Water (Visible) */}
            <div className="relative">
              <svg viewBox="0 0 400 120" className="w-full h-auto">
                <polygon 
                  points="200,0 280,110 120,110" 
                  fill="url(#icebergTop)" 
                  stroke="rgba(100, 116, 139, 0.3)"
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient id="icebergTop" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(241, 245, 249)" />
                    <stop offset="100%" stopColor="rgb(203, 213, 225)" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Surface Cost Label */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-lg font-bold text-slate-700">표면적 비용</span>
              </div>

              {/* Right Annotation */}
              <div className="absolute top-8 right-[-180px] w-48 flex items-center gap-2">
                <div className="w-12 h-px bg-slate-400" />
                <p className="text-sm text-foreground">
                  자회사가 늘어날수록 <span className="text-red-500 font-semibold">선형적으로 인건비 증가 부담</span>
                </p>
              </div>
            </div>

            {/* Below Water (Hidden) */}
            <div className="relative mt-[-10px]">
              <svg viewBox="0 0 400 280" className="w-full h-auto">
                <polygon 
                  points="120,0 280,0 340,260 200,280 60,260" 
                  fill="url(#icebergBottom)" 
                  stroke="rgba(71, 85, 105, 0.4)"
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient id="icebergBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(203, 213, 225)" />
                    <stop offset="50%" stopColor="rgb(148, 163, 184)" />
                    <stop offset="100%" stopColor="rgb(100, 116, 139)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Left Label */}
              <div className="absolute top-16 left-[-120px] text-right w-32">
                <p className="text-base font-bold text-foreground">보이지 않는 비용:</p>
                <p className="text-base font-bold text-primary">암묵지 의존</p>
              </div>

              {/* Hidden Cost Items */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[320px] space-y-5">
                <div className="text-center">
                  <p className="text-sm text-slate-700">
                    <span className="font-bold">• 데이터 파편화:</span> 월마감 시 과거 데이터와<br />
                    증빙 찾기위해 <span className="text-red-500 font-semibold">막대한 시간 소모</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-700">
                    <span className="font-bold">• 수기 작업 의존:</span> 재무예측 시 데이터 기반이<br />
                    아닌 담당자의 <span className="text-red-500 font-semibold">수기 계산에 의존</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-700">
                    <span className="font-bold">• 감사 병목:</span> 외부 감사 기간마다 반복되는<br />
                    <span className="text-red-500 font-semibold">수기 증빙 확인 및 설명</span>의 비효율성
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
