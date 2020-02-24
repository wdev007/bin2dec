import React from 'react';
import './App.css';

import GlobalStyles from './styles/global';

import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <GlobalStyles />
    </div>
  );
}

export default App;
