import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from '../pages/admin/Admin';
import Createadmin from '../pages/admin/createadmin/Createadmin';
import Createuser from '../pages/admin/createuser/Createuser';
import AdminHome from '../pages/admin/Home/AdminHome';
import Users from '../pages/admin/users/Users';
import AfterLogin from '../pages/afterlogin/AfterLogin';
import { Courses } from '../pages/courses/Courses';
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
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/home" element={<AfterLogin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homeadmin" element={<AdminHome />} />
      <Route path="/usersadmin" element={<Users />} />
      <Route path="/createadmin" element={<Createadmin />} />
      <Route path="/createuser" element={<Createuser />} />
      <Route path="/courses" element={<Courses />} />

    </Routes>
  </BrowserRouter>
  )
}
export default Router;