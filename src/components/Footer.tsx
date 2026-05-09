import { Link } from 'react-router-dom';
import { Twitter, Youtube, Github, Mail, AlertTriangle } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#002B5B] text-white/80 border-t border-[#D4AF37]/20 mt-auto">
      {/* Risk Warning Banner */}
      <div className="bg-[#D4AF37]/10 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-start sm:items-center gap-4 text-[#D4AF37]">
          <AlertTriangle size={24} className="flex-shrink-0" />
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            <strong className="font-bold">HIGH RISK WARNING:</strong> Forex trading carries substantial risk of loss and is not suitable for all investors. 
            Aethelgard FX provides education only, not financial advice.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div>
              <Logo className="w-10 h-10 mb-4" lightText={true} />
              <p className="text-sm leading-relaxed max-w-sm text-white/60">
                A structured, open-access forex education system. No accounts. No noise. Pure knowledge.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h4 className="text-sm font-bold text-white mb-2">Weekly Market Digest</h4>
              <p className="text-xs text-white/60 mb-4">Get top setups (no account needed, just alerts).</p>
              <div className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input id="newsletter-email" type="email" placeholder="Email address" className="bg-[#F9F7F2]/10 border border-[#F9F7F2]/20 rounded-lg px-4 py-2 w-full text-sm text-[#F9F7F2] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]" />
                <button className="bg-[#D4AF37] text-[#002B5B] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#B8860B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#002B5B] focus-visible:ring-[#D4AF37]">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" aria-label="Aethelgard FX on Twitter" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DA1F2]"><Twitter size={18} aria-hidden="true" /></a>
              <a href="#" aria-label="Aethelgard FX on YouTube" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000]"><Youtube size={18} aria-hidden="true" /></a>
              <a href="#" aria-label="Aethelgard FX on GitHub" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><Github size={18} aria-hidden="true" /></a>
            </div>
            
            <div className="pt-4">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-3">Funding Progress (Monthly)</div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden mb-2">
                <div className="bg-[#D4AF37] h-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-white/60">85% of monthly server costs covered by donors</p>
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-3 lg:grid lg:grid-cols-3">
            {/* Learn & Tools */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6 block">LEARN</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/courses" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Course Categories</Link>
                  <Link to="/glossary" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Forex Glossary</Link>
                  <Link to="/legal?tab=faq" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">FAQ</Link>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6 block">TOOLS</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/lab" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">All Calculators</Link>
                  <Link to="/lab" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Trading Simulator</Link>
                </div>
              </div>
            </div>

            {/* Community & legal */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6 block">COMMUNITY</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/community" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Web Forum</Link>
                  <Link to="/community" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Discord Server</Link>
                  <Link to="/support" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Contact Us</Link>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6 block">DONATE</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/support" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Funding Progress</Link>
                  <Link to="/support" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Methods (Crypto, Ko-fi)</Link>
                  <Link to="/support" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Donor Wall</Link>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-6 block">LEGAL</h3>
              <div className="flex flex-col gap-4">
                <Link to="/legal?tab=terms" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Terms of Use</Link>
                <Link to="/legal?tab=privacy" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Privacy Policy</Link>
                <Link to="/legal?tab=disclaimer" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Risk Disclaimer</Link>
                <Link to="/legal?tab=accessibility" className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Accessibility Statement</Link>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <Link to="/brokers" className="text-sm hover:text-white transition-colors font-bold text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded p-1">Featured Brokers</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <p className="text-xs text-white/50">
            © 2026 DATAFOGSTUDIOS. All rights reserved. · Education only — not financial advice
          </p>
          
          <div className="flex gap-6 text-xs text-white/50 items-center">
            <Link to="/legal?tab=accessibility" className="hover:text-white transition-colors flex items-center gap-2 border border-white/10 px-2 py-1 rounded">
               <span aria-hidden="true">♿</span> WCAG 2.1 AA
            </Link>
            <Link to="/legal?tab=terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/legal?tab=privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal?tab=disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
