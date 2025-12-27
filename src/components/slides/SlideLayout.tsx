import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
  category?: string;
}

export function SlideLayout({ children, slideNumber, totalSlides, category }: SlideLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <span className="text-primary font-bold text-xl tracking-tight">PolarPulse</span>
            {category && (
              <>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground text-sm">{category}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm">
              {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-8 md:px-16 lg:px-24 pb-8">
          {children}
        </main>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </div>
  );
}
