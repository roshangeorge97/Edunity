import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation"


const products = [
    {
        id: 1,
        name: 'Physics',
        price: 'Rishwanth K',
        imageSrc: 'src\\assets\\undraw_Male_avatar_re_nyu5 (1).png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Chemistry',
        price: 'Pranav Makur',
        imageSrc: 'src\\assets\\undraw_Male_avatar_re_nyu5 (1).png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Biology',
        price: 'Gosalya G',
        imageSrc: 'src\\assets\\undraw_Male_avatar_re_nyu5 (1).png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Maths',
        price: 'Timberlake Chan',
        imageSrc: 'src\\assets\\undraw_Male_avatar_re_nyu5 (1).png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function Students() {
    const navigate = useNavigate();
    function connect(){
      navigate("/chat");
    }

    return (
        <>
          <head>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </head>
      <Navigation/>
      <div className="bg-white text-yellow">
      <h3 className="text-2xl bold p-2 text-yellow">Available Mentors</h3>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                   <button onClick={connect} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Accept</button>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  