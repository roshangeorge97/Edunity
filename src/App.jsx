import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Example from "./pages/SignIn"
import Example1 from "./pages/Register"
import Mentors from "./pages/Mentors"
import Chat from "./pages/Chat"
import Students from "./pages/Students"
import SignUp from "./pages/SignUp"

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
      </Routes>
      </BrowserRouter>
  )
}

export default App

