
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { getGeminiChatResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am Amulya AI. How can I help you with your IT career goals today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const botResponse = await getGeminiChatResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gold text-[#001f3f] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-[#001f3f]"
        >
          <MessageSquare size={28} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] border border-gray-200 animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-[#001f3f] p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gold p-2 rounded-lg">
                <Bot size={20} className="text-[#001f3f]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-none">Amulya AI Assistant</h4>
                <p className="text-gold text-[10px] uppercase font-bold mt-1 tracking-widest">Always Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-[#001f3f] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
                  <Loader2 className="animate-spin text-gold w-4 h-4" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about courses, placements..."
              className="flex-grow px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button 
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-[#001f3f] text-gold p-2 rounded-full disabled:opacity-50 hover:scale-105 transition-transform"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
