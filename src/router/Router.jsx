import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from '../pages/admin/Admin';
import AdminHome from '../pages/admin/Home/AdminHome';
import Forgot from '../pages/forgot/Forgot';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const Router = () => {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homeadmin" element={<AdminHome />} />
      <Route path="/usersadmin" element={<AdminHome />} />

    </Routes>
  </BrowserRouter>
  )
}
export default Router;