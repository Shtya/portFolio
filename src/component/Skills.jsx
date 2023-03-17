import React, { useEffect } from 'react'
import work from '../img/work1.jpg'
const Skills = () => {

  const section=()=>{
    let skills = document.querySelector(" .skill2")
    let skill = document.querySelectorAll(".skill2 .progress span ")
    window.onscroll = function () {
      if(window.scrollY > skills.offsetTop - 400 ) {
        skill.forEach(e => {
          e.style.width = e.dataset.width
          e.style.opacity = "1"
        })
      }
    }
  }
  useEffect(_ => { section() }, [])

  return (
    <div className='Skills' >
      <section className="skill1" id='About'>
        <div className="container">
          <h2>
            <span className='one'>HELLO,</span><span className="two">My Name Is</span> <br />
            <span className="three">AHMED</span><span className="four">ABD-ElRHMAN</span> <br />
            <span className="five">I AM</span> <span className="six">Full Stack Developer (MERN Stack)</span>
            <h3>
            {/* I'm a Full-Stack Web Developer<br /> */}
          I like building Web Applications that leverage my skills in web development. Check out some of my work in the Projects section. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
      </h3>
            </h2>

      <div className="solar-system">
        <div className="All orbit">
          <i className="planet js fa-brands fa-js"></i>
          <i className="planet react fa-brands fa-react"></i>
          <div className="html orbit">
            <i className="planet fa-brands fa-css3"></i>
            <div className="css orbit">
              <i className="planet fa-brands fa-html5"></i>
              <i className="sun fa-solid fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      

          <section className="skill2" id="Skills">
        <div className="container">
          <div className="cover"><img src={work} alt="" /></div>
          <div className="boxs">
          <div className="box">
          <h2>HTML <span> [ Pug ] </span> </h2>
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Css <span>  [ Scss - bootstrap ] </span> </h2>
          <div className="progress">
            <span  data-width="85%"></span>
          </div>
        </div>
        <div className="box">
          <h2>JS <span>[ React - UniteTesting ] </span> </h2>
          <div className="progress">
            <span  data-width="85%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Node JS <span> [mongodb - Express JS ]</span></h2> 
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Galp JS</h2>
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Git & Github</h2>
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
            </div>
        <div className="box">
          <h2>Adobe Photoshop</h2>
          <div className="progress">
            <span  data-width="80%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Adobe XD</h2>
          <div className="progress">
            <span  data-width="75%"></span>
          </div>
            </div>
            
          </div>
      </div> 
      </section>
      
    </div>

    
  )
}

export default Skills