import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/login"
import NewAccount from "./pages/newaccount"
import Home from "./pages/Home/Home"
import { LoginProvider } from "./Contexts/LoginContext"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <BrowserRouter>
        <ToastContainer theme="dark" position="bottom-right" autoClose={3000}/>
      <Routes>
          <Route path="/" element={
            <LoginProvider>
              <Login />
              </LoginProvider>} />
        <Route path="/Home" element={<Home />}/>
        <Route path="/NewAccount" element={<NewAccount/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
