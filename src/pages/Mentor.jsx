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
         
        <div className="mt-5 md:col-span-2 md:mt-0  flex flex-col justify-center">

<form onSubmit={handleSubmit} method="POST" className='w-full flex flex-col py-6 gap-6'>

  <div className="overflow-hidden shadow sm:rounded-md shadow-gray-600">

    <div className="bg-white px-3 py-4">

         <div className="flex flex-col w-full gap-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-white">Upload File</label>
        <input onChange={handleChange} accept="/image/*"  className="block w-full text-lg text-gray-700 rounded-lg cursor-pointer" type="file"
       
        />

        <div className="flex gap-5 mt-3"> 
                 <button className='rounded-lg border-[1px] border-yellow w-30 text-black text-m px-2 active:outline-none h-10 cursor-pointer hover:bg-yellow hover:bg-opacity-57 hover:text-white' onClick={handleUpload}>Upload to Firebase</button>
                <p className="text-center justify-center my-2">{percent} "% done"</p>
            </div>

        </div>
        
        

        <div className="md:flex w-full gap-5 my-5">
            <div className="flex flex-col md:w-[50%] gap-2">
              <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow sm:text-sm"
                value={firstName}
                onChange={(e)=>setfirstName(e.target.value)}
              />
            </div>

        <div className="flex flex-col md:w-[50%] mt-3 md:mt-0 gap-2">
          <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-yellow focus:ring-yellow sm:text-sm"
            value={lastName}
            onChange={(e)=>setlastName(e.target.value)}
          />
        </div>


        </div>
      
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="text"
            name="email-address"
            id="email-address"
            autoComplete="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow sm:text-sm"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            PhoneNumber
          </label>
          <input
            type="text"
            name="email-address"
            id="email-address"
            autoComplete="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-yellow focus:ring-yellow sm:text-sm"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
            Street address
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-yellow focus:ring-yellow sm:text-sm"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow sm:text-sm"
            value={subject}
            onChange={(e)=>setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
            Language
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-yellow focus:ring-yellow sm:text-sm"
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
          />
        </div>


        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 dark:text-white">
            Resume
          </label>
          <input
            type="file"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 block w-full text-lg rounded-md border-gray-300 shadow-sm  focus:border-yellow focus:ring-yellow sm:text-sm"
          />
        </div>

    </div>
    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center rounded-md py-2 px-4 text-m font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        rounded-lg border border-white bg-yellow text-white w-30 text-black text-m px-2 active:outline-none h-10 cursor-pointer hover:bg-green hover:text-yellow hover:border-green"
      >
        Submit
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