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
import { initializeApp } from "firebase/app";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCPvQYAYMgiBeARPSWh3R59Zpxcm_X7bqk",
    authDomain: "russpassds.firebaseapp.com",
    databaseURL: "https://russpassds-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "russpassds",
    storageBucket: "russpassds.appspot.com",
    messagingSenderId: "978797123770",
    appId: "1:978797123770:web:6d8d8a0caf4f598f718a83",
    measurementId: "G-WQ192CXM64"
  };

  const app = initializeApp(firebaseConfig);
  
  return (
    <Router>
      <ScrollToTop />
      <div className="m-0 p-0 ">
        <Routes>
          <Route path="/interests" element={<Interests />} />
          <Route path="/money" element={<Plan />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/" element={<Main app={app}/>} /> {/* The component shown when no other routes match */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;