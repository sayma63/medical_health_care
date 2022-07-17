import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import{useNavigate}from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import SocialLogin from './SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate()


  const  navigateLogin=()=>{
    navigate('/login')
  }
  if(user){
    navigate('/home')
  }
  const handleRegister=event=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    
    createUserWithEmailAndPassword(email,password)
    
  }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mt-2 mb-3'>Please Register</h2>
            <form onSubmit={handleRegister} action="">
                <input type='text' name='name' placeholder='Your name'></input>
                <input type="email" name="email" id="" placeholder='Email Address' required />
                  
                  <input type="password" name="password" id="" placeholder='Password' required/>
                  <input className='bg-primary rounded-pill' type="submit" value="Register" />


            </form>
            <p >Already Have an Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;