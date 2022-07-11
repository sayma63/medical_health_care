import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='fs-1 text-primary text-center mt-4'>Frequent Question Answer</h1>
            <div>

                <h1 className='px-2'>1.Difference between authorization and authentication</h1>
                <p className='px-2'>Authorization determines what resources a user can access and Authentication verifies who the user is.Authorization works through settings that are implemented and maintained by the organization and Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization always takes place after authentication and Authentication is the first step of a good identity and access management process.Authorization isn't visible to or changeable by the user and Authentication is visible to and partially changeable by the user.Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access and Example: Employees in a company are required to authenticate through the network before accessing their company email.</p>
            </div>
            <div>

                <h1 className='px-2'>2.Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='px-2'>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized for these reason i use firebase.

                    Other option for Authentication:

                    <p>1.Password-based authentication</p>

                    <p> 2.Multi-factor authentication</p>

                    <p>3.Certificate-based authentication</p>

                    <p>4.Biometric authentication</p>

                    <p>5.Token-based authentication</p>
                </p>
            </div>
            <div className='margin'>

                <h1 className='px-2'>3.What other services does firebase provide other than authentication?</h1>
                <h2 className='px-2'>Other services of Firebase</h2>
                <p className='px-2'>
                    <p>1.Cloud Firestore</p>

                    <p>2.Cloud Functions</p>

                    <p>3.Hosting</p>

                    <p>4.Cloud Storage</p>

                    <p>5.Google Analytics</p>

                    <p>6.Predictions</p>

                    <p>7.Cloud Messaging</p>

                   <p> 8.Dynamic Links</p>

                    <p>9.Remote Config</p>
                </p>
            </div>

        </div>
    );
};

export default Blogs;