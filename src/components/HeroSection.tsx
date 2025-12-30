import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const CHECKOUT_URL = "https://hafalquran.myscalev.com/cekoutpage-mutabaah";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-pattern">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Promo 10 Orang Pertama</span>
            </div>

            {/* Arabic Title */}
            <h2 className="font-arabic text-3xl md:text-4xl text-primary mb-4 animate-fade-up delay-100">
              مُتَابَعَةُ حِفْظِ القُرْآنِ
            </h2>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-200">
              Pantau Hafalan
              <span className="block text-gradient">Al-Quran Anda</span>
              Dengan Mudah
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              Aplikasi digital untuk mencatat dan memantau progress hafalan Al-Quran. 
              Cocok untuk pribadi, halaqah, atau pesantren.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#features">
                  Lihat Fitur
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 animate-fade-up delay-500">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Pengguna Aktif</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">30</div>
                <div className="text-sm text-muted-foreground">Juz Tersedia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative glow-effect">
              <img
                src={appMockup}
                alt="MUTABAAHKU App Interface"
                className="w-72 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
