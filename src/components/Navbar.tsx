import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookAudit: () => void;
}

const Navbar = ({ onBookAudit }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-card/80 backdrop-blur-xl border-b border-border shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <svg className="w-10 h-auto text-foreground drop-shadow-sm" viewBox="0 0 100 60" fill="currentColor">
            <path d="M5 5 h20 l12.5 35 l10 -25 l10 25 l12.5 -35 h20 l-25 50 h-15 l-10 -25 l-10 25 h-15 z" />
          </svg>
          <span className="text-xl font-medium tracking-tight text-foreground">Workomate</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {["Services", "How It Works", "Case Studies", "Partners", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onBookAudit} className="btn-skeu-primary hidden md:flex items-center gap-2">
            Book a Free Audit
          </button>
          <button
            className="lg:hidden p-2 text-foreground bg-card rounded-lg shadow-sm border border-border"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
          {["Services", "How It Works", "Case Studies", "Partners", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <button onClick={() => { onBookAudit(); setMobileOpen(false); }} className="btn-skeu-primary w-full text-center">
            Book a Free Audit
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
