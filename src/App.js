import React from 'react';
import './index.css'

function Button({ variant, children }) {
  if (variant === "primary") {
    return (
      <button className='px-8 py-3 bg-white border border-black rounded-lg text-black font-roboto shadow-btn'>{children}</button>
    );
  }
  if (variant === "secondary") {
    return (
      <button className='px-8 py-3 bg-yellow-400 border border-black rounded-lg text-black font-roboto'>{children}</button>
    );
  };
  if (variant === "skeleton") {
    return (
      <button className='px-8 py-3 border border-black rounded-lg text-white font-roboto'>{children}</button>
    );
  };
};

function Header() {
  return (
    <header className='flex items-center px-8 py-4 max-lg:justify-end'>
      <div className='flex w-full max-lg:hidden'>
        <div className='flex-1'></div>
        <div className='flex flex-1 justify-center space-x-6'>
          <a href="" className='py-3 px-3 leading-none'>Find Jobs</a>
          <a href="" className='py-3 px-3 leading-none'>For Companies</a>
        </div>
        <div className='flex flex-1 justify-end items-center space-x-6'>
          <a href="" className='py-3 px-3 leading-none'>Sign In</a>
          <Button variant={'primary'}>Sign up Free</Button>
        </div>
      </div>
      <button className='p-2 hidden max-lg:block'>
        <div className='flex flex-col justify-center space-y-1 w-6 h-6'>
          <div className='w-full h-0.5 bg-black rounded-full'></div>
          <div className='w-full h-0.5 bg-black rounded-full'></div>
          <div className='w-full h-0.5 bg-black rounded-full'></div>
        </div>
      </button>
    </header>
  )
}

function Hero() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {/* content */}
      <div className='flex-1 flex bg-hero bg-cover bg-center bg-no-repeat'>
        <div className="container flex flex-col justify-center">
          <div className='flex flex-col justify-center space-y-12 max-lg:items-start'>
            <div>
              <div className='flex flex-col items-start space-x-48 mx-auto w-fit max-xl:space-x-24 max-lg:space-x-0 max-lg:mx-0'>
                <h2 className='text-10xl leading-none max-xl:text-9xl max-md:text-8xl max-sm:text-7xl font-roboto'>Land a job</h2>
                <h2 className='text-10xl leading-none max-xl:text-9xl max-md:text-8xl max-sm:text-7xl font-roboto'>the easy way</h2>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col space-y-12 mx-auto'>
                <p className='text-2xl mx-auto max-w-[600px] max-lg:mx-0'>
                  The best place to discover & apply to the coolest start up jobs, without the black box.
                </p>
                <div className='flex space-x-6 justify-between'>
                  <input type="text"  className='outline-none bg-white w-full rounded border border-black px-3 py-3 font-roboto'/>
                  <Button variant={"secondary"}>Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    // hero screen
    <Hero />
  );
}

export default App;
