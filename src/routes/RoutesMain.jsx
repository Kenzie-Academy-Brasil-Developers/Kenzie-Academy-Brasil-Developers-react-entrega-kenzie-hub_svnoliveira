import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/index.jsx"
import { LoginPage } from "../pages/LoginPage/index.jsx"
import { RegisterPage } from "../pages/RegisterPage/index.jsx"
import { ProtectedRoutes } from "../components/ProtectedRoutes/index.jsx"
import { PublicRoutes } from "../components/PublicRoutes/index.jsx"

export const RoutesMain = () => {

   return (
      <Routes>
         <Route element={<PublicRoutes />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Route>
         <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomePage />} />
         </Route>
      </Routes>
   )
}