import React from 'react';
import logo1 from '../Images/logo.png'
import logo2 from '../Images/facebook.png'
import logo3 from '../Images/github.png'
import auth from '../firebase.init';
import{useNavigate}from 'react-router-dom'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared_pages/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    let errorElement;
    if (error1||error2) {
        
      errorElement=    <div>
            <p className='text-danger'>Error: {error1?.message} {error2?.message}</p>
          </div>
        
      }
      if(loading1 || loading2){
        return <Loading></Loading>
      }
      if(user1||user2){
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
                <button onClick={()=>signInWithGithub()} className='w-50 btn btn-info mb-3  '>
                    <img  style={{width:'50px'}} src={logo3} alt="" className='px-2' />
                    GitHub Sign In
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;