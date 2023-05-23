import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Interests from './components/interests';
import Banner from './components/banner';
import Plan from './components/money'; // Убедитесь, что вы импортируете Money компонент
import MainPage from './components/mainpage';

function App() {
  const [showInterests, setShowInterests] = useState(false);
  const [showMoney, setShowMoney] = useState(false); // Добавьте новое состояние
  const [showMainPage, setShowMainPage] = useState(false);

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

  const handleShowMainPage = () => {
    setShowMainPage(true);
  };

  if (showInterests) {
    return <Interests />;
  }

  if (showMoney) { // Если showMoney = true, показываем только Money компонент
    return <Plan />;
  }

  if (showMainPage) {
    return <MainPage />;
  }

  return (
    <div className="m-0 p-0 ">
      <Header onLogoClick={handleLogoClick} />
      <Banner />
      {/* <Nav onButtonClick={handleButtonClick} /> */}
      <Main onShowMainPage={handleShowMainPage} onShowMoney={handleShowMoney} onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
}

export default App;