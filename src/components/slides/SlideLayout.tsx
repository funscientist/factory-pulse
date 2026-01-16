import { ReactNode } from "react";
interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
  category?: string;
  variant?: "default" | "hero" | "gray" | "cta";
}
export function SlideLayout({
  children,
  slideNumber,
  totalSlides,
  category,
  variant = "default"
}: SlideLayoutProps) {
  const getBgClass = () => {
    switch (variant) {
      case "hero":
        return "hero-gradient text-white";
      case "gray":
        return "bg-secondary";
      case "cta":
        return "hero-gradient text-white";
      default:
        return "bg-background";
    }
  };
  const getTextClass = () => {
    return variant === "hero" || variant === "cta" ? "text-white/80" : "text-muted-foreground";
  };
  return <div className="w-full h-screen flex items-center justify-center bg-muted p-4">
      <div className={`relative w-full max-w-[1600px] aspect-video overflow-hidden rounded-lg shadow-xl ${getBgClass()}`}>
        {/* Background pattern for hero */}
        {(variant === "hero" || variant === "cta") && <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 40%)`
      }} />}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3">
              <span className={`font-bold text-lg tracking-tight ${variant === "hero" || variant === "cta" ? "text-white" : "text-primary"}`}>PolarPulse</span>
              {category && <>
                  <span className={getTextClass()}>/</span>
                  <span className={`text-xs ${getTextClass()}`}>{category}</span>
                </>}
            </div>
            <div className="flex items-center gap-3">
              
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 px-12 pb-6 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>;
}