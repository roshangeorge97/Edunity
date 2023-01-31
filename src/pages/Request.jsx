import Navigation from "./Navigation"
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { doc,updateDoc,arrayUnion,arrayRemove } from "firebase/firestore";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'

export default function Request(){
    function handleAcceptRequest(index) {    
        // Reference current user's document in the "users" collection
        const currentUserRef = doc(db,"users","OlspoWznSsmQ4XLfjRvN");
      
        // Reference friend's document in the "users" collection
        const friendRef = doc(db,"users","N7YBLxRR7rB5Ys9ykV1p");
  
        // Add friendId to current user's friends
        updateDoc(currentUserRef,{
          friends: arrayUnion("N7YBLxRR7rB5Ys9ykV1p")
        });
      
        // Add current user's id to friend's friends
        updateDoc(friendRef,{
          friends: arrayUnion("OlspoWznSsmQ4XLfjRvN")
        });
  
        // remove friend request from pending list
        updateDoc(currentUserRef,{
          pendingFriendRequests: arrayRemove("N7YBLxRR7rB5Ys9ykV1p")
        });
  
        updateDoc(friendRef,{
          incomingFriendRequests: arrayRemove("OlspoWznSsmQ4XLfjRvN")
        });
      }
    const currentUser = auth.currentUser;
const [incomingRequests, setIncomingRequests] = useState([]);
const [friends,setFriends] = useState([]);
useEffect(() => {
    const unsub = onAuthStateChanged(auth,(user) => {
      if (user) {
  // Get the user document from the "users" collection
  const unsubscribe = onSnapshot(doc(db, "users", "N7YBLxRR7rB5Ys9ykV1p"), (doc) => {
    // check if the data is from the server or local
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(doc.data());
    setIncomingRequests(doc.data().incomingFriendRequests);
    console.log("r",incomingRequests);
    setFriends(doc.data().friends);
    console.log("f",friends);
  });
  return () => unsubscribe();
}
});
return () => unsub();

}, []);

  return(
    <>
<Navigation />
<h2 className="text-2xl font-bold leading-7 text-yellow sm:truncate sm:text-3xl sm:tracking-tight p-4">Requests</h2>
<div className="lg:flex lg:items-center lg:justify-between p-20 pt-5 pb-5 bg-yellow m-20 mt-10 rounded-lg">
<div className="min-w-0 flex-1">
{incomingRequests.map((request, index) => (
    <div key={index}>
        <h2 className="font-bold leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight">
  {currentUser.email}
  </h2>
  </div>
))}
  <div className="text-black mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
    <div className="mt-2 flex items-center text-sm text-gray-500">
      <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
      Chennai
    </div>
    <div className="mt-2 flex items-center text-sm text-gray-500">
      <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
      Evening
    </div>
  </div>
</div>
<div className="mt-5 flex lg:mt-0 lg:ml-4">

  <span className="ml-3 hidden sm:block">
    <button
      type="button"
      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >Reject
    </button>
  </span>

  <span className="sm:ml-3">
  {incomingRequests.map((request, index) => (
    <div key={index}>
            <button
    onClick={() => handleAcceptRequest(index)}
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-green px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      Accept
    </button>
  </div>
))}

  </span>

  {/* Dropdown */}
  <Menu as="div" className="relative ml-3 sm:hidden">
    <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      More
      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
    </Menu.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >

    </Transition>
  </Menu>
</div>
</div>
<h2 className="text-2xl font-bold leading-7 text-yellow sm:truncate sm:text-3xl sm:tracking-tight p-4">Students</h2>



{friends.map((request, index) => (
    <div key={index} className="text-black lg:flex lg:items-center lg:justify-between p-20 pt-5 pb-5 bg-yellow m-20 mt-10 rounded-lg">
      <p className="text-black">{friends[0]}</p>
      <p className="text-black">{friends[1]}</p>
      <p className="text-black">{friends[2]}</p>
      <p className="text-black">{friends[3]}</p>
  </div>
))}

    </>
  )
}