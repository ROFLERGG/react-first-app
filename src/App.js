import React, { useEffect, useState } from 'react';
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
};

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
};

const firstSectionCardList = [{
    image: "/img/sectionCard-img1.png",
    title: 'Apply to humans',
    description: '72% of applications are never seen by a human! With parallel you skip the line and go direct to the hiring team.',
  }, {
    image: '/img/sectionCard-img2.png',
    title: 'Instantly stand out',
    description: 'Showcase your projects, passions and work ethos with Parallel Profile to stand out from the crowd.',
  }, {
    image: '/img/sectionCard-img3.png',
    title: 'Real time feedback',
    description: "Don't get ghosted! Get feedback & notifications with every application, so that you’re never left wondering."
  }
];

function FirstSectionCard() {
  return (
    firstSectionCardList.map(function(data) {
      return (
        <div className='flex-1 flex flex-col space-y-6 min-w-[300px]'>
          <div className='flex flex-col space-y-3'>
            <img src={data.image} width={60} height={60} alt="" />
            <h2 className='text-2xl text-white font-roboto'>{data.title}</h2>
          </div>
          <p className='text-white'>{data.description}</p>
        </div>
      )
    })
  );
};

const JobCardList = [{
    companyLogo: '/img/breef.png',
    title: 'Product Manager (Operations)',
    companyName: 'Breef',
    location: 'New York or Remote'
  }, {
    companyLogo: '/img/faire.png',
    title: 'Senior Site Reliability Engineer',
    companyName: 'Faire',
    location: 'Brazil'
  }, {
    companyLogo: '/img/ghia.png',
    title: 'Event Worker',
    companyName: 'Ghia',
    location: 'Los Angeles / New York City'
  }, {
    companyLogo: '/img/mrBeast.png',
    title: 'Talent Acquisition/Recruiting',
    companyName: 'Mr. Beast',
    location: 'Greenville NC'
  }
];

function JobCard() {
  return (
    JobCardList.map(function(card) {
      return (
        <a href='' className='group relative flex flex-col justify-between shrink-0 snap-start bg-white w-[340px] space-y-6 p-8 border border-black rounded-lg'>
          {/* card header */}
          <div className='flex flex-col space-y-3'>
            <div className='flex justify-between items-start'>
              <img src={card.companyLogo} alt="company-logo" />
              <button><i class="fa-regular fa-heart fa-lg"></i></button>
            </div>
            <h2 className='text-xl'>{card.title}</h2>
          </div>
          {/* description */}
          <div className='flex flex-col space-y-6'>
            <div className='flex flex-col space-y-3'>
              <div className='flex items-center space-x-2 text-sm'>
                <span>{card.companyName}</span>
                <div className='w-0.5 h-0.5 bg-black rounded-full'></div>
                <span>{card.location}</span>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='flex -space-x-1'>
                  <div className='w-8 h-8 bg-neutral-500 ring-2 ring-white'></div>
                  <div className='w-8 h-8 bg-neutral-500 ring-2 ring-white'></div>
                  <div className='w-8 h-8 bg-neutral-500 ring-2 ring-white'></div>
                </div>
                <p>Active Employees</p>
              </div>
            </div>
            <Button variant={"primary"}>Apply Direct</Button>
          </div>
        </a>
      )
    })
  )
};

const CompanyCardList = [{
    companyBg: '/img/companyBG1.png',
    location: 'San Francisco, CA',
    companyName: 'Webflow'
  }, {
    companyBg: '/img/companyBG2.png',
    location: 'San Francisco, CA',
    companyName: 'Patreon'
  }, {
    companyBg: '/img/companyBG3.png',
    location: 'San Francisco, CA',
    companyName: 'Faire'
  }, {
    companyBg: '/img/companyBG4.png',
    location: 'New York, NY',
    companyName: 'Breef'
  }
];

function CompanyCard() {
  return (
    CompanyCardList.map(function(card) {
      return (
        <a href='' className='relative flex flex-col justify-between shrink-0 snap-start bg-white w-[340px] border border-black rounded-lg'>
          <img src={card.companyBg} className='w-full h-24 object-cover object-center rounded-t-lg'></img>
          <div className='p-8 flex flex-col space-y-3'>
            {/* card header */}
            <h2 className='text-xl'>{card.companyName}</h2>
            {/* description */}
            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col space-y-3'>
                <div className='flex items-center space-x-2 text-sm'>
                  <span>Manufacturing</span>
                  <div className='w-0.5 h-0.5 bg-black rounded-full'></div>
                  <span>{card.location}</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='flex -space-x-1'>
                    <div className='w-8 h-8 bg-neutral-500 ring-2 ring-white'></div>
                    <div className='w-8 h-8 bg-neutral-500 ring-2 ring-white'></div>
                    <div className='w-8 h-8 bg-neutral-500 ring-2 ring-white'></div>
                  </div>
                  <p>Active Employees</p>
                </div>
              </div>
              <Button variant={"primary"}>Browse Job</Button>
            </div>
          </div>
        </a>
      )
    })
  )
}

