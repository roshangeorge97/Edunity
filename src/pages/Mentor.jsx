import { useState } from "react";
import { db } from "../../firebase-config";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { ref,getDownloadURL,uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase-config";

export default function Mentor(){
  const [email,setEmail] = useState("");
  const [firstName,setfirstName] = useState("");
  const [lastName,setlastName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [subject,setSubject] = useState("");
  const [language,setLanguage] = useState("");
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
 
      // Handle file upload event and update state
      function handleChange(event) {
          setFile(event.target.files[0]);
      }
   
      const handleUpload = () => {
          if (!file) {
              alert("Please upload an image first!");
          }
   
          const storageRef = ref(storage, `/files/${file.name}`);
   
          // progress can be paused and resumed. It also exposes progress updates.
          // Receives the storage reference and the file to upload.
          const uploadTask = uploadBytesResumable(storageRef, file);
   
          uploadTask.on(
              "state_changed",
              (snapshot) => {
                  const percent = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  );
   
                  // update progress
                  setPercent(percent);
  console.log("uploaded!")
              },
              (err) => console.log(err),
              () => {
                  // download url
                  getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                      console.log(url);
                  });
              }
          );
      };
   

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phone,
      address,
      email,
      subject,
      language,
    }

// Add a new document in collection "cities"
await setDoc(doc(db, "mentors", email), {
  data: data,
});
    console.log(data);
  }
  

  
    return(
        <>
        <div className="p-3 bg-yellow justify-center">
      <div className="mt-10 sm:mt-0 bg-yellow">
        <div className="md:grid md:grid-cols-3 md:gap-6 bg-yellow">
         
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit} method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  
                  <div className="grid grid-cols-6 gap-6">

                  <div>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
                    
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={firstName}
                        onChange={(e)=>setfirstName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={lastName}
                        onChange={(e)=>setlastName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        PhoneNumber
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Language
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={language}
                        onChange={(e)=>setLanguage(e.target.value)}
                      />
                    </div>


                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Resume
                      </label>
                      <input
                        type="file"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


    
      </div>
      </>
    )
}