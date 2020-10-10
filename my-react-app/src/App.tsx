import React from 'react';
import logo from './logo.svg';
import './App.css';

// Works but requires a separate build step
import { greeting } from './libs/my-lib/helloWorld';
import { Foo } from './libs/my-react-lib/Some';

/**
 On this import, typescript figure out package.json.main -> dist/index.js -> src/index.ts
 This is not standard node resolution, but very a powerful feature  
 So webpack can't resolve it

 So if you try to use `will_work_on_ts_side_but_not_cra_side` symbol in the code, it will fail
*/
import { will_work_on_ts_side_but_not_cra_side } from 'will-work-on-ts-side-but-not-cra-side';

/**
 On this import we help webpack & typescript to get the file directly, and both typescript & webpack can resolve it,
 BUT CRA won't pass files outside of the app's root dir in babel-loader
 
 So if you try to use `will_work_on_ts_side_but_not_cra_side` symbol in the code, it will fail
*/
import { will_work_on_ts_side_but_not_cra_side as alsoThisWillNotWork } from 'will-work-on-ts-side-but-not-cra-side/src/index';

// Parameter 'imwillerror' implicitly has an 'any' type.ts(7006)
// export function implicitAnyWillErrorHere(imwillerror) {

// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* un-commenting the line below will break cra build: Can't resolve 'will-work-on-ts-side-but-not-cra-side'  */}
        {/* <p>{will_work_on_ts_side_but_not_cra_side()}</p> */}
        {/* un-commenting the line below will break cra build: Can't resolve 'Module parse failed: Unexpected token'  */}
        {/* <p>{alsoThisWillNotWork()}</p> */}
        <p>{greeting(34563456)}</p>
        <p>
          <Foo />
        </p>
      </header>
    </div>
  );
}

export default App;
