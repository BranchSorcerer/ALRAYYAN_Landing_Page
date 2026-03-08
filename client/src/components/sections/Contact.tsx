import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate Formspree integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Have questions about our programs or enrollment? We'd love to hear from you. Reach out to us using the form or the contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href="mailto:alrayyanacademyofga@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    alrayyanacademyofga@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <a href="tel:+16787968244" className="text-muted-foreground hover:text-primary transition-colors">
                    +1-678-796-8244
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Greater Atlanta Area<br />
                    Georgia, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-muted/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-muted/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[150px] bg-muted/50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}