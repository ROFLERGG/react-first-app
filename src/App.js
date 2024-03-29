import React, { useEffect, useState } from 'react';
import './index.css'
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  ["px-8 py-3 border border-neutral-950 rounded-lg text-neutral-950 font-roboto whitespace-nowrap"],
  {
    variants: {
      variant: {
        primary: "bg-white",
        secondary: "bg-yellow-400 text-lg",
        skeleton: "relative text-lg after:absolute after:top-[5px] after:left-[5px] after:w-full after:h-full after:border after:border-neutral-950 after:rounded-lg"
      },
      color: {
        yellow: "bg-yellow-400",
        white: "bg-white",
        transparent: "bg-transparent"
      },
      shadow: { active: "shadow-btn" },
      width: { full: "w-full" }
    },
    defaultVariants: {
      variant: "primary",
      color: "white"
    },
  }
)

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
          <button className={buttonVariants({variant:'primary', shadow:'active'})}>Sign up Free</button>
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
                  <input type="text" className='outline-none bg-white w-full rounded border border-black px-3 py-3 font-roboto' />
                  <div className='flex items-center space-x-0 max-sm:space-x-3'>
                    <div className='hidden w-full h-0.5 rounded-full bg-black flex-1 max-sm:block'></div>
                    <button className={buttonVariants({ variant:'secondary' })}>Explore</button>
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
    firstSectionCardList.map(function (data) {
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

function FirstSection() {
  return (
    <section className='bg-neutral-950 py-[120px]'>
      <div className='container'>
        <div className='flex flex-col space-y-12'>
          <h2 className='text-6xl text-white font-roboto max-w-[460px]'>Your new path
            to hired.
          </h2>
          <div className='flex gap-24 flex-wrap max-md:gap-12'>
            <FirstSectionCard />
          </div>
        </div>
      </div>
    </section>
  )
}

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
    JobCardList.map(function (card) {
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
            <button className={buttonVariants({ variant:'primary', shadow:'active' })}>Apply Direct</button>
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
    CompanyCardList.map(function (card) {
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
              <button className={buttonVariants({ variant:'primary', shadow:'active' })}>Browse Job</button>
            </div>
          </div>
        </a>
      )
    })
  )
}

function Jobs() {
  return (
    <div className='pt-[120px] pb-[60px]'>
      <div className='container max-md:pr-0'>
        <div className='flex flex-col space-y-12 overflow-x-hidden'>
          {/* title */}
          <div className='flex justify-between items-end max-sm:flex-col max-sm:space-y-3 max-sm:items-start'>
            <h2 className='text-5xl font-roboto w-fit'>Trending jobs</h2>
            <a href='' className='flex items-center space-x-3 whitespace-nowrap max-sm:mr-4'>
              <span className='text-lg font-roboto'>View all</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          {/* card list */}
          <div className='flex justify-between space-x-6 snap-x snap-mandatory'>
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function Companies() {
  return (
    <div className='py-[60px]'>
      <div className='container max-md:pr-0'>
        <div className='flex flex-col space-y-12 overflow-x-hidden'>
          {/* title */}
          <div className='flex justify-between items-end max-sm:flex-col max-sm:space-y-3 max-sm:items-start'>
            <h2 className='text-5xl font-roboto w-fit'>Top companies</h2>
            <a href='' className='flex items-center space-x-3 whitespace-nowrap max-md:mr-4'>
              <span className='text-lg font-roboto'>View all</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          {/* card list */}
          <div className='flex justify-between space-x-6 snap-x snap-mandatory'>
            <CompanyCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function Tag(props) {
  return (
    <a href='' className='bg-white px-6 py-3 border border-black rounded-lg text-2xl max-sm:text-xl hover:bg-neutral-950 hover:text-white duration-150 ease-in-out'>{props.children}</a>
  )
};

function TagsHandler() {
  return (
    <div className='py-[60px]'>
      <div className='container'>
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
      </div>
    </div>
  )
}

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
      } else {
        setA(collections)
      }
    })
  }, [])

  return (
    a.map(function (card) {
      return (
        <a href='#' className='group/item flex flex-col rounded-lg border border-neutral-950 bg-white'>
          <img src={card.image} alt="collection" className='w-full h-48 object-cover object-center rounded-t-lg' />
          <div className='group/item p-8 flex justify-between items-center'>
            <div className='flex flex-col space-y-3'>
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
            <div className='group/btn group-hover/btn:bg-neutral-950 w-12 h-12 flex justify-center items-center border border-neutral-950 '>
              <div className='group-hover/btn:text-white flex justify-center items-center'>
                <i class="fa-solid fa-plus fa-xl"></i>
              </div>
            </div>
          </div>
        </a>
      )
    })
  )
}

