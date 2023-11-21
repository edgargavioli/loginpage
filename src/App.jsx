import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/Home/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
