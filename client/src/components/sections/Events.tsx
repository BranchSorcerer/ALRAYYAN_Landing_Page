import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export function Events() {
  const upcomingEvents = [
    {
      title: "Spring Open House",
      date: "March 22, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Al Rayyan Main Campus",
      type: "Community"
    },
    {
      title: "Ramadan Prep Workshop",
      date: "April 5, 2026",
      time: "after Dhuhr prayer",
      location: "Online via Zoom",
      type: "Workshop"
    },
    {
      title: "Annual Quran Competition",
      date: "May 15, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Islamic Center Auditorium",
      type: "Competition"
    }
  ];

  return (
    <section id="events" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-2 border-white/20" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full border border-white/20" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-4 border-white/10" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Calendar</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">
              Upcoming Events
            </h2>
            <p className="text-white/80 text-lg">
              Join us for our upcoming community gatherings, workshops, and important academic dates.
            </p>
          </div>
          <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-primary w-fit">
            View Full Calendar
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary">{event.date.split(' ')[1].replace(',','')}</div>
                    <div className="text-sm font-medium uppercase tracking-wider text-white/80">{event.date.split(' ')[0]}</div>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-white/80">
                    <Clock className="w-4 h-4 mr-3 text-secondary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <MapPin className="w-4 h-4 mr-3 text-secondary" />
                    {event.location}
                  </div>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold">
                  RSVP / Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}