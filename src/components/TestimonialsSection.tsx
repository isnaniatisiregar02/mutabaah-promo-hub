import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Pengajar Tahfidz",
    content: "Sangat membantu dalam memantau progress santri. Sekarang saya bisa fokus mengajar tanpa repot mencatat manual.",
    rating: 5,
  },
  {
    name: "Siti Aisyah",
    role: "Ibu Rumah Tangga",
    content: "Anak-anak jadi lebih semangat menghafal karena bisa lihat progress mereka sendiri. Recommended!",
    rating: 5,
  },
  {
    name: "Muhammad Rizki",
    role: "Mahasiswa",
    content: "Aplikasi yang simpel tapi powerful. Cocok banget buat yang mau serius menghafal Al-Quran.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-gradient">Pengguna Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bergabunglah dengan ratusan pengguna yang sudah merasakan manfaatnya
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
