import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useState,useEffect } from "react";
import { db } from "../../firebase-config";
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

export const ViewProfile =() =>{
  const { state } = useLocation();
    const [data, setData] = useState([]);
    const [mentors,setMentors] = useState([]);

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
   {data && Object.keys(data).length > 0 && 
    <div className="overflow-hidden bg-yellow shadow sm:rounded-lg ">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Mentors Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Mentors Details</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {`${JSON.parse(data).firstName} ${JSON.parse(data).lastName}`}</dd>
          </div>
          <div className="bg-yellow px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${JSON.parse(data).subject}`}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${JSON.parse(data).email}`}</dd>
          </div>
        
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Language</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${JSON.parse(data).language}`}
            </dd>
          </div>
          <div className="bg-yellow px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">resume.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    }
    </>
  )
}
