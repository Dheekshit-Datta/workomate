import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalModal = ({ isOpen, onClose }: CalModalProps) => {
  const [visible, setVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) setVisible(false);
  };

  if (!visible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-md transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={`relative w-[95%] max-w-4xl h-[85vh] bg-card rounded-2xl overflow-hidden shadow-2xl border border-border transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"}`}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full text-foreground hover:bg-muted transition-all shadow-sm border border-border">
          <X className="w-5 h-5" />
        </button>
        <iframe
          ref={iframeRef}
          src={isOpen ? "https://cal.com/dheekshit/30-min-meeting" : undefined}
          className="w-full h-full border-0"
          title="Book a Call"
        />
      </div>
    </div>
  );
};

export default CalModal;
