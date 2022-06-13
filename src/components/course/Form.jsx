import React from 'react';
import { Form, Input, Button, message } from 'antd';

const Cusform = (props) => {

  const onFinish = (values) => {
    const visible = props.visible()
    message.success("your form is submitted")
  };

  return (
  <>  <div >
  <Form name="normal_signup" className="signup-form" onFinish={onFinish} >
    <h1 > Welcome to SMIT </h1>
    <Form.Item label={"Name"} name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input className='input-signup input-here' placeholder="Name" />
    </Form.Item>
    <Form.Item label={"Email"} name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input className='input-signup input-here' placeholder="Email" />
    </Form.Item>
    <Form.Item label={"Age"} name="age"
      rules={[
        {
          required: true,
          message: 'Please input your Age!',
        },
      ]}
    >
      <Input type='number' className='input-signup input-here' placeholder="Age" />
    </Form.Item>
    <Form.Item label={"Qualifications"} name="qualifications"
      rules={[
        {
          required: true,
          message: 'Please input your qualifications!',
        },
      ]}
    >
      <Input className='input-signup input-here' placeholder="Qualifications" />
    </Form.Item>
    <Form.Item label={"Date Of Birth"} name="dob"
      rules={[
        {
          required: true,
          message: 'Please input your date of birth!',
        },
      ]}
    >
      <Input type="date" className='input-signup input-here' placeholder="date of birth" />
    </Form.Item>






    <Form.Item >
      <Button type="danger" htmlType="submit">
        Apply
      </Button>
    </Form.Item>
  </Form>
</div></>
  )
}
export default Cusform;