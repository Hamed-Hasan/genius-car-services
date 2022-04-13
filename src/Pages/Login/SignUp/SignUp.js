import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { BsFacebook } from 'react-icons/bs';
const SignUp = () => {
    const {handleEmail,handlePassword,handleConfirmPassword,handleSubmit,signupFacebook} = useFirebase()
    return (
        <div className='w-50 mx-auto my-3'>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit} className='text-start'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Link to='/login'>Already haven account</Link>
    <div>
        <button onClick={signupFacebook} className="icon-btn">
            <BsFacebook className='fb'/>
            Sign UP with Facebook
        </button>
    </div>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default SignUp;