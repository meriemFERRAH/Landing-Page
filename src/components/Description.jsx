import  { useState } from 'react';
import crea  from "../icons/icons8-creative-64.png" ; 
import ins  from "../icons/icons8-idea-48.png" ; 
import inn  from "../icons/icons8-innovative-96.png" ; 
import best  from "../icons/icons8-medal-100.png" ; 
import team  from "../icons/icons8-team-96.png" ; 
import la  from "../slide/arrow-left.png" ; 
import ra  from "../slide/arrow-right.png" ; 
function Description() {
  const [showDescription1, setShowDescription1] = useState(true);

  const toggleDescription = () => {
    setShowDescription1(!showDescription1);
  };
  return (
    <div className='description'>
      <div className="values">
        <div className="item">
             <img src={crea} alt="" />
            <p>CREATIVE THINKING</p>
        </div>
        <div className="item">
        <img src={ins} alt="" />
            <p>INSPIRING IDEAS</p>
            </div>
            <div className="item">
            <img src={inn} alt="" />
            <p>INNOVATIVE IDEAS</p>
            </div>
            <div className="item">
            <img src={best} alt="" />
            <p>BEST QUALITY</p>
            </div>
            <div className="item">
            <img src={team} alt="" />
            <p>TEAM SPIRIT</p>
            </div>
      </div>
       <div className="Club">
       <span className={showDescription1 ? "spandes" : "hide"}>In March 2023,  In March 2023, <span className='bold'>Space Tech Club</span> has been created , a sanctuary for Electricity, Electronics, and Informatics enthusiasts. More than a club, It swiftly transformed into <span className="bold">a tight-knit family</span>  ,United by a shared ardor for all things tech. Here,Members do not just convene ;They collaborate ,<span className="bold">Innovate</span> ,And ideate, Propelling the boundaries of space and technology. </span>
       <span className={showDescription1 ? "hide" : "spandes2"}>Workstations hum with activity, Adorned with an array of circuitry, while the air crackles with the thrill of discovery. Yet, Beyond the gadgets and code, <span className="bold">Space Tech</span>  is a community built on mutual support and celebration. Through outreach and education, its impact extends far beyond its walls, igniting a passion for technology in the hearts of the next generation.</span>
      </div>
       <div className="arrow">
       <img  src={ra}
          alt="arrow-right.png"
          onClick={toggleDescription}
          className={showDescription1 ? "right" : "left hide"}/>
        <img src={la}
          alt="arrow-left.png"
          onClick={toggleDescription}
          className={showDescription1 ? "left hide" : "right"} />
       </div>
    </div>
  )
}

export default Description
