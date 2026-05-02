import { useState, useRef, useEffect } from "react";
import { Bot, X, ArrowUp, Loader2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok || !resp.body) {
    const errData = await resp.json().catch(() => ({}));
    onError(errData.error || "Something went wrong. Please try again.");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buffer.indexOf("\n")) !== -1) {
      let line = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { onDone(); return; }
      try {
        const parsed = JSON.parse(json);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch { /* partial */ }
    }
  }
  onDone();
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hey! Want to see how AI can automate your business?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  // Auto-popup after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setShowPulse(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    let assistantText = "";
    const updateAssistant = (chunk: string) => {
      assistantText += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length > newMessages.length) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantText } : m));
        }
        return [...prev.slice(0, newMessages.length), { role: "assistant", content: assistantText }];
      });
    };

    await streamChat({
      messages: newMessages,
      onDelta: updateAssistant,
      onDone: () => setLoading(false),
      onError: (msg) => {
        setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
        setLoading(false);
      },
    });
  };

  return (
    <>
      {/* Floating launcher */}
      {!open && (
        <button
          onClick={() => { setOpen(true); setShowPulse(false); }}
          aria-label="Open chat"
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] border border-white/10 bg-[linear-gradient(to_bottom,#222,#0a0a0a)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.15)]"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            <Bot className="w-4 h-4" strokeWidth={1.75} />
            {showPulse && (
              <span className="absolute inset-0 rounded-full animate-ping bg-white/20" />
            )}
          </span>
          <span className="text-xs font-medium tracking-wider uppercase">Ask AI</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[calc(100vh-4rem)] flex flex-col rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-white/10 bg-[linear-gradient(to_bottom,#1a1a1a,#0a0a0a)] animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-[linear-gradient(to_bottom,#262626,#141414)]">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" strokeWidth={1.75} />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#1a1a1a]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium text-white tracking-tight">Workomate AI</span>
                <span className="text-[10px] text-white/50 tracking-wider uppercase">Online · Replies instantly</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white/60 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-white text-black rounded-2xl rounded-br-md shadow-sm"
                      : "bg-white/[0.06] text-white/90 border border-white/10 rounded-2xl rounded-bl-md"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm prose-invert max-w-none [&>p]:m-0 [&_a]:text-white [&_a]:underline [&_strong]:text-white">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-white/[0.06] border border-white/10 px-3.5 py-2.5 rounded-2xl rounded-bl-md">
                  <Loader2 className="w-4 h-4 animate-spin text-white/60" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-[#0d0d0d]">
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-white/25 transition-colors"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI automation…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-colors"
              >
                <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </form>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-white/30 tracking-wider uppercase">
              <Sparkles className="w-2.5 h-2.5" /> Powered by Workomate
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
