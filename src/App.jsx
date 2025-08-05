import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingSpinner from './components/LoadingSpinner';

function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // reduced from 1000 to 500ms
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {isLoading ? <LoadingSpinner /> : children}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Router basename="/dvpportfolio">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><SkillsPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
              <Route path="/education" element={<PageWrapper><EducationPage /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><ExperiencePage /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><HomePage /></PageWrapper>} />
            </Routes>
          </main>
          <WhatsAppButton />
        </Router>
      </div>
    </div>
  );
}

export default App;
