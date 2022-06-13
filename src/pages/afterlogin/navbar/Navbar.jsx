import { Button } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const signout = () => {
    navigate("/login");     
    localStorage.removeItem("currentuser");
  };
  return (
    <div className="Navbar">
      <span className="nav-logo">SMIT</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home"> Dashboard </Link>
        <Link to="/afterlogincourses"> Courses </Link>
        <Link to="/leaves"> Leaves </Link>
        <Button
          danger
          type="primary"
          onClick={signout}
          style={{ margin: "0px 10px 0px 0px" }}
          icon={<LogoutOutlined />}
        >
          Signout
        </Button>
        {/* <a href="/login">Login</a>
        <a href="/signup">Signup</a> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
