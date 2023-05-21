import { useEffect } from "react";
import Navigation from "./Navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useLocation } from "react-router-dom";


export default function Chat() {   
  const { state } = useLocation();
    const [data, setData] = useState([]); 

    useEffect(() => {  
      mentorsget();
    },[])
  
    const mentorsget= async ()=>{
      
      const docRef = doc(db, "mentors", state.post_id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data =  docSnap.data().data;
        console.log(data)
        setData(JSON.stringify(data))
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  }
    return (
      <>
      
      <Navigation/>
         <head>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </head>
      {data && Object.keys(data).length > 0 && 
<div class="rounded flex h-screen antialiased text-black bg-yellow px-2">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
    <div>

<div class="mt-8 text-center">
    <img src="https://drive.google.com/uc?export=view&id=1Dd3Vsx2Xz0lmoMZrwPWcd-ir-6oGRue8" alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
    <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{`${JSON.parse(data).firstName} ${JSON.parse(data).lastName}`}</h5>
    <span class="hidden text-gray-400 lg:block">IIT Madras</span>
</div>

<ul class="space-y-2 tracking-wide mt-8">
    <li>
        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
            </svg>
            <span class="group-hover:text-gray-700">My Files</span>
        </a>
    </li>
    <li>
        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            <span class="group-hover:text-gray-700">My Tests</span>
        </a>
    </li>
    <li>
        <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span class="group-hover:text-gray-700">Other data</span>
        </a>
    </li>
    <li>
        <a href="/requests" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
            </svg>
            <span class="group-hover:text-gray-700">Send Mentor Request</span>
        </a>
    </li>
    <li>
        <a href="/requests" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
            </svg>
            <span class="group-hover:text-gray-700">{`${JSON.parse(data).phone}`}</span>
        </a>
    </li>
</ul>
</div>
      <div class="flex flex-col flex-auto h-full p-4">
        <div
          class="text-black flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-black h-full p-4"
        >
          <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
              <div class="grid grid-cols-12 gap-y-2">
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                    <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                    </div>
                    <div
                      class="relative ml-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex  items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                    </div>
                    <div
                      class="relative mr-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div>Hi sir, I am having a doubt in this question, here is the picture..</div>
                    </div>
                  </div>
                </div>
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                    </div>
                    <div
                      class="relative ml-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div> Let's have a connect through a call, it would be easier to explain..</div>
                    </div>
                  </div>
                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex  items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                    </div>
                    <div
                      class="relative mr-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div>Hi sir, I am having a doubt in this question, here is the picture..</div>
                    </div>
                  </div>
                </div>   
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                    </div>
                    <div
                      class="relative ml-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                      Hope your doubts are solved. 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                      </div>
                    <div
                      class="relative ml-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div class="flex flex-row items-center">
                        <button
                          class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10"
                        >
                          <svg
                            class="w-6 h-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                        <div class="flex flex-row items-center space-x-px ml-4">
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-4 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-8 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-8 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-10 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-10 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-12 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-10 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-6 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-5 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-4 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-3 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-10 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-10 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-8 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-8 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-1 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-1 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-8 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-8 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-2 w-1 bg-black-500 rounded-lg"></div>
                          <div class="h-4 w-1 bg-black-500 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex  items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      <img src="https://drive.google.com/uc?export=view&id=1hVfPitn3aIPZUTzD3JDV6R9h4WO4CS6D" class="cursor-pointer w-10 h-10 rounded-3xl mr-3" />
                    </div>
                    <div
                      class="relative mr-3 text-sm bg-yellow py-2 px-4 shadow rounded-xl"
                    >
                      <div>I would like to make you as a Personal Mentor! Please accept my request.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            <div>
              <button
                class="flex items-center justify-center text-black hover:text-black"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                  type="text"
                  class="text-black flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
                <button
                  class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-black hover:text-black"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="ml-4">
              <button
                class="flex items-center justify-center bg-indigo-500 hover:bg-green rounded-xl text-black px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
  </>
  )
}