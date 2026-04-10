import { Linkedin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 bg-card">
    <div className="max-w-6xl mx-auto flex flex-col items-start">
      <Link to="/" className="flex items-center gap-2 mb-6 sm:mb-8 text-foreground">
        <img src={logo} alt="Workomate" className="w-7 h-auto" />
        <span className="text-lg sm:text-xl font-medium tracking-tight">Workomate</span>
      </Link>

      <h4 className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4">Follow Us On</h4>
      <div className="flex gap-3">
        {[
          { icon: Linkedin, hover: "hover:text-blue-600" },
          { icon: Youtube, hover: "hover:text-red-600" },
          { icon: Twitter, hover: "hover:text-blue-400" },
        ].map(({ icon: Icon, hover }, i) => (
          <a key={i} href="#" className={`skeu-social ${hover}`}>
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
