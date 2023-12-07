import React from 'react';
import { Form } from "antd";

// Components
import Button from '../../components/button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome back to Scaler Shows! Please Login{" "}
        </h1>
        <hr />
        <Form layout="vertical" className="mt-1">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="Login" type="submit" />
            <Link to="/login" className="text-primary">
              {" "}
              New to Scaler Movies? Register!
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login