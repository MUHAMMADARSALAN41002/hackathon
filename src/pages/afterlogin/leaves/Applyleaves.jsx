import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { auth, db } from "../../../firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import Navbar from "../navbar/Navbar";
const { TextArea } = Input;
const Applyleaves = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("currentuser");
    if (user) {
    } else {
      navigate("/login");
    }
  });
  const onFinish = (values) => {
    const { subject, details, name } = values;

    const id = localStorage.getItem("currentuser");
    setDoc(doc(db, "leaves", id), {
      name,
      subject,
      details,
      uid:id,
    });
    message.success("Successfully apply for leave");
    navigate("/leaves")
  };
  return (
    <>
      {" "}
      <Navbar />{" "}
      <div className="login">
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <h1 className="heading-login" id="sign-heading-login">
            {" "}
            Apply For Leave{" "}
          </h1>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter user name!",
              },
            ]}
          >
            <Input className="input-here" placeholder="Student Name" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please subject for leave!",
              },
            ]}
          >
            <Input className="input-here" placeholder="Subject for leave" />
          </Form.Item>

          <Form.Item
            name="details"
            className="input-login"
            rules={[
              {
                required: true,
                message: "Please leave details!",
              },
            ]}
          >
            <TextArea placeholder="leave details" autoSize={{ minRows: 5 }} />
          </Form.Item>

          <Form.Item>
            <Button
              type="danger"
              htmlType="submit"
              className="login-form-button"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default Applyleaves;
