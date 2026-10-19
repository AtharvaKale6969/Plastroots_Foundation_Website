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
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
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
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/gallery/school-awareness" element={<Gallery category="School Awareness Programs" />} />
            <Route path="/gallery/college-seminars" element={<Gallery category="College Seminars & Workshops" />} />
            <Route path="/gallery/rallies" element={<Gallery category="Rallies & Street Campaigns" />} />
            <Route path="/gallery/hostel-outreach" element={<Gallery category="Hostel & Institutional Outreach" />} />
            <Route path="/gallery/cleanliness-drives" element={<Gallery category="Cleanliness Drives" />} />
            <Route path="/gallery/festival-campaigns" element={<Gallery category="Festival Awareness Campaigns" />} />
            <Route path="/gallery/community-outreach" element={<Gallery category="Community & Village Outreach" />} />
            <Route path="/gallery/stalls-exhibitions" element={<Gallery category="Awareness Stalls & Exhibitions" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
