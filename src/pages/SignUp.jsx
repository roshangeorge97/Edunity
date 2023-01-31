import { LockClosedIcon } from '@heroicons/react/20/solid'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'
import {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../firebase-config'

export default function SignUp() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();

    function register(e){
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
      const user = userCredential.user;
      const docRef = await addDoc(collection(db, "users"), {
        email: user.email,
        pendingFriendRequests: [],
        friends: []
      });

      console.log("Document written with ID: ", docRef.id);

    navigate("/signin");
    // ...
  })

  .catch((error) => {
    alert("User already exists, please Login!")
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }

  return (
    <>
      <head>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </head>
        
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black text-yellow">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow focus:outline-none focus:ring-yellow sm:text-sm"
                  placeholder="Email address"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  value={password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Already have an Account?
                </a>
              </div>
            </div>

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={register}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
