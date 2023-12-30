import React from 'react';
import "../Navbar/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="" />
      <div className="options" >
        <select name="" id="" className='language'>
          <option className='language-option' value="English">English</option>
          <option className='language-option' value="Hindi">हिन्दी</option>
        </select>
        <button className='sign-in-btn'>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
