import React from 'react';
import logo from "../image/logo.jpg";
import pre from "../slide/president.jpg";
import vice from "../slide/vicepresident.jpg";
import media from "../slide/mediamanager.PNG";
import dera from "../slide/derani.jpg";
function Slider() {

  return (
    <div className="sliderctn" id="LEADER">
    <div className="container">
    <input type="radio" name="slider" className="d-none" id="s1" checked />
    <input type="radio" name="slider" className="d-none" id="s2" />
    <input type="radio" name="slider" className="d-none" id="s3" />
    <input type="radio" name="slider" className="d-none" id="s4" />
    <input type="radio" name="slider" className="d-none" id="s5" />
    <input type="radio" name="slider" className="d-none" id="s6" />
    <input type="radio" name="slider" className="d-none" id="s7" />
    <input type="radio" name="slider" className="d-none" id="s8" />
    <input type="radio" name="slider" className="d-none" id="s9" />
    

    <div className="cards">
      <label htmlFor="s1" id="slide1">
        <div className="card">
          <div className="image">
            <img src={pre} alt="" />
          </div>
          <div className="infos">
            <span className="name">CLUB PRESIDENT</span>
            <span className="lorem">Benmehal Mohamed Djamel eddine</span>
          </div>
        </div>
      </label>

      <label htmlFor="s2" id="slide2">
        <div className="card">
          <div className="image">
            <img src={vice} alt="" />
          </div>
          <div className="infos">
            <span className="name">VICE PRESIDENT </span>
            <span className="lorem">Aireche Mohamed</span>
          </div>
        </div>
      </label>

      <label htmlFor="s3" id="slide3">
        <div className="card">
          <div className="image">
            <img src={media} alt="" />
          </div>
          <div className="infos">
            <span className="name">SOCIAL MEDIA MANAGER</span>
            <span className="lorem">Boudkhira Imad Eddine </span>
          </div>
        </div>
      </label>

      <label htmlFor="s4" id="slide4">
        <div className="card">
          <div className="image">
            <img src={dera} alt="" />
          </div>
          <div className="infos">
            <span className="name">RECRUITMENT OFFICER</span>
            <span className="lorem">Darani Yacine</span>
          </div>
        </div>
      </label>
      <label htmlFor="s5" id="slide5" >
        <div className="card">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="infos">
            <span className="name"> HR MANAGER</span>
            <span className="lorem">Zeroual Meriem Aya</span>
          </div>
        </div>
      </label>
      <label htmlFor="s6" id="slide6">
      <div className="card">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="infos">
            <span className="name"> MECHANICAL DEV DEP LEADER</span>
            <span className="lorem">Lousdade Abdelghani</span>
          </div>
        </div>
          </label>

          <label htmlFor="s7" id="slide7">
          <div className="card">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="infos">
            <span className="name">IT DEP LEADER</span>
            <span className="lorem">Rezki Nour El Houda</span>
          </div>
        </div>
          </label>

          <label htmlFor="s8" id="slide8">
          <div className="card">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="infos">
            <span className="name">GENERAL SECRETARY</span>
            <span className="lorem">Belabed Mohamed</span>
          </div>
        </div>
          </label>

          <label htmlFor="s9" id="slide9">
          <div className="card">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="infos">
            <span className="name">ORGANISATION DEP LEADER</span>
            <span className="lorem">Lelouet Kawther</span>
          </div>
        </div>
          </label>
    </div>

  </div>
  </div>
  )
}

export default Slider
