import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/favicon.png'
import '../css/Navbar.css'

const Navbar = () => {
  const [navopen, setNavopen] = useState(false);

  const handleNav = () => {
    setNavopen(!navopen);
  };

  return (
    <div className='nav-bar' id='home'>
    <img src={Logo} alt="Logo" className='logo'/>
      <div onClick={handleNav} className={navopen ? 'x-menu' : 'menu'}>
        {navopen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul className={navopen ? 'nav-open' : 'nav-ul'}>
        <li className='nav-li'><a onClick={navopen ? handleNav : null} href="#home">Home</a></li>
        <li className='nav-li'><a onClick={navopen ? handleNav : null} href="#about">About</a></li>
        <li className='nav-li'><a onClick={navopen ? handleNav : null} href="#projects">Projects</a></li>
        <li className='nav-li'><a onClick={navopen ? handleNav : null} href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;