function CollectionHandler() {
  return (
    <div className='py-[60px]'>
      <div className='container'>
        <div className='flex flex-col space-y-12'>
          {/* title */}
          <div className='flex justify-between items-end max-sm:flex-col max-sm:space-y-3 max-sm:items-start'>
            <h2 className='text-5xl font-roboto w-fit'>Browse Collections</h2>
            <a href='' className='flex items-center space-x-3 whitespace-nowrap max-md:mr-4'>
              <span className='text-lg font-roboto'>View all</span>
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          {/* card list */}
          <div className='grid gap-6 grid-cols-4 flex-wrap max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            <CollectionCard />
          </div>
        </div>
      </div>
    </div>
  )
}

const tabData = ["Build your new profile", "Discover jobs you love", "Apply direct to teams", "Get quick feedback", "Land interviews quicker"]

function MediaTabs() {
  const [tab, setTab] = useState(1);
  return (
    <div className='flex justify-between gap-12'>
      <div class="flex flex-1 flex-col gap-3">
        {tabData.map((title, index) => {
          return (
            <button onClick={() => setTab(index + 1)} className={`${tab === index + 1 ? "btn-active" : "btn-inactive"}`} >
              <div className='flex items-center space-x-6 text-2xl'>
                <div className={`flex justify-center items-center w-12 h-12 border border-neutral-950 rounded-2xl ${tab === index + 1 ? "bg-yellow-300" : ""}`}>{index + 1}</div>
                <span className='text-start'>{title}</span>
              </div>
            </button>
          )
        })}
      </div>
      <div class="flex-[2] max-lg:hidden">
        <div className={tab === 1 ? "block w-full h-full bg-neutral-400 rounded-2xl" : "hidden"}></div>
        <div className={tab === 2 ? "block w-full h-full bg-neutral-500 rounded-2xl" : "hidden"}></div>
        <div className={tab === 3 ? "block w-full h-full bg-neutral-600 rounded-2xl" : "hidden"}></div>
        <div className={tab === 4 ? "block w-full h-full bg-neutral-700 rounded-2xl" : "hidden"}></div>
        <div className={tab === 5 ? "block w-full h-full bg-neutral-800 rounded-2xl" : "hidden"}></div>
      </div>
    </div>
  )
}

function MediaHandler() {
  return (
    <div className='pb-[120px] pt-[60px]'>
      <div className='container'>
        <div className='flex flex-col space-y-12'>
          <h2 className='text-5xl font-roboto w-fit mx-auto'>It’s simple to get started</h2>
          <MediaTabs />
        </div>
      </div>
    </div>
  )
}

function SecondSection() {
  return (
    <section className='bg-white'>
      <div className='flex flex-col'>
        {/* trending jobs */}
        <Jobs />
        {/* top companies */}
        <Companies />
        {/* tags */}
        <TagsHandler />
        {/* browse collections */}
        <CollectionHandler />
        {/* media */}
        <MediaHandler />
      </div>
    </section>
  )
}

const faqData = [
  { title: "Why Parallel over Linkedin Jobs, or Zip Recruiter?", description: "123" },
  { title: "What types of jobs are on Parallel?", description: "456" },
  { title: "What does apply direct or get referred mean?", description: "789" },
  { title: "Is Parallel free?", description: "101112" },
  { title: "Do I submit my resume or profile?", description: "131415" },
  { title: "Will more companies & jobs be added?", description: "161718" },
];

