import Navigation from "./Navigation"
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { doc,updateDoc,arrayUnion,arrayRemove } from "firebase/firestore";
import { Menu, Transition } from '@headlessui/react'

export default function Classes(){
  const currentUser = auth.currentUser;
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [friends,setFriends] = useState([]);
  const [friend,setFriend] = useState("");
  function setEmail(id){
    const unsubscribe = onSnapshot(doc(db, "users", id), (doc) => {
      if (doc.exists()) {
        const incomingRequests = doc.data().email;
        setFriend(incomingRequests);
      }
    });
    return () => unsubscribe();
  }
  useEffect(() => {
    const unsub = onAuthStateChanged(auth,(user) => {
      if (user) {
    const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
      if (doc.exists()) {
        const incomingRequests = doc.data().incomingFriendRequests;
        const friends = doc.data().friends;
  
        // Update state with new values
        setIncomingRequests(incomingRequests);
        console.log(incomingRequests)
        setFriends(friends);
        console.log(friends)
        setEmail(incomingRequests[0]);
      }
    });
  
    return () => unsubscribe();
  }})
  return () => unsub();
  }, []);
    return(
        <>
        
   <Navigation/>
<div class="sm:overflow-hidden overflow rounded-lg border border-gray-200 shadow-md m-5">
{friends.map((request, index) => (
    <div key={index} className="text-black lg:flex lg:items-center lg:justify-between p-20 pt-5 pb-5 bg-yellow m-20 mt-10 rounded-lg">
      <p className="text-black">{friend}</p><button onClick={()=>handleView()}>Chat</button>
      <p className="text-black">{friends[1]}</p>
      <p className="text-black">{friends[2]}</p>
      <p className="text-black">{friends[3]}</p>
  </div>
))}
  <table class="w-full border-collapse bg-yellow text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Mentor</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Subject</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Last Seen</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Connect</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
    <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-10 w-10">
            <img
              class="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-yellow"></span>
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">{friend}</div>
            <div class="text-gray-400">mentor@iopedsika.com</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="flex-row sm:flex  items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Biology
          </span>
        </td>
        <td class="px-6 py-4">12:00am</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
               <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Chat</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Meet</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">My Files</button>
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
              </svg>
            </a>
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-10 w-10">
            <img
              class="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-yellow"></span>
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">Sherika Johns</div>
            <div class="text-gray-400">mentor@iopedsika.com</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="flex-row sm:flex  items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Biology
          </span>
        </td>
        <td class="px-6 py-4">12:00am</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
               <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Chat</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Meet</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">My Files</button>
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
              </svg>
            </a>
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-10 w-10">
            <img
              class="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-yellow"></span>
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">Sherika Johns</div>
            <div class="text-gray-400">mentor@iopedsika.com</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="flex-row sm:flex  items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Biology
          </span>
        </td>
        <td class="px-6 py-4">12:00am</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
               <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Chat</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Meet</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">My Files</button>
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
              </svg>
            </a>
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-10 w-10">
            <img
              class="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-yellow"></span>
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">Devandra Koushik</div>
            <div class="text-gray-400">mentor@hanuanidev.com</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="flex-row sm:flex  items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Chemistry
          </span>
        </td>
        <td class="px-6 py-4">12:00am</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
               <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Chat</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Meet</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">My Files</button>
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </a>
          </div>
        </td>
      </tr>
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="relative h-10 w-10">
            <img
              class="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-yellow"></span>
          </div>
          <div class="text-sm">
            <div class="font-medium text-gray-700">Ambani Karthi</div>
            <div class="text-gray-400">mentor@dud.com</div>
          </div>
        </th>
        <td class="px-6 py-4">
          <span
            class="flex-row sm:flex  items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            Chemistry
          </span>
        </td>
        <td class="px-6 py-4">12:00am</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Chat</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">Meet</button>
            </span>
            <span
              class="flex-row sm:flex  items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
            >
              <button className="text-yellow ml-5 bg-green text-black font-medium py-2 px-4 rounded-lg hover:bg-green">My Files</button>
            </span>
          </div>
        </td>
        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <a x-data="{ tooltip: 'Edite' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    )
}