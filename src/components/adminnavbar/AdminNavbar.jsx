import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adminnavbar.css";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const signout = () => {
    navigate("/admin");     
    localStorage.removeItem("currentuser");
  };
  return (
    <div className="Navbar">
      <span className="nav-logo">SMIT</span>
      <div className={`nav-items ${isOpen && "open"}`}>
          <Link to='/homeadmin' > Admin </Link>
          <Link to='/usersadmin' > Users </Link>
          <Link to='/showcourses' > Courses </Link>
          <Link to='/adminleaves' > Leaves </Link>
          <Link to='/changepassword' > Change Password </Link>
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