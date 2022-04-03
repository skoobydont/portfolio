import React, { useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
// Custom
import MainTheme from './components/Theme';
import Nav from './components/NavComponent';
import Footer from './components/FooterComponent';
// Pages
import LandingPage from './pages/LandingPage';
import SoftwareExperiencePage from './pages/SoftwareExperiencePage';
import HardwareExperiencePage from './pages/HardwareExperiencePage';

const App = () => {
  return (
    <MainTheme>
      <Router>
        <Nav />
        <div className="App container-fluid" data-testid="app">
          <Switch>
            <Route
              path="/portfolio"
              exact
              render={() => (
                <LandingPage />
              )}
            />
            <Route
              path="/portfolio/software"
              exact
              render={() => (
                <SoftwareExperiencePage />
              )}
            />
            <Route
              path="/portfolio/hardware"
              exact
              render={() => (
                <HardwareExperiencePage />
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
