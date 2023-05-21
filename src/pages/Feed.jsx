import Navigation from './Navigation'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'



const filters = [
    {
      id: 'color',
      name: 'Exam',
      options: [
        { value: 'black', label: 'IIT-JEE', checked: false },
        { value: 'beige', label: 'NEET', checked: false },
        { value: 'blue', label: 'UPSC', checked: true },
      ],
    },
    {
      id: 'category',
      name: 'Language',
      options: [
        { value: 'new-arrivals', label: 'English', checked: false },
        { value: 'sale', label: 'Hindi', checked: false },
        { value: 'travel', label: 'Tamil', checked: true },
        { value: 'organization', label: 'Telgu', checked: false },
        { value: 'accessories', label: 'Malayalam', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Level',
      options: [
        { value: '2l', label: 'Intermediate', checked: false },
        { value: '6l', label: 'Easy', checked: false },
        { value: '12l', label: 'Advanced', checked: false },
      ],
    },
  ]
  
  const subCategories = [
    { name: 'Career', href: '#' },
    { name: 'Results', href: '#' },
    { name: 'IIT-JEE', href: '#' },
    { name: 'NTA', href: '#' },
    { name: 'NEET', href: '#' },
    { name: 'UPSC', href: '#' },
  ]
  
  



export default function Feed(){
    return(
             <>
<Navigation />
<div className="sm:flex flex-row">
<div className="w-1/4 p-5">
          <h2 className="text-yellow bold decoration-8 font-semibold">Categories</h2>
          <form className="text-yellow mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    
                  </form>
        </div>
<div class="bg-yellow dark:bg-gray-900 w-full">
    <div class="container px-6 py-6 mx-auto">
        <div className='w-50'>
        <h1 class="p-1 bg-black text-2xl font-semibold text-yellow capitalize lg:text-3xl dark:text-yellow">Latest News👨‍🎓</h1>
        </div>
        <div class="sm:p-8 sm:pl-8 p-4 pl-0 pt-0 pb-0 mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="sm:block hidden object-cover lg:mx-6 lg:w-1/4 rounded-xl w-1/4 h-32 lg:h-32" src="public\jee-main-result.webp"alt="" />

            <div class="mt-6 lg:w-3/4 lg:mt-0 lg:mx-6 ">

                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-black md:text-3xl">
                    IIT-JEE Results to be out mostly by Aug 2nd week.
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                JEE Main Result 2023 for Session 1 to be released on 6 February 2023 by the National Testing Agency (NTA) on the official website of the examination - jeemain.nta.nic.in. The link to download JEE Main 2023 Session 1 Result and Scorecard is available online. The JEE Main 2023 Session 1 examinations were conducted on 24, 25, 29, 30 , 31 January and 1 February 2023 for B.E./B.Tech (Paper I) and 28 January (2nd Shift) for B.Arch and B.Planning (Paper 2A & Paper 2B).
                </p>

                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                
            </div>
        </div>

        <div class="sm:p-8 sm:pl-8 p-4 pl-0 pt-0 pb-0 mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="sm:block hidden  object-cover w-full lg:mx-6 lg:w-1/4 w-1/4 rounded-xl  h-32 lg:h-32" src="public\neet-res.webp"alt="" />

            <div class="mt-6 lg:w-3/4 lg:mt-0 lg:mx-6 ">
                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-black md:text-3xl">
                    NEET Results to be out soon?
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                NEET Result 2023 for Session 1 to be released on 6 May 2023 by the National Testing Agency (NTA) on the official website of the examination - jeemain.nta.nic.in. The link to download JEE Main 2023 Session 1 Result and Scorecard is available online. The JEE Main 2023 Session 1 examinations were conducted on 24, 25, 29, 30 , 31 January and 1 February 2023 for B.E./B.Tech (Paper I) and 28 January (2nd Shift).
                </p>

                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>
            </div>
        </div>

    </div>
</div>
</div>
        </>
    )
}