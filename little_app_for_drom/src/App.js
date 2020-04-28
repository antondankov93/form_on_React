import React from 'react';
import './App.css';
import {Header} from 'components/header/Header';
import {MainRouter} from 'MainRouter';

export const App = () => {
  return (
      <div className="App">
            <Header/>
            <MainRouter/>
      </div>
  );
}

