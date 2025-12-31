import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackAddToCart } from "@/lib/fbPixel";

const CHECKOUT_URL = "https://hafalquran.myscalev.com/cekoutpage-mutabaah?discount_code=DISKON60";

const handleCheckoutClick = () => {
  trackAddToCart();
};

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="font-arabic text-2xl md:text-3xl text-primary-foreground/80 mb-4">
          وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
          Mulai Perjalanan Hafalan Al-Quran Anda Hari Ini
        </h3>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Jangan tunda lagi. Ribuan orang sudah memulai. Saatnya giliran Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="xl" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-2xl shadow-elevated hover:-translate-y-1 transition-all"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCheckoutClick}>
              Daftar Sekarang - Rp39.000
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/60 mt-6">
          * Harga promo untuk 10 orang pertama saja
        </p>
      </div>
    </section>
  );
};

export default CTASection;
