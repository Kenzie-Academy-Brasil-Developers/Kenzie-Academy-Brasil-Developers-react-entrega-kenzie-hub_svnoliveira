import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/index.jsx"
import { LoginPage } from "../pages/LoginPage/index.jsx"
import { RegisterPage } from "../pages/RegisterPage/index.jsx"
import { useState } from "react"

export const RoutesMain = () => {
   const [user, setUser] = useState(null)

   return (
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser}/>} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
   )
}