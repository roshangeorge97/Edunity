import { useState } from 'react';
import DialogBox from './DialogBox';
import Navigation from './Navigation';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid';
import Search from './Search';

export default function Marketplace() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const subjects = [
		{ name: 'Relevence', href: '#', current: true },
		{ name: 'Rating', href: '#', current: false },
		{ name: 'Alphabetical', href: '#', current: false },
	];

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
	];

	const subCategories = [
		{ name: 'Physics', href: '#' },
		{ name: 'Chemistry', href: '#' },
		{ name: 'Maths', href: '#' },
		{ name: 'Biology', href: '#' },
	];
	//----------------------------------------------------------------------------------------------------------------
	const products = [
		{
			id: 1,
			name: 'Carbony Compunds Notes',
			href: '#',
			imageSrc:
				'https://drive.google.com/uc?export=view&id=17wCqvLkOiKN3ZDaaUc3QD8BJpvr8d3bp',
			imageAlt: "Front of men's Basic Tee in black.",
			price: 'Rs.35',
			color: 'Black',
		},
		{
			id: 1,
			name: 'Electrostatics Handwritten Notes',
			href: '#',
			imageSrc:
				'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
			imageAlt: "Front of men's Basic Tee in black.",
			price: 'Rs.35',
			color: 'Black',
		},
		{
			id: 1,
			name: 'Thermodynamics Physics Notes',
			href: '#',
			imageSrc:
				'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
			imageAlt: "Front of men's Basic Tee in black.",
			price: 'Rs.35',
			color: 'Black',
		},
		{
			id: 1,
			name: 'Important Repeated Questions for NEET',
			href: '#',
			imageSrc:
				'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
			imageAlt: "Front of men's Basic Tee in black.",
			price: 'Rs.35',
			color: 'Black',
		},
		{
			id: 1,
			name: 'Circles Cheatsheet [All Formulas]',
			href: '#',
			imageSrc:
				'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
			imageAlt: "Front of men's Basic Tee in black.",
			price: 'Rs.35',
			color: 'Black',
		},
		// More products...
	];

	return (
		<>
			<Navigation />

			<div className="bg-yellow flex text-black">
				<div className="w-1/4 p-5 hidden sm:block">
					<a href="/view">
						<button className="ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green-600 mb-4">
							Create Post
						</button>
					</a>
					<h2 className="bold decoration-8 font-semibold mt-3">Filters</h2>
					<form className="mt-4 border-t border-gray-200">
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
							<Disclosure
								as="div"
								key={section.id}
								className="border-t border-gray-200 px-4 py-6"
							>
								{({ open }) => (
									<>
										<h3 className="-mx-2 -my-3 flow-root">
											<Disclosure.Button className="flex w-full items-center justify-between bg-yellow px-2 py-3 text-black hover:text-gray-500">
												<span className="font-medium text-gray-900">
													{section.name}
												</span>
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
															id={`filter-mobile-Rs.{section.id}-Rs.{optionIdx}`}
															name={`Rs.{section.id}[]`}
															defaultValue={option.value}
															type="checkbox"
															defaultChecked={option.checked}
															className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
														/>
														<label
															htmlFor={`filter-mobile-Rs.{section.id}-Rs.{optionIdx}`}
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
					<div className="flex flex-col text-black justify-between p-3">
						<p className="text-3xl bold text-black font-semibold flex p-4 ml-1">
							Latest Posts
						</p>
						<div className="flex items-center">
							<div className="p-5 hidden sm:block">
								<Search />
							</div>
							<Menu as="div" className="relative inline-block text-left flex">
								<div>
									<Menu.Button className="ml-5 group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
										Sort
										<ChevronDownIcon
											className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
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
																option.current
																	? 'font-medium text-gray-900'
																	: 'text-gray-500',
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

							<button
								type="button"
								className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-4"
							>
								<span className="sr-only">View grid</span>
								<Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
							</button>
							<button
								type="button"
								className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="sr-only">Filters</span>
								<FunnelIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
					<div className="mx-auto max-w-2xl py-8 px-4 sm:py-9 sm:px-6 lg:max-w-7xl lg:px-8">
						<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
							{products.map((product) => (
								<div
									key={product.id}
									className="group bg-black p-4 rounded-lg text-yellow"
								>
									<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 group-hover:scale-105">
										<img
											src={product.imageSrc}
											alt={product.imageAlt}
											className="h-full w-full object-cover object-center transform group-hover:scale-80"
										/>
									</div>
									<div className="flex justify-between mt-2">
										<h3 className=" text-lg font-medium text-gray-700 m-1">
											{product.name}
										</h3>
										<p className="text-lg font-medium text-gray-900 m-1">
											{product.price}
										</p>
									</div>
									<div className=" text-lg font-medium text-gray-700 m-1 mt-2 mb-2">
										<div class="flex items-center">
											Rating:
											<div class="flex items-center fill-red">
												{Array.from({ length: 5 }, (_, i) => (
													<svg
														key={i}
														className="w-4 h-4 text-black-400 fill-current"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M10 1.05l2.928 5.644 6.567.958-4.75 4.355 1.12 6.823L10 15.789l-5.864 3.041 1.12-6.823-4.75-4.355 6.567-.958z" />
													</svg>
												))}
											</div>{' '}
											<span class=" text-sm ml-1">(3.5)</span>{' '}
										</div>
										<span>{product.rating}</span>
									</div>
									<div className="relative flex justify-between">
										<button
											onClick={() => setIsDialogOpen(true)}
											className="bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green-600"
										>
											Add to cart
										</button>
										<a href="/view">
											<button className="ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green-600">
												View
											</button>
										</a>
										{isDialogOpen && (
											<DialogBox onClose={() => setIsDialogOpen(false)} />
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