function Tag(props) {
  return (
    <a href='' className='bg-white px-6 py-3 border border-black rounded-lg text-2xl max-sm:text-xl hover:bg-neutral-950 hover:text-white duration-150 ease-in-out'>{props.children}</a>
  )
};

const collections = [{
    image: "/img/collection1.png",
    title: 'Women Led',
    companies: 5,
    jobs: 1,
  }, {
    image: "/img/collection2.png",
    title: 'Wellness',
    companies: 3,
    jobs: 1,
  }, {
    image: "/img/collection3.png",
    title: 'Web 3',
    companies: 2,
    jobs: 5,
  }, {
    image: "/img/collection4.png",
    title: 'Music Tech',
    companies: 1,
    jobs: 1,
  }, {
    image: "/img/collection5.png",
    title: 'Marketplaces',
    companies: 2,
    jobs: 17,
  }, {
    image: "/img/collection6.png",
    title: 'Giving Back',
    companies: 1,
    jobs: 1,
  }
];

function CollectionCard() {
  
  const [a, setA] = useState(collections);
  
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth <= 640) {
        setA(collections.slice(0, 2))
      } else  {
        setA(collections)
      }
    })
  }, [])
  
  return (
    a.map(function(card) {
      return (
        <a href='#' className='flex flex-col rounded-lg border border-neutral-950 bg-white'>
          <img src={card.image} alt="collection" className='w-full h-48 object-cover object-center rounded-t-lg'/>
          <div className='p-8 flex flex-col space-y-3'>
            <h2 className='text-2xl'>{card.title}</h2>
            <div className='flex items-center space-x-2'>
              <div className='flex items-center space-x-1'>
                <span>{card.companies}</span>
                <span className='leading-none'>Companies</span>
              </div>
              <div class="w-0.5 h-0.5 bg-black rounded-full"></div>
              <div className='flex items-center space-x-1'>
                <span>{card.jobs}</span>
                <span>Jobs</span>
              </div>
            </div>
          </div>
        </a>
      )
    })
  )
}

function Media() {
  
}

const tabData = ["Build your new profile", "Discover jobs you love", "Apply direct to teams", "Get quick feedback", "Land interviews quicker"]

function MediaTabs() {
  const [tab, setTab] = useState(1);
  return (
    <div className='flex justify-between gap-12'>
      <div class="flex flex-1 flex-col gap-3">
        {tabData.map((title, index) => {
          return (
            <button onClick={() =>  setTab(index + 1)} className={`px-8 py-10 w-full border border-neutral-950 rounded-2xl duration-150 transition-all ease-in-out cursor-pointer ${tab === index + 1 ? "shadow-btn" : ""}`} >
              <div className='flex items-center space-x-6 text-2xl'>
                <div className='flex justify-center items-center w-12 h-12 border border-neutral-950 rounded-2xl'>{index + 1}</div>
                <span>{title}</span>
              </div>
            </button>
          )
        })}
      </div>
      <div class="flex-[2]">
        <div className={tab === 1 ? "block w-full h-full bg-neutral-400 rounded-2xl" : "hidden"}></div>
        <div className={tab === 2 ? "block w-full h-full bg-neutral-500 rounded-2xl" : "hidden"}></div>
        <div className={tab === 3 ? "block w-full h-full bg-neutral-600 rounded-2xl" : "hidden"}></div>
        <div className={tab === 4 ? "block w-full h-full bg-neutral-700 rounded-2xl" : "hidden"}></div>
        <div className={tab === 5 ? "block w-full h-full bg-neutral-800 rounded-2xl" : "hidden"}></div>
      </div>
    </div>
  )
}

const faqData = [
  {title: "Why Parallel over Linkedin Jobs, or Zip Recruiter?", description: "123"},
  {title: "What types of jobs are on Parallel?", description: "456"},
  {title: "What does apply direct or get referred mean?", description: "789"},
  {title: "Is Parallel free?", description: "101112"},
  {title: "Do I submit my resume or profile?", description: "131415"},
  {title: "Will more companies & jobs be added?", description: "161718"},
];

