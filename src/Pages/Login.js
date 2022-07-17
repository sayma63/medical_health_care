import React, { useRef } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{useNavigate}from 'react-router-dom'
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    if(user){
        navigate('/home')
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
       
        signInWithEmailAndPassword(email,password)


    }
    const navigateRegister=(event)=>{
        navigate('/register')
    }
    return (
        <div className='mt-2'>
            <h1 className='text-primary text-center'>Please Login</h1>
                  
            <Form onSubmit={handleSubmit} className='mx-auto w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='mx-auto w-50'>New to Medical Health Care? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

 



        </div>
    );
};

export default Login;