import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
  category?: string;
  variant?: "default" | "hero" | "gray" | "cta";
}

export function SlideLayout({ children, slideNumber, totalSlides, category, variant = "default" }: SlideLayoutProps) {
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

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${getBgClass()}`}>
      {/* Background pattern for hero */}
      {(variant === "hero" || variant === "cta") && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
          <div className="flex items-center gap-4">
            <span className={`font-bold text-xl tracking-tight ${variant === "hero" || variant === "cta" ? "text-white" : "text-primary"}`}>
              PolarPulse
            </span>
            {category && (
              <>
                <span className={getTextClass()}>/</span>
                <span className={`text-sm ${getTextClass()}`}>{category}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-sm font-medium ${getTextClass()}`}>
              {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 md:px-12 lg:px-16 xl:px-24 pb-24">
          {children}
        </main>
      </div>
    </div>
  );
}