const AccordionItem = ({title, description}) => {
  const [isActive, setActive] = useState(false);
  return (
    <button onClick={() => {setActive(!isActive)}} className="px-8 py-10 bg-neutral-800 rounded-lg text-white space-y-6">
      <div className="flex justify-between items-center space-x-6">
        <span className='text-xl text-start'>{title}</span>
        <i class="fa-solid fa-chevron-down fa-lg"></i>
      </div>
      {isActive && <p className="hiddentext-lg text-start">{description}</p>}
    </button>
  )
}

function FaqBtn() {
  return (
    faqData.map(({title, description}) => {
      return (
        <AccordionItem title={title} description={description}/>
      )
    })
  )
}

function FAQ() {
  return (
    <section className='bg-neutral-950 py-[120px]'>
        <div className='container'>
          <div className='flex flex-col space-y-12'>
            <h2 className='text-5xl text-white font-roboto w-fit mx-auto'>FAQ</h2>
            <div className='flex flex-col space-y-6'>
              <FaqBtn/>
            </div>
          </div>
        </div>
    </section>
  )
}

function Main() {
  return (
    <main>
      {/* first section */}
      <section className='bg-neutral-950 py-[120px]'>
        <div className='container'>
          <div className='flex flex-col space-y-12'>
            <h2 className='text-6xl text-white font-roboto max-w-[460px]'>Your new path
            to hired.
            </h2>
            <div className='flex gap-24 flex-wrap max-md:gap-12'>
              <FirstSectionCard/>
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      <section className='bg-white py-[120px]'>
        <div className='container max-md:pr-0'>
          <div className='flex flex-col space-y-24'>
            {/* trending jobs */}
            <div className='flex flex-col space-y-12 overflow-x-hidden'>
              {/* title */}
              <div className='flex justify-between items-end'>
                <h2 className='text-5xl font-roboto w-fit'>Trending jobs</h2>
                <a href='' className='flex items-center space-x-3 whitespace-nowrap max-sm:mr-4'>
                  <span className='text-lg font-roboto'>View all</span>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
              {/* card list */}
              <div className='flex justify-between space-x-6 snap-x snap-mandatory'>
                <JobCard/>
              </div>
            </div>
            {/* top companies */}
            <div className='flex flex-col space-y-12 overflow-x-hidden'>
              {/* title */}
              <div className='flex justify-between items-end'>
                <h2 className='text-5xl font-roboto w-fit'>Top companies</h2>
                <a href='' className='flex items-center space-x-3 whitespace-nowrap max-md:mr-4'>
                  <span className='text-lg font-roboto'>View all</span>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
              {/* card list */}
              <div className='flex justify-between space-x-6 snap-x snap-mandatory'>
                <CompanyCard/>
              </div>
            </div>
            {/* tags */}
            <div className='flex flex-col space-y-12'>
              <h2 className='text-5xl font-roboto w-fit'>Find your culture</h2>
              <div className='flex flex-wrap gap-3'>
                <Tag>Adventurous</Tag>
                <Tag>Autonomous</Tag>
                <Tag>Bold</Tag>
                <Tag>Collaborative</Tag>
                <Tag>Curious</Tag>
                <Tag>Design Driven</Tag>
                <Tag>Ego-Free</Tag>
                <Tag>Empathetic</Tag>
                <Tag>Empowering</Tag>
                <Tag>Entrepreneurial</Tag>
                <Tag>Fast Paced</Tag>
                <Tag>Focused</Tag>
                <Tag>Forward Thinking</Tag>
                <Tag>Inclusive</Tag>
                <Tag>Purposeful</Tag>
              </div>
            </div>
            {/* browse collections */}
            <div className='flex flex-col space-y-12'>
              {/* title */}
              <div className='flex justify-between items-end'>
                <h2 className='text-5xl font-roboto w-fit'>Browse Collections</h2>
                <a href='' className='flex items-center space-x-3 whitespace-nowrap max-md:mr-4'>
                  <span className='text-lg font-roboto'>View all</span>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
              {/* card list */}
              <div className='grid gap-6 grid-cols-4 flex-wrap max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <CollectionCard/>
              </div>
            </div>
            {/* media */}
            <div className='flex flex-col space-y-12'>
              <h2 className='text-5xl font-roboto w-fit mx-auto'>It’s simple to get started</h2>
              <MediaTabs/>
            </div>
          </div>
        </div>
      </section>
      {/* third section */}
      <FAQ/>
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
