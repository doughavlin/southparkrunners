import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Events from '../components/sections/Events';
import Routes from '../components/sections/Routes';
import Workouts from '../components/sections/Workouts';
// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" id="top"/>
      <Events id="events" />
      <Routes invertMobile topDivider imageFill className="illustration-section-02" id="routes"/>
      <Workouts topDivider id="workouts" />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;