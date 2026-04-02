import { MessageSquare, Linkedin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="pt-16 pb-16 px-6 bg-card">
    <div className="max-w-6xl mx-auto flex flex-col items-start">
      <Link to="/" className="flex items-center gap-2 mb-8 text-foreground">
        <img src={logo} alt="Workomate" className="w-7 h-auto" />
        <span className="text-xl font-medium tracking-tight">Workomate</span>
      </Link>

      <div className="skeu-card p-5 mb-8 max-w-sm w-full">
        <div className="flex items-start gap-3 mb-4">
          <MessageSquare className="w-5 h-5 text-foreground mt-1" />
          <div>
            <h4 className="text-lg font-medium text-foreground tracking-tight">Let's work together</h4>
            <p className="text-sm text-muted-foreground mt-0.5 font-normal">Get answers and a customized quote</p>
          </div>
        </div>
        <button className="btn-skeu-secondary w-full text-xs">Submit RFP</button>
      </div>

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
