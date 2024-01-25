import React from 'react';
import BoxAnimation from './BoxAnimation';

const App = () => {
  return (
    <div>
      <BoxAnimation />
      <div class="dashboard " id="mainContainer">
        <button class="m-3 py-2 px-2 bg-gray-200" id="pauser">Pause/Play</button>
        <button class="m-3 py-2 px-2 bg-gray-200" id="reset">Reset</button>
      </div>
     </div>
  );
};

export default App;
