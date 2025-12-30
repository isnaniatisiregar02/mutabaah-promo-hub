import { BookOpen, BarChart3, Users, Bell, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Pencatatan Hafalan",
    description: "Catat progress hafalan per ayat, surah, atau juz dengan mudah dan terorganisir.",
  },
  {
    icon: BarChart3,
    title: "Statistik Progress",
    description: "Pantau perkembangan hafalan dengan grafik dan laporan yang informatif.",
  },
  {
    icon: Users,
    title: "Manajemen Santri",
    description: "Kelola banyak santri dalam satu dashboard untuk halaqah atau pesantren.",
  },
  {
    icon: Bell,
    title: "Pengingat Muroja'ah",
    description: "Notifikasi otomatis untuk jadwal muroja'ah agar hafalan tetap terjaga.",
  },
  {
    icon: Shield,
    title: "Data Aman",
    description: "Data hafalan tersimpan aman di cloud dan dapat diakses kapan saja.",
  },
  {
    icon: Smartphone,
    title: "Akses Multi-Device",
    description: "Gunakan di smartphone, tablet, atau laptop dengan tampilan responsif.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Fitur Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Semua yang Anda Butuhkan untuk{" "}
            <span className="text-gradient">Menghafal Al-Quran</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fitur lengkap untuk memudahkan perjalanan menghafal Al-Quran Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-soft transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
