import React from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencySelect from './components/CurrencySelect';
import Lines from './components/Lines';
import CurrencyDate from './components/CurrencyDate';

function App() {
  return (
    <div>
      <h1>Exchange Rates for a day</h1>
      <div>
        <CurrencySelect />
        <CurrencyDate />
      </div>
      <Lines />
    </div>

  );
}

export default App;
