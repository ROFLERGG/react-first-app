import React from 'react';
import './index.css'

function Button() {
  return (
    <button className='px-6 py-1 bg-sky-400 w-fit rounded-lg text-white'>Log in</button>
  );
};

function App() {
  return (
    // hero screen
    <div className='bg-neutral-200 min-h-screen flex flex-col items-center justify-center'>
      <Login/>
    </div>
  );
}

export default App;
