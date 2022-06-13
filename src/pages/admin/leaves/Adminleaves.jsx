import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { Button, Table } from "antd";
import { db } from "../../../firebase/Config";
import Navbar from "../../../components/adminnavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";

const Adminleaves = () => {
  const navigate = useNavigate();
  const [arrdata1, setarrdata1] = useState([]);


  useEffect(() => {
    const user = localStorage.getItem("currentuser")
    if(user) {
  
    } else {
      navigate('/login')
    }
  })

  useEffect(() => {
    getdata();
  }, []);

  let arr = [];
  const getdata = () => {
    getDocs(collection(db, "leaves"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let dname = doc.data().name;
          let ddetails = doc.data().details;

          arr.push({
            arrdetails: ddetails,
            arrname: dname,
          });
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
       width: 80,
       ellipsis: true,
    },
    { title: "Student Name", dataIndex: "studentname", key: "studentname", width: 150,  ellipsis: true,},
    { title: "Leaves Deatils", dataIndex: "leavesdetails", key: "leavesdetails",  ellipsis: true,},
    { title: "Status", dataIndex: "status", key: "status", width: 140, ellipsis: true,},
    { title: "Action", dataIndex: "action", key: "action", width: 190, ellipsis: false,},
  ];

  const actionbutton = (
    <>
      <Button type="primary">Accept</Button>
      <Button type="primary" danger>
        Reject
      </Button>
    </>
  );

  const data = arrdata1.map((alldata, index) => {
    const userdata = {
      key: index,
      studentname: alldata.arrname,
      leavesdetails: alldata.arrdetails,
      status: "pending",
      action: actionbutton,
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
    </>
  );
};

export default Adminleaves;
