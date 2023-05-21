import Navigation from "./Navigation";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


const filters = [
    {
      id: 'color',
      name: 'Exam',
      options: [
        { value: 'white', label: 'IIT-JEE', checked: false },
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
    { name: 'Physics', href: '#' },
    { name: 'Chemistry', href: '#' },
    { name: 'Maths', href: '#' },
    { name: 'Biology', href: '#' },
  ]
  

export default function Learn(){
    return(
 <>
 <Navigation />
 <div className="flex">
 <div className="w-1/4 p-5 sm:block hidden">
          <h2 className="bold decoration-8 font-semibold text-yellow">Filters</h2>
          <form className="mt-4 border-t border-gray-200 text-yellow">
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

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-yellow px-2 py-3 text-black hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
        </div>
 <div className="w-full">
 <ol class="relative border-l text-yellow">                  
 <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">February 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 1: Physics and Measurement</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li>
 <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 2: Kinematics</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">March-mid 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 3: Laws of Motion</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li>
 <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">April 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 4: Work, Energy and Power</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">May 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 5: Rotational Motion
</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">May-21 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 6: Gravitation</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">June 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 7: Properties of Solids and Liquids</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">June-12 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 8: Thermodynamics</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">June-21 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 9: Kinetic Theory of Gasses</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">July-7 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 10: Oscillations and Waves</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">July-21 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 11: Electrostatics</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">August-18 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 12: Current Electricity</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">August-23 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 13: Magnetic Effects of Current and Magnetism</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">September-4 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Unit 14: Electromagnetic Induction and Alternating Currents
</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">October-6 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 15: Electromagnetic Waves</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">November-13 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 16: Optics</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">December 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 17: Dual Nature of Matter and Radiation</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">January-18 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 18: Atoms and Nuclei</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">February-1 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 19: Electronic Devices</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li> <li class="mb-10 ml-4">
     <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
     <time class="mb-1 text-sm font-normal leading-none text-gray-400">February-9 2022</time>
     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Unit 20: Communication Systems</h3>
     <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-yellow border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cheat Sheets<svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
 </li>
</ol>
</div>
</div>
</>
    )
}