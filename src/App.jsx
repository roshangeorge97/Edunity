import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Example from "./pages/SignIn"
import Example1 from "./pages/Register"
import Mentors from "./pages/Mentors"
import Chat from "./pages/Chat"
import Students from "./pages/Students"
import SignUp from "./pages/SignUp"
import Marketplace from "./pages/Marketplace"
import Checkout from "./pages/Checkout"
import Mentor from "./pages/Mentor"
import Request from "./pages/Request"
import Learn from "./pages/Learn"
import Product from "./pages/Product"
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard"
import Feed from "./pages/Feed"
import Discuss from "./pages/Discuss"
import Classes from "./pages/Classes"
import Cart from "./pages/Cart"
import MentorView from "./pages/MentorView"
import Wallet from "./pages/Wallet"
import Profile from "./pages/Profile"
import { ViewProfile } from "./pages/ViewProfile"
import { Chat1 } from "./pages/Chat1"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/signin" element={ <Example/> }></Route>
        <Route path="/register" element={ <Example1/> }></Route>
        <Route path="/mentors" element={ <Mentors/> }></Route>
        <Route path="/chat" element={ <Chat/> }></Route>
        <Route path="/students" element={ <Students/> }></Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
        <Route path="/marketplace" element={ <Marketplace/> }></Route>
        <Route path="/checkout" element={ <Checkout/> }></Route>
        <Route path="/mentor" element={ <Mentor/> }></Route>
        <Route path="/requests" element={ <Request/> }></Route>
        <Route path="/learn" element={ <Learn/> }></Route>
        <Route path="/view" element={ <Product/> }></Route>
        <Route path="/update" element={ <Settings/> }></Route>
        <Route path="/dashboard" element={ <Dashboard/> }></Route>
        <Route path="/feed" element={ <Feed/> }></Route>
        <Route path="/discuss" element={ <Discuss/> }></Route>
        <Route path="/classes" element={ <Classes/> }></Route>
        <Route path="/cart" element={ <Cart/> }></Route>
        <Route path="/mentorview" element={ <MentorView/> }></Route>
        <Route path="/wallet" element={ <Wallet/> }></Route>
        <Route path="/profile" element={ <Profile/> }></Route>       
        <Route path="/mentorprofile" element={ <ViewProfile /> }></Route>
        <Route path="/chat1" element={ <Chat1 /> }></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App

