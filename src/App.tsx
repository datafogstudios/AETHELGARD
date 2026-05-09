/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useGlobalShortcuts, ShortcutsHelpModal } from './hooks/useGlobalShortcuts';
import { Home } from './pages/Home';
import { StartLearning } from './pages/StartLearning';
import { Courses } from './pages/Courses';
import { Academy } from './pages/Academy';
import { TradingLab } from './pages/TradingLab';
import { Glossary } from './pages/Glossary';
import { Resources } from './pages/Resources';
import { Community } from './pages/Community';
import { Lesson } from './pages/Lesson';
import { Support } from './pages/Support';
import { About } from './pages/About';
import { Legal } from './pages/Legal';
import { Brokers } from './pages/Brokers';
import { SearchProvider } from './contexts/SearchContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainApp() {
  useGlobalShortcuts();
  return (
    <div className="min-h-screen selection:bg-[#002B5B] selection:text-[#F9F7F2] bg-[#F9F7F2] transition-colors duration-300 relative">
      <a href="#main-content" className="skip-link">
          Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main" className="outline-none" tabIndex={-1}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<StartLearning />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<Academy />} />
            <Route path="/lab" element={<TradingLab />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/lesson/:lessonId" element={<Lesson />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/brokers" element={<Brokers />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <SearchModal />
      <ShortcutsHelpModal />
    </div>
  );
}

import { AuthProvider } from './lib/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <MainApp />
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}
