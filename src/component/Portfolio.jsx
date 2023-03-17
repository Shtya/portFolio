import React from 'react'
import Works from './data';

const Portfolio = () => {
  return (
          <section className="Portfolio" id="Portfolio">

        <div className="container">
          {
            Works.map((e , idx) => {
              return (
                <div className="cover">
                  <div className="box">
                    <img src={e.img} alt="" />
                      <a className="link"  href={e.visit} target="_blank" ><i class="fa-solid fa-link"></i></a>
                      <a className="githup" target="_blank" href={e.github}><i className="fa-brands fa-github"></i> </a>
                  </div>
                  <h3>{e.title}</h3>
                </div>
              )
            })
          }
        
        
        
          </div>
      </section>
  )
}

export default Portfolio