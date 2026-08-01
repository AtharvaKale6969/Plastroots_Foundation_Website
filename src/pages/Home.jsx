import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import MissionCards from '../components/MissionCards';
import WeCareAbout from '../components/WeCareAbout';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import ImpactMap from '../components/ImpactMap';
import HomeGallery from '../components/HomeGallery';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="home-container" style={{ overflowX: 'hidden' }}>
      <Helmet>
        <title>Plastroots Foundation - Turning Waste Into Opportunity</title>
        <meta name="description" content="Working at the absolute grassroots of India to manage waste and transform it into valuable resources for communities." />
      </Helmet>
      <Hero />
      <InfoSection />
      <MissionCards />
      <WeCareAbout />
      <Testimonials />
      <Partners />
      <ImpactMap />
      <HomeGallery />
    </div>
  );
};

export default Home;
