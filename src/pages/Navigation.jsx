import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useState,useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { onSnapshot } from "firebase/firestore";
import { doc,updateDoc,arrayUnion,arrayRemove } from "firebase/firestore";
import { db } from "../../firebase-config";


const navigation = [
  { name: 'Explore', href: '/mentors', current: true },
  { name: 'My Classes', href: '/classes', current: false },
  { name: 'Marketplace', href: '/marketplace', current: false },
  {  name: 'Signup', href: '/signup', current: false }

]

export default function Navigation(){
  const [incomingRequests, setIncomingRequests] = useState([]);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth,(user) => {
      if (user) {
  // Get the user document from the "users" collection
  const unsubscribe = onSnapshot(doc(db, "users", "N7YBLxRR7rB5Ys9ykV1p"), (doc) => {
    // check if the data is from the server or local
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(doc.data());
    setIncomingRequests(doc.data().incomingFriendRequests);
    console.log("r",incomingRequests.length,"lh");
  });
  return () => unsubscribe();
}
});
return () => unsub();

}, []);
 
  function signout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        // ...
      } else {
        setEmail("");
      };
    });
    return () => unsub();
    }, []);
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
  const [email, setEmail] = useState("");
    return(
        <>

            <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-yellow hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href='/'><img
                    className="block h-8 w-auto lg:hidden"
                    src="https://drive.google.com/uc?export=view&id=1AZBHxBPq0Es_DqHzWMzQ6PvBFEYWBoAb"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://drive.google.com/uc?export=view&id=1AZBHxBPq0Es_DqHzWMzQ6PvBFEYWBoAb"
                    alt="Your Company"
                  />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-yellow' : 'text-yellow hover:bg-gray-700 hover:text-yellow',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href='/mentor'><button className='hidden sm:block text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green'>Become a Mentor</button></a>
               <a href='/cart'><div className='hidden sm:block ml-3'> <svg fill="#E9D758" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="20px" height="20px" viewBox="0 0 902.86 902.86"
	 xml:space="preserve">
<g>
	<g>
		<path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
		<path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z"/>
	</g>
</g>
</svg>
</div>
</a>
    <a href='/feed'><button className="hidden sm:block px-4 py-2 text-sm text-yellow">Feed</button></a>
             
                <button
                  type="button"
                  className="hidden sm:block rounded-full bg-yellow-800 p-1 text-yellow hover:text-yellow focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <a href='/requests'>
                  <div className="relative">
  <BellIcon className="h-6 w-6" aria-hidden="true" />
                  {incomingRequests.length > 0 && (
   <a className="absolute top-0 right-0 -mr-2 -mt-0 rounded-full bg-red h-2 w-2"></a>
)}
</div>
</a>

                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://drive.google.com/uc?export=view&id=1Dd3Vsx2Xz0lmoMZrwPWcd-ir-6oGRue8"
                        alt=""
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-yellow py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/dashboard"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-yellow-700')}
                          >
                            Dashboard
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/update"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-yellow-700')}
                          >
                            Update Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                    <a href="/learn"> <button className="block px-4 py-2 text-sm text-yellow-700" onClick={() => signout()}>Learn</button></a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            
                            <button className="block px-4 py-2 text-sm text-yellow-700" onClick={() => signout()}>Sign Out</button>
                       
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                                 <a
                                 href="#"
                                 className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-yellow-700')}
                               >
                                 {email}
                               </a>
                          
                       
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-yellow-900 text-yellow' : 'text-yellow hover:bg-yellow-900 hover:text-yellow',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
        </>
    )
}