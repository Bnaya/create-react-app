import React from 'react';
import logo from './logo.svg';
import './App.css';

// Works but requires a separate build step
import { greeting } from './libs/my-lib/helloWorld';
import { Foo } from './libs/my-react-lib/Some';
// import { greeting as jsgreeting  } from './libs/my-lib/jshelloWorld';

// Fails with: Module parse failed: Unexpected token (4:26) / You may need an additional loader to handle the result of these loaders.
// import { greeting } from '../../my-lib/src/helloWorld'

// Fails because path aliases are ignored (?)
// import { greeting } from '@my-lib/helloWorld'

// Parameter 'imwillerror' implicitly has an 'any' type.ts(7006)
// export function implicitAnyWillErrorHere(imwillerror) {

// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{greeting(34563456)}</p>
        <p>
          <Foo />
        </p>
      </header>
    </div>
  );
}

export default App;
