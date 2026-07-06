import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/automisebiz/", icon: Instagram, hover: "hover:text-pink-600" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/automisebiz/", icon: Linkedin, hover: "hover:text-blue-600" },
  { label: "Email", href: "mailto:hello@automisebiz.com", icon: Mail, hover: "hover:text-accent" },
];

const Footer = () => (
  <footer className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 bg-card">
    <div className="max-w-6xl mx-auto flex flex-col items-start">
      <Link to="/" className="flex items-center gap-2 mb-6 sm:mb-8 text-foreground">
        <img src={logo} alt="automisebiz" className="w-7 h-auto" />
        <span className="text-lg sm:text-xl font-normal tracking-tight lowercase">automisebiz</span>
      </Link>

      <h4 className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4">Follow Us On</h4>
      <div className="flex gap-3">
        {socials.map(({ icon: Icon, hover, href, label }) => (
          <a key={label} href={href} aria-label={label} className={`skeu-social ${hover}`} target="_blank" rel="noreferrer">
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
