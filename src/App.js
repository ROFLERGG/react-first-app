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
    <header className='flex items-center px-8 py-4 max-lg:justify-end max-lg:px-2 max-lg:py-0'>
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
      <button className='p-4 hidden max-lg:block'>
        <div className='flex flex-col justify-center space-y-1 w-8 h-8'>
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
          <div className='flex flex-col justify-center py-[30px] space-y-12 max-lg:items-start'>
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
                <div className='flex space-x-6 justify-between max-sm:flex-col max-sm:space-x-0 max-sm:space-y-6'>
                  <input type="text"  className='outline-none bg-white w-full rounded border border-black px-3 py-3 font-roboto'/>
                  <div className='flex items-center space-x-0 max-sm:space-x-3'>
                    <div className='hidden w-full h-0.5 rounded-full bg-black flex-1 max-sm:block'></div>
                    <Button variant={"secondary"}>Explore</Button>
                    <div className='hidden w-full h-0.5 rounded-full bg-black flex-1 max-sm:block'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const firstSectionCardList = [{
    image: "/img/sectionCard-img1",
    title: 'Apply to humans',
    description: '72% of applications are never seen by a human! With parallel you skip the line and go direct to the hiring team.',
  }, {
    image: '/img/sectionCard-img2',
    title: 'Instantly stand out',
    description: 'Showcase your projects, passions and work ethos with Parallel Profile to stand out from the crowd.',
  }, {
    image: '/img/sectionCard-img3',
    title: 'Real time feedback',
    description: "Don't get ghosted! Get feedback & notifications with every application, so that you’re never left wondering."
  }
];

function FirstSectionCard() {
  return (
    firstSectionCardList.map(function(data) {
      return (
        <div className='flex-1 flex flex-col space-y-6 min-w-[320px]'>
          <img src={data.image} width={60} height={60} alt="" />
          <h2 className='text-2xl text-white font-roboto'>{data.title}</h2>
          <p className='text-white'>{data.description}</p>
        </div>
      )
    })
  );
}

function Main() {
  return (
    <main>
      {/* first section */}
      <section className='bg-neutral-950 py-[60px]'>
        <div className='container'>
          <div className='flex gap-24 flex-wrap'>
            <FirstSectionCard/>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    // hero screen
    <>
      <Hero/>
      <Main/>
    </>
  );
}

export default App;
