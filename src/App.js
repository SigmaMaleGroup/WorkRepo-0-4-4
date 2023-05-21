import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Interests from './components/interests';
import Banner from './components/banner';
import Money from './components/money'; // Убедитесь, что вы импортируете Money компонент

function App() {
  const [showInterests, setShowInterests] = useState(false);
  const [showMoney, setShowMoney] = useState(false); // Добавьте новое состояние

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

  const handleShowMoney = () => { // Эта функция будет менять состояние showMoney
    setShowMoney(true);
  };

  if (showInterests) {
    return <Interests />;
  }

  if (showMoney) { // Если showMoney = true, показываем только Money компонент
    return <Money />;
  }

  return (
    <div className="m-0 p-0 ">
      <Header onLogoClick={handleLogoClick} />
      <Banner />
      {/* <Nav onButtonClick={handleButtonClick} /> */}
      <Main onShowMoney={handleShowMoney} /> {/* Прокидываем функцию в Main компонент */}
      <Footer />
    </div>
  );
}

export default App;