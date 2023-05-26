import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Interests from './components/interests';
import Plan from './components/money';
import MainPage from './components/mainpage';
import Favorite from './components/fovorite ';
import Main from './components/main';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="m-0 p-0 ">
        <Routes>
          <Route path="/interests" element={<Interests />} />
          <Route path="/money" element={<Plan />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/" element={<Main/>} /> {/* The component shown when no other routes match */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;