import React from "react";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";

import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/Config";

const Createuser = () => {
  const navigate = useNavigate();
  const useruid = localStorage.getItem('currentuser')
  const id = doc(collection(db, "admins"))._key.path.segments[1];
  console.log(useruid)
  const onFinish = (values) => {
    const { rollNo } = values;
    console.log(rollNo)
    getDocs(collection(db, "Student rollNo")).then(querySnapshot => {
        querySnapshot.forEach((document) => {           
                let studentRollNo = document.data().rollNo;
                console.log(studentRollNo)
             
                if (studentRollNo !== rollNo) {
                
                    setDoc(doc(db, "Student rollNo", id), {
                        rollNo,
                      });
                 
                    navigate('/usersadmin')
               
                } else {
                   
                    
                }
        })
    }).catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
    })
 
  }



  return (
    <>
      {" "}
      <div className="signup">
        <Form name="normal_signup" className="signup-form" onFinish={onFinish}>
          <h1 className="heading-signup" id="sign-heading-signup">
            {" "}
            Create Student Roll NO{" "}
          </h1>
          

          <Form.Item name="rollNo"  rules={[
        {
          required: true,
          message: 'Please input your roll No',
        },
      ]}>
            <Input
            
              className="input-signup input-here"
              placeholder="Enter Roll"
            />
          </Form.Item>

          <Form.Item>
            <Button type="danger" htmlType="submit">
              Create Roll No
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Createuser;
