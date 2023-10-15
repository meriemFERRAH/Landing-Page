import React from 'react';
function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg NavCTN">
    <div className="container-fluid ">
      <a className="navbar-brand navlogo" href="#">
     <img className="Brand" src="/src/image/logo.jpg" alt="" /></a>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse aNavCtn" id="navbarNavAltMarkup">
        <div className="navbar-nav NavbarContainer ">
          <a className="nav-link  "href="#HOME">HOME</a>
          <a className="nav-link " href="#EVENTS">EVENTS</a>
          <a className="nav-link " href="#LEADER">LEADER</a>
          <a className="nav-link "  href="#CONTACT">CONTACT</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
