import React from 'react';
import logo from './logo.svg';
import './App.css';

// Works but requires a separate build step
import { greeting } from '../../my-lib/dist/helloWorld';

// Fails with: Module parse failed: Unexpected token (4:26) / You may need an additional loader to handle the result of these loaders.
// import { greeting } from '../../my-lib/src/helloWorld'

// Fails because path aliases are ignored (?)
// import { greeting } from '@my-lib/helloWorld'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{greeting()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
