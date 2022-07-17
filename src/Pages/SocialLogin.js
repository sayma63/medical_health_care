import React from 'react';
import logo1 from '../Images/logo.png'
import logo2 from '../Images/facebook.png'
import logo3 from '../Images/github.png'
import auth from '../firebase.init';
import{useNavigate}from 'react-router-dom'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorElement;
    if (error) {
        
      errorElement=    <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
      if(user){
       navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='w-50 bg-primary'></div>
                <p className='mt-2 p-2 fs-5'>or</p>
                <div style={{height:'1px'}} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div  className=' d-flex justify-content-center '>
                <button onClick={()=>signInWithGoogle()} className='w-50 btn btn-info mb-3  '>
                    <img style={{width:'70px'}} src={logo1} alt="" className='px-2' />
                    Google Sign In
                    </button>
            </div>
            <div  className=' d-flex justify-content-center '>
                <button className='w-50 btn btn-info mb-3  '>
                    <img style={{width:'40px'}} src={logo2} alt="" className='px-2' />
                    FaceBook Sign In
                    </button>
            </div>
            <div  className=' margin d-flex justify-content-center '>
                <button className='w-50 btn btn-info mb-3  '>
                    <img style={{width:'50px'}} src={logo3} alt="" className='px-2' />
                    GitHub Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;