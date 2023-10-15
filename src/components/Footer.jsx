import { FaFacebookF  } from 'react-icons/fa';
import { BsMessenger ,BsInstagram } from 'react-icons/bs';
import {MdOutlineMailOutline ,MdLocationPin  } from 'react-icons/md';
import  { useState, useEffect } from 'react';
import logo from "../image/logo.jpg";
function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000); // Check every 1000ms (1 second) if the year has changed

    return () => clearInterval(interval);
  }, [currentYear]);
   const redirectToInstagram = () => {
      window.location.href = 'https://www.instagram.com/space.tech_club/?hl=fr';
    };
  
    const redirectToFacebook = () => {
      window.location.href = 'https://web.facebook.com/profile.php?id=100090744241124';
    };
    const redirectToMessenger = () => {
      window.location.href = 'https://web.facebook.com/profile.php?id=100090744241124';
    };
  
    return (
       <div className="footer" id='CONTACT'> 
       <div className="footerContainer">
        <div className="link">
            <a href="#HOME">HOME</a>
            <span>|</span>
            <a href="#EVENTS">EVENTS</a>
            <span>|</span>
            <a href="#LEADER">LEADER</a>
            <span>|</span>
            <a href="#CONTACT">CONTACT</a>
         </div>
         <div className="icons">
         <FaFacebookF className=' H iconf' onClick={redirectToFacebook} style={{ cursor: 'pointer' }} />
         <BsInstagram className='H icon' onClick={redirectToInstagram} style={{ cursor: 'pointer' }} />
         <BsMessenger className='H icon' onClick={redirectToMessenger} style={{ cursor: 'pointer' }} />
         </div>
         <div className="information">
            <div className="infoDiv">
                <MdLocationPin className='icon2'/>
                <a href="https://maps.app.goo.gl/rLA7H7MFW5qTVQtH9">Sidi Bel Abbes,Algeria</a>
            </div>
            <div className="infoDiv">
            <MdOutlineMailOutline className='icon2'  />
                <a href='#'> spacetechx22@gmail.com </a>
            </div>
         </div>
       </div>
       <div className="End">
        <p>ALL RIGHTS RESERVED <br />{currentYear} </p>
        <img className='logo'src={logo} alt="logo.png"  />
        <p>SPACE TECH CLUB</p>
       </div>
       </div>  
    )
  }
  
  export default Footer
