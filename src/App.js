import React from 'react';
import './index.css'

function Button({variant, children}) {
  if (variant === "primary") {
    return (
      <button className='px-8 py-3 bg-white border border-black w-fit rounded-lg text-black font-roboto shadow-btn'>{children}</button>
    );
  }
  if (variant === "secondary") {
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

function Header() {
  return (
    <header className='flex items-center px-8 py-4'>
      <div className='flex-1'></div>
      <div className='flex flex-1 justify-center space-x-6'>
        <a href="" className='py-3 px-3 leading-none'>Find Jobs</a>
        <a href="" className='py-3 px-3 leading-none'>For Companies</a>
      </div>
      <div className='flex flex-1 justify-end items-center space-x-6'>
        <a href="" className='py-3 px-3 leading-none'>Sign In</a>
        <Button variant={'primary'}>Sign up Free</Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      {/* content */}
      <div className='bg-[url:]'></div>
    </div>
  )
}

function App() {
  return (
    // hero screen
      <Hero/>
  );
}

export default App;
