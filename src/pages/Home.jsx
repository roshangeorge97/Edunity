import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Navigation from './Navigation'
import Navigation2 from './Navigation2'

const navigation = [
  { name: 'Explore', href: '/mentors', current: true },
  { name: 'My Classes', href: '/signin', current: false },
  { name: 'Marketplace', href: '/marketplace', current: false },
  { name: 'Become a Mentor', href: '/mentor', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Home() {
  return (
    <div id='home'>
      <head>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </head>
      <Navigation />


    <div className="relative overflow-hidden bg-black">
      <div className="flex flex-col sm:flex-row pt-16 pb-24 sm:pt-24 sm:pb-0 lg:pt-40 lg:pb-16 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 py-8 sm:py-0 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-yellow sm:text-6xl">
              Find Your Personal Mentor, boost Grades!
            </h1>
            <p className="mt-4 text-xl text-yellow">
              Spend few minutes finding your mentor, for lifetime success!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <a
                href="/mentors"
                className="text-black inline-block rounded-md border border-transparent bg-yellow py-3 px-8 text-center font-medium text-white hover:bg-green hover:text-yellow"
              >
                Find Mentor
              </a>
            </div>
          </div>
        </div>                                                                                         
       <img className='w-3x1 h-3x1 order-first sm:order-last' src='https://drive.google.com/uc?export=view&id=1vBY6fqRWPov53eKDNqTOpEkYjPgmRPQP'/>         
      </div>

      <div className="relative overflow-hidden bg-yellow text-black">
        <div className="flex pt-8 pb-0 sm:pt-24 sm:pb-24 lg:pt-40 lg:pb-16">
          <img className='w-3x1 h-3x1 hidden sm:block' src='https://drive.google.com/uc?export=view&id=1M6D9s9CKLUADEaIlhWsTmMLn43IpoTHW' />
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8  py-8 sm:py-0 ">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-black sm:text-6xl">
                Register as mentor, start your side hustle!
              </h1>
              <p className="mt-4 text-xl text-black">
                Perks of Being a Mentor?
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <a
                  href="/mentors"
                  className=" text-black inline-block rounded-md border border-transparent bg-yellow py-3 px-8 text-center font-medium text-white hover:bg-green hover:text-yellow"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            <span className="block text-yellow">Want to Register as Mentor?</span>
            <span className="block text-green">Start Sharing your knowledge!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/students"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-yellow hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-yellow hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
