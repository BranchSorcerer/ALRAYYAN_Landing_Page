import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import patternBg from "@/assets/pattern-bg.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent z-10" />
        <img
          src={heroBg}
          alt="Islamic Architecture"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide">
              Enrollment open for Trailblazer Program
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Al Rayyan <span className="text-secondary">Academy</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Rooted in Language. Guided by Faith.<br />
            Nurturing Excellence in Arabic Language and Islamic Studies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <a
              href="#programs"
              className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center group"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-medium transition-all text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative pattern overlay at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none z-20"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      />
    </section>
  );
}