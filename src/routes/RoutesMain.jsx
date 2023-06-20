import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/index.jsx"
import { LoginPage } from "../pages/LoginPage/index.jsx"
import { RegisterPage } from "../pages/RegisterPage/index.jsx"

export const RoutesMain = () => {

   return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
   )
}