import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays, Trophy, BookHeart, Users2 } from "lucide-react";

export function Activities() {
  const activities = [
    {
      title: "Quran Memorization Competitions",
      icon: <Trophy className="w-12 h-12 mb-4 text-secondary" />,
      description: "Annual competitions to encourage and reward students in their memorization journey."
    },
    {
      title: "Cultural Festivals",
      icon: <Users2 className="w-12 h-12 mb-4 text-secondary" />,
      description: "Celebrating Islamic heritage, art, and traditions with the broader community."
    },
    {
      title: "Field Trips",
      icon: <CalendarDays className="w-12 h-12 mb-4 text-secondary" />,
      description: "Educational visits to local Islamic centers, museums, and historical exhibitions."
    },
    {
      title: "Student Projects",
      icon: <BookHeart className="w-12 h-12 mb-4 text-secondary" />,
      description: "Showcasing student research, calligraphy art, and collaborative presentations."
    }
  ];

  return (
    <section id="activities" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Student Life</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Activities & Engagement
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond the classroom, we foster a vibrant community where students can apply their knowledge and build lasting connections.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <CardContent className="flex flex-col items-center text-center p-8 h-full justify-center">
                        <div className="p-4 bg-primary/5 rounded-full mb-4">
                          {activity.icon}
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3">{activity.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {activity.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/20 text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="border-primary/20 text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}