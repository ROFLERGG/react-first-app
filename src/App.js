import React from 'react';
import './index.css'

function Button({variant, children}) {
  if (variant === "primary") {
    return (
      <button className='px-6 py-1 bg-sky-400 w-fit rounded-lg text-white'>{children}</button>
    );
  } else if (variant === "secondary") {
    return (
      <button className='px-6 py-1 bg-yellow-400 w-fit rounded-lg text-white'>{children}</button>
    );
  };
};

function App() {
  return (
    // hero screen
    <div className='bg-neutral-200 min-h-screen flex flex-col items-center justify-center'>
      <Button variant={'secondary'}>Okay</Button>
    </div>
  );
}

export default App;
