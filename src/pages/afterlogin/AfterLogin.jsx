import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import {useNavigate} from 'react-router-dom'
import Logincard from '../../components/card/Logincard';



const AfterLogin = () => {
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
    <div style={{display:"flex"}}>
    <Logincard title="Graphic Designing"/>
    <Logincard title="Web And Mobile Application Development"/>
    </div>
    </>
  )
}
export default AfterLogin