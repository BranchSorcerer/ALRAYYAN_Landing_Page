import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Activities } from "@/components/sections/Activities";
import { Events } from "@/components/sections/Events";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Activities />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}