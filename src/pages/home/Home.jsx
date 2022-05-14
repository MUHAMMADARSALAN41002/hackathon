import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Home.css'
import smit from '../../images/smit.png'
const Home = () => {
    const navigate = useNavigate();
  return (
      <>
    <Navbar />
    
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"100vh"}}>
    <h1 className='heading-first'>saylani mass it training program </h1>
     <Button type="primary" className='viewcourses-btn' onClick={() => navigate('/courses')}>View Courses</Button>
    </div>
 
      </>
  )
}
export default Home;