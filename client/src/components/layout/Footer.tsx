import { Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "@assets/Al-Rayyan_Logo1_1772937656876.jpg";
import patternBg from "@/assets/pattern-bg.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white relative pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover' }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5">
                <img src={logoImg} alt="Al Rayyan Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="font-serif text-2xl font-bold text-white">Al Rayyan</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Nurturing Excellence in Arabic Language and Islamic Studies. Rooted in Language. Guided by Faith.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-secondary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-secondary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-secondary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-serif">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/60 hover:text-secondary text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-secondary text-sm transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-white/60 hover:text-secondary text-sm transition-colors">Programs & Services</a></li>
              <li><a href="#activities" className="text-white/60 hover:text-secondary text-sm transition-colors">Student Activities</a></li>
              <li><a href="#events" className="text-white/60 hover:text-secondary text-sm transition-colors">Upcoming Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-serif">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Trailblazer Program</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Arabic Language</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Quran Memorization</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">Islamic Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white font-serif">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>alrayyanacademyofga@gmail.com</li>
              <li>+1-678-796-8244</li>
              <li>Greater Atlanta Area, GA, USA</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
          <p>© 2026 Al Rayyan Academy of GA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}