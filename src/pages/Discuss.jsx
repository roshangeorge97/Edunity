import { Transition } from "@headlessui/react"
import { Menu } from "@headlessui/react"
import { Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Navigation from "./Navigation"


const subjects = [
	{ name: 'Communities', href: '#', current: true },
	{ name: 'Groups', href: '#', current: false },
	{ name: 'My Groups', href: '#', current: false },
	{ name: 'Friends', href: '#', current: false },
  ]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }

export default function Discuss(){

    return(
        <>
		<Navigation/>
<div class="font-sans antialiased h-screen flex py-3 bg-black text-black p-4">

	<div class="rounded-l bg-yellow border-black border-b black flex-none w-24 p-6 hidden md:block">
		<div class="cursor-pointer mb-4 border-b border-black pb-2">
			<div
				class="bg-black h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
				<img src="src\assets\react.svg" alt="" />
            </div>
			</div>
			<div class="cursor-pointer mb-4">
				<div
					class="bg-black h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-xl mb-1 overflow-hidden">
					<img src="src\assets\react.svg" alt="" />
            </div>
				</div>
				<div class="cursor-pointer mb-4">
					<div
						class="bg-black h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
						<img src="src\assets\react.svg" alt="" />
            </div>
					</div>
					<div class="cursor-pointer mb-4">
						<div
							class="bg-black h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
							<img src="src\assets\react.svg" alt="" />
            </div>
						</div>
						<div class="cursor-pointer mb-4">
							<div
								class="bg-black h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
								<img src="src\assets\react.svg" alt="" />
            </div>
							</div>
							<div class="cursor-pointer mb-4">
								<div
									class="bg-black h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
									<img src="src\assets\react.svg" alt="" />
            </div>
								</div>
								<div class="cursor-pointer">
									<div
										class="bg-black opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
										<svg class="fill-current h-10 w-10 block" xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20">
											<path
												d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
										</svg>
									</div>
								</div>



							</div>
							<div class="bg-yellow text-black flex-none w-64 pb-6 hidden md:block">
								<div
									class="text-black mb-2 mt-3 px-4 flex justify-between border-b border-black py-1 shadow-xl">
									<div class="flex-auto ">
									<Menu as="div" className="relative inline-block text-left flex">
									<div className="flex p-1 pl-0">
                  <Menu.Button className="group inline-flex justify-between text-sm font-medium text-gray-700 hover:text-gray-900">
				  <h1 class="font-semibold text-2x1 leading-tight mb-1 truncate">General</h1>
				  <div>
										<svg class="arrow-gKvcEx icon-2yIBmh opacity-50 cursor-pointer" width="24"
											height="15" viewBox="0 0 24 24">
											<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
												d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z">
											</path>
										</svg>
									</div>
                  </Menu.Button>
                </div>
										
										
										<Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="text-black absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-yellow shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {subjects.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                  </Menu.Items>
				  </Transition>
				  </Menu>
									</div>

								</div>
								<div class="mb-8">
									<div class="px-4 mb-2 text-black flex justify-between items-center">
										<div class="   cursor-pointer">Groups</div>
										<div>
											<svg class="fill-current h-5 w-5 opacity-50 cursor-pointer"
												xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
												<path
													d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
											</svg>
										</div>
									</div>
									<div class="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-black">Physics Modrics</div>
									<div class="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-black">Physics Sigars</div>
									<div class="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-black">Physics Wallah</div>
								</div>
								<div class="mb-8">
									<div class="px-4 mb-2 text-black flex justify-between items-center">
										<div class="  cursor-pointer">My Groups</div>
										<div>
											<svg class="fill-current h-5 w-5 opacity-50 cursor-pointer"
												xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
												<path
													d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
											</svg>
										</div>
									</div>
									<div
										class="bg-teal-dark hover:bg-gray-800 cursor-pointer font-semibold py-1 px-4 text-black">Physics Rides</div>
								</div>
								<div class="mb-8">
									<div class="px-4 mb-2 text-black flex justify-between items-center">
										<div class="  cursor-pointer">Communities</div>
										<div>
											<svg class="fill-current h-5 w-5 opacity-50 cursor-pointer"
												xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
												<path
													d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
											</svg>
										</div>
									</div>
									<div
										class="bg-teal-dark hover:bg-gray-800 cursor-pointer font-semibold py-1 px-4 text-black">Physics Rides</div>
								</div>
								<div class="mb-8">
									<div class="px-4 mb-2 text-black flex justify-between items-center">
										<div class="  cursor-pointer">Friends</div>
										<div>
											<svg class="fill-current h-5 w-5 opacity-50 cursor-pointer"
												xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
												<path
													d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
											</svg>
										</div>
									</div>
									<div
										class="bg-teal-dark hover:bg-gray-800 cursor-pointer font-semibold py-1 px-4 text-black">Physics Rides</div>
								</div>
							</div>
						
							<div class="flex-1 flex flex-col bg-gray-700 overflow-hidden">
							
								<div class="border-b border-gray-600 flex px-6 py-2 items-center flex-none shadow-xl">
									<div class="flex flex-col">
										<h3 class="text-yellow mb-1 font-bold text-xl text-gray-100">Physics Rides</h3>
									</div>
								</div>
					
								<div class="px-6 py-4 flex-1 overflow-y-scroll">
							
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">09:23</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
								
						
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">09:24</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">09:26</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
								
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">10:00</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
								
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">10:20</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">10:23</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">10:30</span>
											</div>
											<p class="text-yellow leading-normal">I have a doubt!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">10:50</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">11:30</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
						
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">11:37</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
								
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">11:45</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">11:50</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
								
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">11:55</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
								
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">11:59</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
									
									<div class="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
										<img src="src\assets\undraw_Male_avatar_re_nyu5 (1).png" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
										<div class="flex-1 overflow-hidden">
											<div>
												<span class="font-bold text-yellow cursor-pointer hover:underline">User</span>
												<span class="font-bold text-gray-400 text-xs">12:00</span>
											</div>
											<p class="text-yellow leading-normal">exclusive cheatsheet!</p>
										</div>
									</div>
									
								</div>
								<div class="pb-6 px-4 flex-none">
									<div class="flex rounded-lg overflow-hidden">
									<span class="text-3xl text-grey border-r-4 border-gray-600 bg-gray-600 p-2">					
                    <svg class="h-6 w-6 block bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" fill="#FFFFFF"/>
					</svg>
                  </span>
						<input type="text" class="w-full px-4 bg-gray-600 text-black" placeholder="Message Doubts" />
            </div>
									</div>
								</div>
							</div>
        </>
    )
}