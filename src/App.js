import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './modules/header';

import { Container, Row, Col } from 'react-grid-system';
import VanishBanner from './modules/vanishBanner';
import Votes from './modules/votes';

const App = () => {
  
    return (
        <div className="app">
            <Header />
            <VanishBanner />
            <Votes />
        </div>
    );
}

export default App;
