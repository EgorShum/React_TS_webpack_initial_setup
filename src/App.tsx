import React from 'react';
import './styles/App.css';

export const App = () => {
  console.log('App re-renders');
 return(
  <div className="App-container">
    <Header />
    <Sidebar />
    <Main />
  </div>
  );
};