const AccordionItem = ({ title, description }) => {
  const [isActive, setActive] = useState(false);
  return (
    <button onClick={() => { setActive(!isActive) }} className="px-8 py-10 bg-neutral-800 rounded-lg text-white space-y-6">
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
    faqData.map(({ title, description }) => {
      return (
        <AccordionItem title={title} description={description} />
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
            <FaqBtn />
          </div>
        </div>
      </div>
    </section>
  )
}

function FourthSection() {
  return (
    <section className='py-[180px] bg-footer bg-cover bg-bottom bg-no-repeat max-md:py-[120px]'>
      <div className='container'>
        <div className='flex flex-col space-y-6'>
          <h2 className='font-roboto text-7xl max-lg:text-6xl mx-auto max-md:mx-0'>Your one stop job shop.</h2>
          <p className='flex justify-center space-y-3 max-md:justify-start text-xl'>Join to apply to 100’s of the best start up jobs.</p>
          <div className='flex justify-center w-full space-x-6 max-md:flex-col max-md:space-y-6 max-md:space-x-0'>
            <button className={buttonVariants({ variant:'secondary', shadow:'active' })}>Start for free</button>
            <button className={buttonVariants({ variant:'skeleton' })}>Join as a company</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const navData = [
  { title: "Find Work", links: ["Explore Jobs", "Discover Companies", "Browse Collections"] },
  { title: "Find People", links: ["Learn More", "Sign up"] },
  { title: "Company", links: ["About us", "Careers", "Contact"] }
];

const NavSection = () => {
  return (
    navData.map(({ title, links }) => {
      return (
        <div className='flex flex-col space-y-3'>
          <a href="" className='text-lg text-white'>{title}</a>
          {links.map(link => {
            return (
              <a href="" className='text-neutral-300'>{link}</a>
            )
          })}
        </div>
      )
    })
  )
}

function Navigation() {
  return (
    <div className='flex gap-24 max-lg:justify-between max-lg:gap-12 flex-wrap'>
      <NavSection/>
    </div>
  )
}

function FooterForm() {
  return (
    <form action="" method="post" className='flex items-center space-x-3 max-lg:justify-between max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 max-sm:items-start'>
      <input type="email" name="email" placeholder='Email' className='px-3 py-3 w-[260px] max-lg:w-full placeholder:text-white text-white bg-neutral-700 outline-none rounded'/>
      <button type="submit" className={buttonVariants({ variant:'primary' })}>Join us free</button>
    </form>
  )
}

function FooterTop() {
  return (
    <div className='flex justify-between space-x-12 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-12'>
      <div className='flex flex-col space-y-6'>
        <h2 className='text-lg text-white font-roboto'>Hire Different ™</h2>
        <div className='flex flex-col space-y-6'>
          <FooterForm/>
          <div className='flex space-x-6'>
            <a href="" className='w-10 h-10 flex justify-center items-center border border-white text-white'>
            </a>
            <a href="" className='w-10 h-10 flex justify-center items-center border border-white text-white'>
              <i class="fa-brands fa-twitter fa-lg"></i>
            </a>
            <a href="" className='w-10 h-10 flex justify-center items-center border border-white text-white'>
              <i class="fa-solid fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <Navigation/>
    </div>
  )
}

function FooterBottom() {
  return (
    <div className='flex flex-col space-y-12'>
      <a href='/'>
        <img src="/img/parallel.png" className='w-full' alt="parallel" />
      </a>
      <div className='flex items-center space-x-12 text-white max-md:flex-col max-md:space-x-0 max-md:space-y-6 max-sm:items-start'>
        <span>2021 Parallel Group. All Rights Reserved,</span>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className='bg-neutral-950 py-[60px]'>
      <div className='container px-8'>
        <div className='flex flex-col space-y-12'>
          <FooterTop/>
          <FooterBottom/>
        </div>
      </div>
    </footer>
  )
}

function Main() {
  return (
    <main>
      <FirstSection/>
      <SecondSection/>
      <FAQ/>
      <FourthSection/>
    </main>
  )
}

function App() {
  return (
    // hero screen
    <>
      <Hero />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
