import React from 'react';
import './index.css'

function Button({variant, children}) {
  if (variant === "primary") {
    return (
      <button className='px-8 py-3 bg-sky-400 w-fit rounded-lg text-white font-roboto'>{children}</button>
    );
  } if (variant === "secondary") {
    return (
      <button className='px-8 py-3 bg-yellow-400 w-fit rounded-lg text-white font-roboto'>{children}</button>
    );
  };
  if (variant === "skeleton") {
    return (
      <button className='px-8 py-3 border border-black w-fit rounded-lg text-white font-roboto'>{children}</button>
    );
  };
};

function App() {
  return (
    // hero screen
    <div className='bg-neutral-200 min-h-screen flex flex-col items-center justify-center'>
      <Button variant={'primary'}>Sign up Free</Button>
    </div>
  );
}

export default App;
