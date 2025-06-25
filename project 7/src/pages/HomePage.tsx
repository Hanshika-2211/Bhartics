import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCars from '../components/FeaturedCars';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
    </div>
  );
};

export default HomePage;