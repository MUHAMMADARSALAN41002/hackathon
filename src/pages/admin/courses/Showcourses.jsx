import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/adminnavbar/AdminNavbar";
import { Admincoursetemplate } from "../../../components/course/Coursetemplate";

const Showcourses = () => {
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
      <Admincoursetemplate />
      <Button
        style={{ position: "fixed", bottom: "80px", right: "80px" }}
        type="primary"
        onClick={() => navigate("/createcourses")}
      >
        Create Course
      </Button>
    </>
  );
};
export default Showcourses;
