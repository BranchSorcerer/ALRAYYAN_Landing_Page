import quranImg from "@/assets/quran.png";
import { BookOpen, Heart, Globe, Award } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
      title: "Comprehensive Education",
      description: "Integrating spiritual, cultural, and linguistic development into daily life."
    },
    {
      icon: <Heart className="w-6 h-6 text-secondary" />,
      title: "Learner-Centered",
      description: "Encouraging personal discovery, analytical thinking, and meaningful engagement."
    },
    {
      icon: <Globe className="w-6 h-6 text-secondary" />,
      title: "Inclusive Community",
      description: "Serving Arabs, Muslims, and non-Arabs seeking a deeper understanding."
    },
    {
      icon: <Award className="w-6 h-6 text-secondary" />,
      title: "Excellence",
      description: "Led by educators with 25+ years of experience in Arabic & Islamic Studies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transform scale-105 origin-center transition-transform duration-500 hover:rotate-0" />
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-border/50">
              <img 
                src={quranImg} 
                alt="Open Quran" 
                className="w-full h-auto aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <blockquote className="text-white font-serif italic text-lg border-l-4 border-secondary pl-4">
                  "Read! In the name of your Lord who created"
                </blockquote>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Al Rayyan Academy is dedicated to providing comprehensive education in Arabic language and Islamic studies, fostering a deep understanding of Islamic heritage while preparing students for the modern world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We serve first- and second-generation Arabs and Muslims in the United States—especially Gen Z and Gen Alpha—as well as non-Arabs and non-Muslims seeking a deeper understanding of the Arabic language and Islamic tradition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 bg-primary/5 p-2 rounded-lg h-fit">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-8">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">Leadership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Founded by <strong className="text-foreground">Ms. Reham Beshr</strong>, an educator of Egyptian origin with 25 years of experience teaching Arabic and Islamic Studies across the Greater Atlanta Area. Certified in Al-Qaida Al-Nooraniya and holding a degree in Early Childhood Education.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}