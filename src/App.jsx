import { Route, Routes } from "react-router-dom";
import Login from "./module/login/login";
import Dashboard from "./module/dashboard/dashboard";
import ScanQR from "./module/scan-qr/scan-qr";


export default function App() {
  return (
   <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<ScanQR />} />
   </Routes>
  )
}