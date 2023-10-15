import logo  from "../image/logo.jpg" ; 
import hero  from "../slide/img4.png" ; 
function Home() {
  const slide = document.querySelectorAll(".slide")
  var repeat = function(){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

      slide[i].classList.add('active');
      i++;

      if(slide.length == i){
        i = 0;
      }
      if(i >= slide.length){
        return;
      }
      repeater();
    }, 10000);
    }
    repeater();
  }
  repeat();
  return (
    <div className="HomeCTN">
        <div className="Text">
            <p>WELCOME TO SPACE TECH CLUB</p>
            <img className="hide " src={logo} alt="" />
            <span className="span">Team That Includes Both <br /><span>Technology and Science</span></span>
        </div>
        <div className="Slide">
         
          <img src={hero} className="circle " alt="" />
          
          </div>
    </div>
  )
}

export default Home
