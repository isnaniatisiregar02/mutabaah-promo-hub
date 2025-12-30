import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah MUTABAAHKU bisa digunakan offline?",
    answer: "Saat ini MUTABAAHKU membutuhkan koneksi internet untuk sinkronisasi data. Namun, kami sedang mengembangkan fitur offline untuk versi mendatang.",
  },
  {
    question: "Berapa banyak santri yang bisa dikelola?",
    answer: "Dengan akses premium, Anda bisa mengelola santri tanpa batas. Cocok untuk halaqah kecil hingga pesantren besar.",
  },
  {
    question: "Apakah data hafalan saya aman?",
    answer: "Ya, semua data disimpan dengan enkripsi di server cloud yang aman. Kami memprioritaskan keamanan dan privasi data Anda.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Pembayaran dapat dilakukan melalui transfer bank atau e-wallet. Setelah pembayaran dikonfirmasi, akses premium akan langsung aktif.",
  },
  {
    question: "Apakah ada garansi uang kembali?",
    answer: "Ya, kami memberikan garansi 7 hari uang kembali jika Anda tidak puas dengan layanan kami. Tanpa pertanyaan.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan <span className="text-gradient">Yang Sering Diajukan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban untuk pertanyaan umum tentang MUTABAAHKU
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
