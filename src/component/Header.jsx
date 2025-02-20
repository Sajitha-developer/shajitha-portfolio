import React, { useState } from 'react'

const Header = () => {

  const [toggleMenu, settoggleMenu] = useState(false);


  return (
    <header className='header__container'>

<div className='header' id='home'>
        <h1 className='tilte'>Shajitha Begam</h1>
  <ul className='nav-links'>
       <li> <a href="/" className="">Home</a></li>
       <li> <a href="#about" className="">About</a></li>
       <li> <a href="#project" className="">Project</a></li>
       <li><a href="#resume" className="">Resume</a></li>
       <li><a href="#contact" className="">Contact</a></li>
        </ul>
 


{toggleMenu && (
    <div className='mobile-nav'>
<ul onClick={() => settoggleMenu(false)} className='mobile-nav-links'>
  
  <li>  <a href="#home" style={{marginLeft: "-55px"}}></a>Home</li>
  <li>  <a href="#about" style={{marginLeft: "-10px"}}>About</a></li>
   <li> <a href="#projects">Projects</a></li>
  <li> <a href="#resume">Resume</a></li>
   <li> <a href="#Contact">Contact</a></li>

</ul>

    </div>
)}

<button onClick={() => settoggleMenu(!toggleMenu)} className='menu-button'>
<i className="fa-solid fa-bars menu-icon" ></i>
</button>
</div>

</header>

  )
}

export default Header