import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path="/dvpportfolio" element={<HomePage />} />
              <Route path="/dvpportfolio/about" element={<AboutPage />} />
              <Route path="/dvpportfolio/projects" element={<ProjectsPage />} />
              <Route path="/dvpportfolio/skills" element={<SkillsPage />} />
              <Route path="/dvpportfolio/contact" element={<ContactPage />} />
              <Route path="/dvpportfolio/education" element={<EducationPage />} />
              <Route path="/dvpportfolio/experience" element={<ExperiencePage />} />
            </Routes>
          </main>
          <WhatsAppButton />
        </Router>
      </div>
    </div>
  );
}

export default App;
