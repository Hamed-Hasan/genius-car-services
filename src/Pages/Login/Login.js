import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';



const Login = () => {
  const {signInWithEmailAndPassword, setEmail, setPassword,email,password,users} = useFirebase()
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSignIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
    
  }
  if(users){
    navigate(from, { replace: true });
  }
  return (
    <div className='w-50 mx-auto my-3'>
      <h2>Login</h2>
      <Form className='text-start' onSubmit={handleSignIn}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Link to='/SignUp'>Create a new Account</Link>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
    </div>
  );
};

export default Login;