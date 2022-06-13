import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Table } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import Navbar from "../navbar/Navbar";
const { TextArea } = Input;
const Leaves = () => {
  const navigate = useNavigate();
  const [arrdata1, setarrdata1] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("currentuser");
    if (user) {
    } else {
      navigate("/login");
    }
  });
  useEffect(() => {
    getdata();
  }, []);
  const user = localStorage.getItem("currentuser");
  let arr = [];
  const getdata = () => {
    getDocs(collection(db, "leaves"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let useruid = doc.data().uid;
          if(useruid === user) {
            const dsubject = doc.data().subject;
            const dname = doc.data().name;
            arr.push({
              arrdetails: dsubject,
              arrname: dname,
            });
          }

        });
        setarrdata1(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const columns = [
    {
      title: "S.No",
      dataIndex: "sno",
      key: "sno",
      render: (text, object, index) => index + 1,
    },
    { title: "Student Name", dataIndex: "studentname", key: "studentname"},
    { title: "Leaves Deatils", dataIndex: "leavesdetails", key: "leavesdetails"},
    { title: "Status", dataIndex: "status", key: "status"},
  ];


  const data = arrdata1.map((alldata, index) => {
    const userdata = {
      key: index,
      studentname: alldata.arrname,
      leavesdetails: alldata.arrdetails,
      status: "pending",
    };
    return userdata;
  });
 
  return (
    <>
      <Navbar />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="alldisplaytable"
      />
         <Button className='createadminbtn' type='primary' onClick={() => navigate('/applyleaves')}>Apply for leave</Button>
        </>
  );
};
export default Leaves;
