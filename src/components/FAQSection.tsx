import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah aplikasi MUTABAAHKU bisa diakses Offline tanpa internet?",
    answer: "Bisa, namun untuk fitur tadabbur yang menggunakan AI harus menggunakan internet ya.",
  },
  {
    question: "Apakah boleh aplikasi ini saya share gratis ke teman-teman?",
    answer: "Maaf, tidak boleh membagikan aplikasi ini secara gratis kepada siapapun, karena lisensinya personal untuk pakai sendiri.",
  },
  {
    question: "Apakah bisa digunakan oleh pemula?",
    answer: "Ya, sangat bisa. Aplikasi ini dibuat khusus untuk memudahkan penghafal Quran.",
  },
  {
    question: "Apakah aplikasi ini bisa dibuka lebih dari satu device?",
    answer: "Mohon maaf aplikasi ini hanya bisa digunakan di satu device (HP, laptop atau tab) silahkan pilih sendiri nyamannya digunakan dimana.",
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
