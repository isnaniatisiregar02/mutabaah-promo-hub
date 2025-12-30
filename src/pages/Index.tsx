import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MUTABAAHKU - Aplikasi Mutabaah Hafalan Al-Quran Digital</title>
        <meta 
          name="description" 
          content="Pantau progress hafalan Al-Quran dengan mudah. Aplikasi digital untuk mencatat dan memantau hafalan. Cocok untuk pribadi, halaqah, atau pesantren. Harga promo Rp29.000." 
        />
        <meta name="keywords" content="mutabaah, hafalan quran, tahfidz, aplikasi hafalan, quran digital" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
