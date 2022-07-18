import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import{useNavigate}from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import SocialLogin from './SocialLogin';
import { sendEmailVerification } from 'firebase/auth';


const Register = () => {
    const [agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const[updateProfile,updating,error1]=useUpdateProfile(auth)
    const navigate=useNavigate()


  const  navigateLogin=()=>{
    navigate('/login')
  }
 
  const handleRegister= async event=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
    // const agree=event.target.terms.checked;
  
     await   createUserWithEmailAndPassword(email,password)
     await updateProfile({displayName:name})
     navigate('/home')

    // if(agree){
    //     createUserWithEmailAndPassword(email,password)
    // }
    

    
  }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mt-2 mb-3'>Please Register</h2>
            <form onSubmit={handleRegister} action="">
                <input type='text' name='name' placeholder='Your name'></input>
                <input type="email" name="email" id="" placeholder='Email Address' required />
                  
                  <input type="password" name="password" id="" placeholder='Password' required/>
                  <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                  <label className={`ps-2 ${agree?'':'text-danger'}`} htmlFor="terms"> Accepts Medical health care terms and conditions</label>
                  {/* <label className={agree?'ps-2 text-primary':'ps-2 text-danger'} htmlFor="terms"> Accepts Medical health care terms and conditions</label> */}
                  <input disabled={!agree} className='bg-primary rounded-pill mt-1' type="submit" value="Register" />


            </form>
            <p >Already Have an Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;