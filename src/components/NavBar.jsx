import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.png'
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='nav-bar' id='home'>
      <img src={Logo} alt="Logo" className='logo' />
      <div onClick={handleNav} className={nav ? 'x-menu' : 'menu'}>
        {nav ? <div><AiOutlineClose size={25} /></div> : <AiOutlineMenu size={25} />}
      </div>
      <ul className={nav ? 'nav-open' : 'nav-ul'}>
        <a onClick={nav && handleNav} href="#home"><li className='nav-li'>Home</li></a>
        <a onClick={nav && handleNav} href="#about"><li className='nav-li'>About</li></a>
        <a onClick={nav && handleNav} href="#projects"><li className='nav-li'>Projects</li></a>
        <a onClick={nav && handleNav} href="#contact"><li className='nav-li'>Contact</li></a>
      </ul>
    </div>
  );
};

export default Navbar;