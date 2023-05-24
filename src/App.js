import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Interests from './components/interests';
import Plan from './components/money';
import MainPage from './components/mainpage';
import Favorite from './components/fovorite';

function App() {
  return (
    <Router>
      <div className="m-0 p-0 ">
        <Header />
        <Banner />
        <Switch>
          <Route path="/interests">
            <Interests />
          </Route>
          <Route path="/money">
            <Plan />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="/">
            {/* The component shown when no other routes match */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;