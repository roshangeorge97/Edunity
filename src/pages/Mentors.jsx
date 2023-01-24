import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { db } from "../../firebase-config";
import { updateDoc,doc,collection, addDoc,arrayUnion,arrayRemove} from "firebase/firestore"; 
import { auth } from "../../firebase-config";

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
      imageSrc:'src\\assets\\undraw_Male_avatar_re_nyu5 (1).png',
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
  
  export default function Mentors() {
   const navigate = useNavigate();
   
    async function connect(){
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: "John Doe",
          email: "johndoe@example.com",
          pendingFriendRequests: [],
          friends: []        
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    function handleFriendRequest() {
             // Get current user
             const currentUser = auth.currentUser;
      
             // Reference current user's document in the "users" collection
             const currentUserRef = doc(db,"users","hYnPcWf3C2OIpmWf4u0R");
           
             // Reference friend's document in the "users" collection
             const friendRef = doc(db,"users","YjzRnfhIFVRDmcc5sCxp");
           
             // Add friendId to current user's pendingFriendRequests
             updateDoc(currentUserRef,{
               pendingFriendRequests: arrayUnion("YjzRnfhIFVRDmcc5sCxp")
             });
           
             // Add current user's id to friend's incomingFriendRequests
             updateDoc(friendRef,{
               incomingFriendRequests: arrayUnion("hYnPcWf3C2OIpmWf4u0R")
             });
    }


    function handleAcceptRequest() {
      // Get current user
      const currentUser = auth.currentUser;
    
      // Reference current user's document in the "users" collection
      const currentUserRef = doc(db,"users","hYnPcWf3C2OIpmWf4u0R");
    
      // Reference friend's document in the "users" collection
      const friendRef = doc(db,"users","YjzRnfhIFVRDmcc5sCxp");
    
      // Add friendId to current user's friends
      updateDoc(currentUserRef,{
        friends: arrayUnion("YjzRnfhIFVRDmcc5sCxp")
      });
    
      // Add current user's id to friend's friends
      updateDoc(friendRef,{
        friends: arrayUnion("hYnPcWf3C2OIpmWf4u0R")
      });
      // remove friend request from pending list
      updateDoc(currentUserRef,{
        pendingFriendRequests: arrayRemove("YjzRnfhIFVRDmcc5sCxp")
      });
      updateDoc(friendRef,{
        incomingFriendRequests: arrayRemove("hYnPcWf3C2OIpmWf4u0R")
      });
    }

    return (
        <>
        
          <head>
        <link href="/dist/output.css" rel="stylesheet"></link>
      </head>
      <Navigation/>
      <div className="bg-white">
      <h3 className="text-2xl bold p-2 text-yellow">Available Mentors</h3>
        <div className=" text-yellow mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <button onClick={handleFriendRequest} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Request</button>

                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <button onClick={handleAcceptRequest} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-0">Accept</button>
                <button onClick={connect} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ml-0">Add User</button>
              </a>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  