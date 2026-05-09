import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { Send, LogIn, LogOut, ShieldAlert } from 'lucide-react';
import { db } from '../lib/firebase';
import { useAuth } from '../lib/AuthContext';

interface Message {
  id: string;
  text: string;
  userId: string;
  userName: string;
  createdAt: any;
}

export function ChatPlatform() {
  const { user, error, signInWithGoogle, logout } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only subscribe to messages if the user is authenticated.
    if (!user) {
      setMessages([]);
      return;
    }

    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      setMessages(msgs.reverse());
    }, (error) => {
       console.error("Firestore Error: ", error);
    });

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    try {
      await addDoc(collection(db, 'messages'), {
        text: messageText,
        userId: user.uid,
        userName: user.displayName || 'Trader',
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-[600px] relative">
      {/* Header */}
      <div className="bg-[#002B5B] text-white p-6 flex justify-between items-center z-10 shrink-0">
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight">Trader's Lounge</h3>
          <p className="text-[#F9F7F2]/80 text-xs uppercase tracking-widest font-bold mt-1">Live Discussion</p>
        </div>
        <div>
          {user ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 hover:bg-white/10 px-4 py-2 rounded-full transition-colors text-sm font-bold"
            >
              <LogOut size={16} /> Sign out
            </button>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="bg-[#D4AF37] text-[#002B5B] px-6 py-2 rounded-full font-bold text-sm tracking-wide hover:bg-[#b5952f] transition-colors flex items-center gap-2 shadow-lg"
            >
              <LogIn size={16} /> Sign in to Chat
            </button>
          )}
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-600 px-6 py-3 border-b border-red-100 flex items-center gap-2 text-sm">
          <ShieldAlert size={16} />
          {error}
        </div>
      )}

      {/* Messages Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 bg-[#F9F7F2] space-y-4"
      >
        {!user ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500 p-8 text-center bg-white/50 rounded-2xl border border-gray-200 border-dashed">
            <h4 className="font-bold text-lg mb-2 text-[#002B5B]">Join the conversation</h4>
            <p className="text-sm">Sign in to connect with other traders, share your insights, and ask questions.</p>
          </div>
        ) : (
          messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400 font-medium italic">
              Be the first to send a message...
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((msg, idx) => {
                const isMine = msg.userId === user.uid;
                const prevMsg = idx > 0 ? messages[idx - 1] : null;
                const isConsecutive = prevMsg && prevMsg.userId === msg.userId;

                return (
                  <div key={msg.id} className={`flex flex-col ${isMine ? 'items-end' : 'items-start'} ${isConsecutive ? 'mt-1' : 'mt-6'}`}>
                    {!isConsecutive && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 ml-1">
                        {isMine ? 'You' : msg.userName}
                      </span>
                    )}
                    <div className={`relative max-w-[80%] rounded-2xl px-5 py-3 ${
                      isMine 
                        ? 'bg-[#002B5B] text-white rounded-br-sm' 
                        : 'bg-white text-[#1A1A1A] border border-gray-200 shadow-sm rounded-bl-sm'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap word-break">{msg.text}</p>
                      <span className={`text-[10px] absolute bottom-1 ${isMine ? 'right-2 text-white/50' : 'right-2 text-gray-400'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      </span>
                    </div>
                    {!isConsecutive && (
                         <span className="text-[10px] text-gray-400 mt-1 opacity-60">
                           {formatTime(msg.createdAt)}
                         </span>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4 shrink-0">
        <form onSubmit={handleSendMessage} className="flex gap-4">
          <input
            type="text"
            value={newMessage}
            disabled={!user}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={user ? "Type a message..." : "Sign in to chat..."}
            className="flex-1 bg-[#F9F7F2] border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 transition-all disabled:opacity-50"
            maxLength={1000}
          />
          <button
            type="submit"
            disabled={!user || !newMessage.trim()}
            className="bg-[#002B5B] text-white p-3 rounded-full hover:bg-[#153e77] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:hover:shadow-md h-12 w-12 flex items-center justify-center shrink-0"
          >
            <Send size={18} className={newMessage.trim() && user ? 'ml-1' : ''} />
          </button>
        </form>
      </div>
    </div>
  );
}
