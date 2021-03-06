import React, { useState } from 'react';
import './App.scss';
import HomeHeader from './components/HomeHeader/HomeHeader';
import HomeFooter from './components/HomeFooter/HomeFooter';
import HomeHero from './components/HomeHero/HomeHero';

function App() {
  const [isSpring, setIsSpring] = useState(true);

  return (
    <div className="App">
      <HomeHeader isSpring={isSpring} setIsSpring={setIsSpring}/>
      <HomeHero isSpring={isSpring} />
      <HomeFooter />
    </div>
  );
}

export default App;
