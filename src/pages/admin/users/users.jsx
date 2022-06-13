import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/adminnavbar/AdminNavbar'
import Userlist from '../../../components/userlist/Userlist'

const Users = () => {
    const navigate = useNavigate()
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
    <Userlist />
    <Button className='createadminbtn' type='primary' onClick={() => navigate('/createuser')}>Create User Roll No</Button>
    </>
  )
}
export default Users