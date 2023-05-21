import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Interests from './components/interests';

function App() {
  const [showInterests, setShowInterests] = useState(false);

  useEffect(() => {
    setShowInterests(localStorage.getItem('showInterests') === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem('showInterests', showInterests);
  }, [showInterests]);

  const handleButtonClick = () => {
    setShowInterests(true);
  };

  const handleLogoClick = () => {
    setShowInterests(false);
  };

  if (showInterests) {
    return <Interests />;
  }

  return (
    <div className="m-0 p-0">
      <Header onLogoClick={handleLogoClick} />
      <Nav onButtonClick={handleButtonClick} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;