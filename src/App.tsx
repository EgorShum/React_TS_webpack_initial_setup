import React from 'react';
import { Header, Main, Sidebar} from './layout';

import './styles/App.css';

export const App = () => {
  console.log('App re-renders: ', process.env.OXFORD_ID);
 return(
  <div className="App-container">
    <Header />
    <Sidebar />
    <Main />
  </div>
  );
};