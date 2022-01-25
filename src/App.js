import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import MainTheme from './components/Theme';
import Nav from './components/NavComponent';
import Footer from './components/FooterComponent';
import LandingPage from './pages/LandingPage';
import SoftwareExperiencePage from './pages/SoftwareExperiencePage';
import HardwareExperiencePage from './pages/HardwareExperiencePage';
import OtherProjectsPage from './pages/OtherProjectsPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import AccountPage from './pages/AccountPage';

const App = () => {
  return (
    <MainTheme>
      <Router>
        <Nav />
        <div className="App container-fluid">
          <Switch>
            <Route
              path="/portfolio"
              exact
              render={(props) => (
                <LandingPage
                  {...props}
                />
              )}
            />
            <Route
              path="/portfolio/software"
              exact
              render={(props) => (
                <SoftwareExperiencePage
                  {...props}
                />
              )}
            />
            <Route
              path="/portfolio/hardware"
              exact
              render={(props) => (
                <HardwareExperiencePage
                  {...props}
                />
              )}
            />
            <Route
              path="/portfolio/other"
              exact
              render={(props) => (
                <OtherProjectsPage
                  {...props}
                />
              )}
            />
          </Switch>      
        </div>
        <Footer />
      </Router>
    </MainTheme>
  );
}

export default App;
