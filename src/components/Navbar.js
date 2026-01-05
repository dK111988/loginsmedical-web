import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setnav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt='' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={1000}>HOME</Link></li>
                <li><Link to='features'smooth={true} duration={1000}>About Us</Link></li>
                <li><Link to='presentaion'smooth={true} duration={1000}>New Feature</Link></li>
                <li><Link to='rec-product'smooth={true} duration={1000}>Our Product</Link></li>
                <li><Link to='news'smooth={true} duration={1000}>NEWS</Link></li>
                <li><Link to='ourcustomer'smooth={true} duration={1000}>Our Customer</Link></li>
                <li><Link to='ourteams'smooth={true} duration={1000}>Our Teams</Link></li>
                <li><Link to='footer'smooth={true} duration={1000}>Contact US</Link></li>
                
            </ul>
        </nav>
    )
};

export default Navbar; 