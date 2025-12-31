import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { trackAddToCart } from "@/lib/fbPixel";

const CHECKOUT_URL = "https://hafalquran.myscalev.com/cekoutpage-mutabaah?discount_code=DISKON70";

const handleCheckoutClick = () => {
  trackAddToCart();
};

const PricingSection = () => {
  const features = [
    "Panduan penggunaan aplikasi",
    "Akses fitur penuh",
    "Support aplikasi sampai bisa log in",
    "Gratis Update",
    "Data aman menggunakan local storage masing-masing",
  ];

  // Set target date to 1 day 23 hours 59 minutes 59 seconds from now
  const promoEndDate = new Date();
  promoEndDate.setDate(promoEndDate.getDate() + 1);
  promoEndDate.setHours(promoEndDate.getHours() + 23);
  promoEndDate.setMinutes(promoEndDate.getMinutes() + 59);
  promoEndDate.setSeconds(promoEndDate.getSeconds() + 59);

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sage-300/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Harga Spesial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investasi Terbaik untuk{" "}
            <span className="text-gradient">Perjalanan Hafalan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dapatkan harga spesial untuk 10 orang pertama
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Promo Berakhir Dalam
              </span>
            </div>
            <CountdownTimer targetDate={promoEndDate} />
            <p className="text-sm text-muted-foreground mt-4">
              Jangan sampai ketinggalan harga spesial ini!
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative glass-card rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Early Bird Badge - Centered at top */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-400/20 border border-gold-400/30">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-sm font-bold text-gold-500">EARLY BIRD</span>
              </div>
            </div>

            {/* Plan Name */}
            <h3 className="text-xl font-bold text-foreground mb-2 text-center">Akses Premium Selamanya</h3>
            <p className="text-muted-foreground mb-6">Bayar sekali, gunakan selamanya</p>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-foreground">Rp29.000</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="line-through">Rp99.000</span>
                <span className="ml-2 text-primary font-semibold">Hemat 70%</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                * Harga naik bertahap setelah 10 orang pertama
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="w-full" asChild>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCheckoutClick}>
                Dapatkan Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            {/* Guarantee */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              🔒 Garansi kamu pasti bisa akses aplikasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
