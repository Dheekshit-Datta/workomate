import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/nav-logo.png";

interface NavbarProps {
  onBookAudit: () => void;
}

const Navbar = ({ onBookAudit }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Case Studies", href: "/case-studies", isRoute: true },
    
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-card/40 backdrop-blur-xl border-b border-border/60 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
          <img src={logo} alt="automisebiz" className="h-8 w-auto sm:h-9" />
          <span className="text-lg sm:text-xl font-normal tracking-tight text-foreground lowercase">automisebiz</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link key={item.label} to={item.href} className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button onClick={onBookAudit} className="btn-skeu-primary hidden md:flex items-center gap-2 text-sm sm:text-base">
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
        <div className="lg:hidden bg-card/90 backdrop-blur-xl border-t border-border px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link key={item.label} to={item.href} className="text-base text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="text-base text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            )
          )}
          <button onClick={() => { onBookAudit(); setMobileOpen(false); }} className="btn-skeu-primary w-full text-center">
            Book a Free Audit
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
