import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.init';

const Log61 = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
      signInWithEmailAndPassword
     
    ] = useSignInWithEmailAndPassword(auth);
const handleReg = () => {
    navigate('/reg61')
}
if(user){
  navigate(from, { replace: true });
}
const handleSubmit = (e) => {
e.preventDefault()
const email = e.target.email.value
const password = e.target.password.value
signInWithEmailAndPassword(email, password)
}
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary'>Login 61</h2>
<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p>New For Genius <Link onClick={handleReg} to="/reg61">Register</Link></p>
        </div>
    );
};

export default Log61;