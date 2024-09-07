import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Auth/Register/Register";
import { Login } from "./components/Auth/Login/Login";

export const App: React.FC = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   );
}
