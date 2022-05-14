import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Home.css'
const Home = () => {
    const navigate = useNavigate();
  return (
      <>
    <Navbar />

    <Button type="primary" className='viewcourses-btn' onClick={() => navigate('/courses')}>View Courses</Button>
      </>
  )
}
export default Home;