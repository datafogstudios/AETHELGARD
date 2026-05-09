import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';

type LegalDoc = 'terms' | 'privacy' | 'disclaimer' | 'accessibility' | 'faq';

export function Legal() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Parse the query parameter to set the initial active document
  const queryParams = new URLSearchParams(location.search);
  let requestedTab = queryParams.get('tab') as LegalDoc;
  if (!['terms', 'privacy', 'disclaimer', 'accessibility', 'faq'].includes(requestedTab)) {
    requestedTab = 'terms';
  }
  const initialDoc = requestedTab;
  
  const [activeDoc, setActiveDoc] = useState<LegalDoc>(initialDoc);

  // Update the URL when the active document changes
  useEffect(() => {
    navigate(`/legal?tab=${activeDoc}`, { replace: true });
  }, [activeDoc, navigate]);

  // Update activeDoc if URL changes externally (e.g., clicking footer links)
  useEffect(() => {
    const tab = queryParams.get('tab') as LegalDoc;
    if (tab && ['terms', 'privacy', 'disclaimer', 'accessibility', 'faq'].includes(tab)) {
      setActiveDoc(tab);
    }
  }, [location.search]);
  
  const docs: Record<LegalDoc, { title: string, content: React.ReactNode }> = {
    terms: {
      title: 'Terms of Use',
      content: (
        <div className="space-y-6">
          <p className="text-[#002B5B]/60">Last updated: April 2026</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">1. Acceptance of Terms</h3>
          <p>By accessing and using Aethelgard FX, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">2. Educational Purposes Only</h3>
          <p>All content provided on Aethelgard FX is for educational and informational purposes only. Nothing on this site constitutes financial, investment, or trading advice.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">3. Risk Disclosure</h3>
          <p>Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">4. Intellectual Property</h3>
          <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights.</p>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <p className="text-[#002B5B]/60">Last updated: April 2026</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">1. Information We Collect</h3>
          <p>Aethelgard FX is designed to be accessible without user accounts. We do not collect personal identifying information unless you voluntarily provide it (e.g., by subscribing to a newsletter).</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">2. Local Storage</h3>
          <p>We use your browser's local storage to save your progress, theme preferences, and lesson notes. This data remains on your device and is not transmitted to our servers.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">3. Analytics</h3>
          <p>We may use basic, anonymized analytics to understand how our website is used and to improve our educational content.</p>
        </div>
      )
    },
    disclaimer: {
      title: 'Risk Disclaimer',
      content: (
        <div className="space-y-6">
          <p className="text-[#002B5B]/60">Last updated: April 2026</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">High Risk Warning</h3>
          <p>Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite.</p>
          <p>The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if you have any doubts.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">No Financial Advice</h3>
          <p>Aethelgard FX provides educational content only. We are not financial advisors. Any opinions, news, research, analyses, prices, or other information contained on this website is provided as general market commentary and does not constitute investment advice.</p>
        </div>
      )
    },
    accessibility: {
      title: 'Accessibility Statement',
      content: (
        <div className="space-y-6">
          <p className="text-[#002B5B]/60">Last updated: April 2026</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">Commitment to Accessibility</h3>
          <p>Aethelgard FX is committed to making learning accessible to all users. We strive to adhere strictly to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">Accessibility Features</h3>
          <p>Our platform includes semantic ARIA landmarks, complete keyboard navigability across all carousels, modals, and courses, consistent focus states, scalable text rendering without loss of function (up to 200%), and a text-based, minimal layout prioritizing perceivability and operability constraints.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">Feedback Methods</h3>
          <p>We welcome your feedback on the accessibility of Aethelgard FX. If you encounter any barriers, please contact our support team providing specific URLs and details of your experience. Known issues will be documented and evaluated in our deployment pipelines.</p>
        </div>
      )
    },
    faq: {
      title: 'Frequently Asked Questions',
      content: (
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-[#002B5B]">Is Aethelgard FX really free?</h3>
          <p>Yes. All of our core curriculum, interactive tools, and community features are completely free to use without requiring an account.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">Do I need an account to track my progress?</h3>
          <p>No. We use privacy-first local storage. Your progress is saved automatically within your browser. If you clear your browser data, your progress will be reset.</p>
          <h3 className="font-serif text-2xl text-[#002B5B]">Is this site giving me trading advice?</h3>
          <p>No. We are an educational platform. We provide simulated environments and educational frameworks for learning market mechanics, but do not provide financial advice or sell trading signals.</p>
        </div>
      )
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F9F7F2]"
    >
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-48">
        <div className="flex flex-col md:flex-row gap-24 lg:gap-32">
          <aside className="md:w-80 flex-shrink-0">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#002B5B]/5 border border-[#002B5B]/10 rounded-full mb-10">
                <div className="w-2 h-2 rounded-full bg-[#002B5B]" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">Legal Center</span>
              </div>
              <ul className="space-y-4">
                {(['terms', 'privacy', 'disclaimer', 'accessibility', 'faq'] as LegalDoc[]).map((doc) => (
                  <li 
                    key={doc}
                    onClick={() => setActiveDoc(doc)}
                    className={`px-8 py-5 rounded-3xl cursor-pointer transition-all text-sm font-bold tracking-tight ${
                      activeDoc === doc 
                        ? 'bg-[#002B5B] text-white shadow-2xl shadow-[#002B5B]/20' 
                        : 'bg-white text-gray-500 hover:text-[#002B5B] border border-gray-200 hover:border-[#002B5B]/40'
                    }`}
                  >
                    {docs[doc].title}
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-8 bg-white border border-gray-200 rounded-[2.5rem] shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">Compliance Notice</p>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  These documents govern your use of Aethelgard FX. Please read them carefully to understand your rights and responsibilities.
                </p>
              </div>
            </div>
          </aside>
          <main className="flex-grow max-w-3xl">
            <motion.div
              key={activeDoc}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-[#002B5B] leading-tight">
                {docs[activeDoc].title}
              </h1>
              <div className="text-xl text-gray-600 leading-relaxed font-medium space-y-12">
                {docs[activeDoc].content}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}
