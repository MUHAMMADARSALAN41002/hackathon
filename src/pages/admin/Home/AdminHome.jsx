import { Button } from 'antd';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Adminlist from '../../../components/adminlist/Adminlist';
import Navbar from '../../../components/adminnavbar/AdminNavbar';
import './Home.css'
const AdminHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("currentuser")
    if(user) {
  
    } else {
      navigate('/login')
    }
  })
  return (
    <>
    <Navbar />
    <Button className='createadminbtn' type='primary' onClick={() => navigate('/createadmin')}>Create Admin</Button>
    <Adminlist />
    </>
  )
}
export default AdminHome;