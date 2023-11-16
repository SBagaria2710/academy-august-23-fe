import React from 'react';

// Styles
import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';

function HoCApp() {
  return (
    <div className="App">
      <CompA blue />
      <CompA dark />
      <CompA />

      <br />

      <CompB blue />
      <CompB dark />
      <CompB />
    </div>
  );
}

export default HoCApp;