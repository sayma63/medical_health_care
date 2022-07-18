import React, { useRef } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{useNavigate}from 'react-router-dom'
import { Link,useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import { async } from '@firebase/util';
import Loading from '../Shared_pages/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );
      const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    if(user){
        navigate(from,{replace:true})
        
    }
    if(loading){
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        
        errorElement=    <div>
              <p className='text-danger'>Error: {error.message} </p>
            </div>
          
        }
        const resetPassword=async()=>{
            const email=emailRef.current.value;
           if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
           }
           else{
            toast('please Enter your Email')
           }
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
        <div className='mt-2 mx-auto w-50'>
            <h1 className='text-primary text-center'>Please Login</h1>
                  
            <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
        Login
      </Button>
    </Form>
    {errorElement}
    <p >New to Medical Health Care? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
    <p >Forget Password? <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
    <SocialLogin></SocialLogin>
    <ToastContainer></ToastContainer>

 



        </div>
    );
};

export default Login;