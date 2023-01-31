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
<div className="flex">
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
        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt="" />

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">category</p>

                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-black md:text-3xl">
                    All the features you want to know
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p>

                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-50 mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt="" />

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">category</p>

                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-black md:text-3xl">
                    All the features you want to know
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p>

                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</div>
        </>
    )
}