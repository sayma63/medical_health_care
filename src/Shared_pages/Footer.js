import React from 'react';
import './Footer.css'

const Footer = () => {
    const year=new Date().getFullYear();
    return (
        <footer className='footer'>
            <h3>Health care for human</h3>
            <h3>Copyright &copy;{year}</h3>
        </footer>
    );
};

export default Footer;