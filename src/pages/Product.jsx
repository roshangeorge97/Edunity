import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Navigation from './Navigation'
import { useNavigate } from 'react-router-dom'

const product = {
  name: 'Electrostatics Handwritten Notes',
  price: 'Rs.56',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://drive.google.com/uc?export=view&id=17wCqvLkOiKN3ZDaaUc3QD8BJpvr8d3bp',
      alt: '',
    },
    {
      src: 'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
      alt: '',
    },
    {
      src: 'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
      alt: '',
    },
    {
      src: 'https://drive.google.com/uc?export=view&id=15sWK-0Jj_aapwGJBxP-VPAr2s5RNb_wa',
      alt: '',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'Looking to boost your preparation for IIT JEE exams in electrostatics? Look no further, as I am offering my exclusive handwritten notes that have been crafted with utmost care and attention to detail. These notes are a result of my personal study and examination experiences, and are designed to be concise, easy to understand, and cover all the important topics.',
  highlights: [
    'Concise and easy-to-understand format, making learning and retaining information effortless.',
    'Unique and personal notes, created specifically for IIT JEE preparation in electrostatics.',
    'Includes clear explanations, diagrams, and examples to reinforce the material and give a fresh perspective on the subject.',
  ],
  details:
    'The notes are organized in a way that makes learning and retaining information an effortless process. I have used clear and simple language to explain complex concepts, and have also included plenty of diagrams and examples to help reinforce the material.Not only are these notes a great study aid, but they are also unique. You wont find these notes anywhere else, as they have been created specifically for this purpose. They provide a fresh perspective on the subject, and are sure to give you an edge over other students.In conclusion, if you are looking to excel in electrostatics in your IIT JEE exams, these notes are a must-have. I am confident that they will be a valuable asset in your study journey and help you achieve your desired results. Order now and take your first step towards success!',
}
const reviews = { href: '#', average: 4, totalCount: 13 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const navigate = useNavigate();

  function goCart(){
    navigate('/cart');
  }

  return (
    <>
    <Navigation/>
    <div className="bg-yellow">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}

              {/* Sizes */}
              

              <button
              onClick={goCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
               Buy
              </button>
             
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}