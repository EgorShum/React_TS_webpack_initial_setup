import React, { FC } from 'react';
import { Header, Main, Sidebar } from './layout';

import './styles/App.css';

export const App: FC = () => {
  console.log('App re-rendeaas: ', process.env.OXFORD_ID);
  return (
    <div className="App-container">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};
