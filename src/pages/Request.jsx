import Navigation from "./Navigation"
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { doc,updateDoc,arrayUnion,arrayRemove } from "firebase/firestore";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Cookies from "universal-cookie";
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
import { useNavigate } from "react-router-dom";
import { AppWrapper } from "./AppWrapper";
import { Auth } from "./Auth";
import { Email } from "@mui/icons-material";

export default function Request(){
  const cookies = new Cookies();
  const navigate = useNavigate();

  function goRoom(){
    navigate('/chat1',
    {
        state: {
            room: room,
        }
    });
  }

  const handleView = () => {
    navigate('/chat',
            {
                state: {
                    post_id: friend,
                }
            });
    }

    function handleAcceptRequest(uidfr) {    
        // Reference current user's document in the "users" collection
        const currentUserRef = doc(db,"users",currentUser.uid);
      
        // Reference friend's document in the "users" collection
        const friendRef = doc(db,"users",uidfr);
  
        // Add friendId to current user's friends
        updateDoc(currentUserRef,{
          friends: arrayUnion(uidfr)
        });
      
        // Add current user's id to friend's friends
        updateDoc(friendRef,{
          friends: arrayUnion(currentUser.uid)
        });
  
        // remove friend request from pending list
        updateDoc(friendRef,{
          pendingFriendRequests: arrayRemove(currentUser.uid)
        });
  
        updateDoc(currentUserRef,{
          incomingFriendRequests: arrayRemove(uidfr)
        });
      }

      function setEmail(id){
        const unsubscribe = onSnapshot(doc(db, "users", id), (doc) => {
          if (doc.exists()) {
            const incomingRequest = doc.data().email;
            setFriend(incomingRequest);
          }
        });
        return () => unsubscribe();
      }

const currentUser = auth.currentUser;
const [incomingRequests, setIncomingRequests] = useState([]);
const [friends,setFriends] = useState([]);
const [friend,setFriend] = useState("");
const [room, setRoom] = useState("");
const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
const [isInChat, setIsInChat] = useState(null);

useEffect(() => {
  const unsub = onAuthStateChanged(auth,(user) => {
    if (user) {
  const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
    if (doc.exists()) {
      const incomingRequests = doc.data().incomingFriendRequests;
      const friends = doc.data().friends;

      // Update state with new values
      setIncomingRequests(incomingRequests);
      console.log("incoming requests:"+incomingRequests)
      setFriends(friends);
      console.log("friends:"+friends)

    }
  });
  return () => unsubscribe();
}})
return () => unsub();
}, []);


  return(
    <>
<Navigation />
<h2 className="text-2xl font-bold leading-7 text-yellow sm:truncate sm:text-3xl sm:tracking-tight p-4">Requests</h2>
{incomingRequests.map((request, index) => (
    <div key={index}>
<div className="lg:flex lg:items-center lg:justify-between p-20 pt-5 pb-5 bg-yellow m-20 mt-10 rounded-lg">
<div className="min-w-0 flex-1">
{incomingRequests[index]}
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
</div>
</div>
))}
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
    onClick={() => handleAcceptRequest(incomingRequests[index])}
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

<h2 className="text-2xl font-bold leading-7 text-yellow sm:truncate sm:text-3xl sm:tracking-tight p-4">Students</h2>



{friends.map((request, index) => (
    <div key={index} className="text-black lg:flex lg:items-center lg:justify-between p-20 pt-5 pb-5 bg-yellow m-20 mt-10 rounded-lg">
      <p className="text-black">{friends[index]}</p><button onClick={()=>handleView()}>Chat</button>
  </div>
))}

    </>
  )
}