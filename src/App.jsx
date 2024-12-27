import { Route, Routes } from "react-router-dom";
import Login from "./module/login/login";
import Dashboard from "./module/dashboard/dashboard";


export default function App() {
  return (
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
   </Routes>
  )
}