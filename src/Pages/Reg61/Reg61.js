import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.init';

const Reg61 = () => {
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    if(user){
      navigate('/log61')
    }
const handleSubmit = (e) => {
e.preventDefault();
const name = nameRef.current.value;
const email = emailRef.current.value;
const password = passwordRef.current.value;
createUserWithEmailAndPassword(email, password)
}

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary'>Register 61</h2>
<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>Already have an account <Link to='/log61'>Login</Link></p>
        </div>
    );
};

export default Reg61;