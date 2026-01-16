import { SlideLayout } from "./SlideLayout";
import { MessageCircle, Mail, Globe } from "lucide-react";

export function SlideQnA() {
  return (
    <SlideLayout slideNumber={10} totalSlides={10} variant="hero">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="max-w-4xl">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              PolarPulse AI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10 fade-in-up stagger-1">
            Q&A
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-14 max-w-3xl mx-auto fade-in-up stagger-2">
            경영진의 '보안 질문'이 회사의 '리스크 방어 전략'이 되는 미래,
            <br />
            PolarPulse와 함께 하십시오.
          </p>

          <div className="flex flex-col items-center gap-5 fade-in-up stagger-3">
            <div className="flex items-center gap-4 text-white/80 text-lg">
              <Mail className="w-6 h-6" />
              <span>contact@polarpulse.ai</span>
            </div>
            <div className="flex items-center gap-4 text-white/80 text-lg">
              <Globe className="w-6 h-6" />
              <a href="https://polarpulse.ai" className="hover:text-white transition-colors">
                https://polarpulse.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
