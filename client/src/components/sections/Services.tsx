import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookA, BookOpenCheck, Users, GraduationCap, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <BookA className="w-8 h-8" />,
      title: "Arabic Language",
      description: "From absolute beginners to advanced literature. Focused on reading, writing, and conversational fluency."
    },
    {
      icon: <BookOpenCheck className="w-8 h-8" />,
      title: "Islamic Studies",
      description: "Comprehensive curriculum covering Quran recitation, Hadith, Fiqh, and core Islamic principles."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cultural Workshops",
      description: "Engaging sessions on Arabic calligraphy, Islamic history, and cultural heritage."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Offering both online and in-person classes to accommodate different learning styles and schedules."
    }
  ];

  return (
    <section id="programs" className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Programs</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Educational Offerings
          </h2>
          <p className="text-muted-foreground text-lg">
            Nurturing excellence through structured, engaging, and comprehensive programs designed for all ages.
          </p>
        </div>

        {/* Featured Program: Trailblazer */}
        <div className="mb-20">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="grid">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center max-w-4xl mx-auto w-full">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary w-fit mb-6 text-sm px-3 py-1">Featured Program</Badge>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Trailblazer Program
                </h3>
                <p className="text-white/80 text-lg mb-8">
                  Grow in Quran memorization and strengthen your reading skills through Al-Qaida Al-Noorania. Learn about Seerah and the pillars of Islam together in an encouraging community setting.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-secondary mb-3 border-b border-white/20 pb-2">Curriculum</h4>
                    <ul className="space-y-2">
                      {["AI-Quran Memorization", "Al-Qaida Al-Noorania", "Pillars of Islam", "Al-Seerah"].map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-white/90">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-secondary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-3 border-b border-white/20 pb-2">Details</h4>
                    <ul className="space-y-3 text-sm text-white/90">
                      <li><strong>Ages:</strong> 7–10, 11–16, Adults</li>
                      <li><strong>Duration:</strong> 9 weeks, 1.5 hours/week</li>
                      <li><strong>Tuition:</strong> $250 per student</li>
                      <li><strong>Schedule:</strong> 4 times/year (Fall & Spring)</li>
                    </ul>
                  </div>
                </div>
                
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold w-fit" asChild>
                  <a href="#contact">Register for Trailblazer</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* General Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-card hover:shadow-lg transition-all duration-300 border-border/50 group">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 p-0 group-hover:underline" asChild>
                  <a href="#contact">View Details &rarr;</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}