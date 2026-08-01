import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Initiatives from './pages/Initiatives';
import FarmerWelfare from './pages/FarmerWelfare';
import IEC from './pages/IEC';
import WasteManagement from './pages/WasteManagement';
import HealthActivities from './pages/HealthActivities';
import EducationActivities from './pages/EducationActivities';
import WomenDevelopment from './pages/WomenDevelopment';
import ContactUs from './pages/ContactUs';
import Collaborate from './pages/Collaborate';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import CSRPatnership from './pages/CSRPatnership';
import CSRProjects from './pages/CSRProjects';
import CSRProjectBisleri from './pages/CSRProjectBisleri';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import './index.css';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('hasSeenSplash');
  });

  if (showSplash) {
    return <SplashScreen onComplete={() => {
      sessionStorage.setItem('hasSeenSplash', 'true');
      setShowSplash(false);
    }} />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/initiatives/farmer-stewardship" element={<FarmerWelfare />} />
            <Route path="/initiatives/iec" element={<IEC />} />
            <Route path="/initiatives/waste-management" element={<WasteManagement />} />
            <Route path="/initiatives/health-activities" element={<HealthActivities />} />
            <Route path="/initiatives/education-activities" element={<EducationActivities />} />
            <Route path="/initiatives/women-development" element={<WomenDevelopment />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/collaborate/volunteer" element={<Volunteer />} />
            <Route path="/collaborate/csr-partnership" element={<CSRPatnership />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/csr-projects" element={<CSRProjects />} />
            <Route path="/csr-projects/bisleri" element={<CSRProjectBisleri />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/project" element={<Gallery category="Project" />} />
            <Route path="/gallery/event" element={<Gallery category="Event" />} />
            <Route path="/gallery/college-drive" element={<Gallery category="College Drive" />} />
            <Route path="/gallery/campaign" element={<Gallery category="Campaign" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
