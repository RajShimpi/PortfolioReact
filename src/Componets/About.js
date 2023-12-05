import React from 'react'
import '../Style/About.css'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <section class="about flex" id="about">
        <div class="about-one">
          <h1>About me</h1>
          <span>Raj Shimpi</span>
          <p>
            Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium nemo quae deserunt aliquam expedita tempore! Laudantium,
            nobis. Commodi, quod ad. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum iusto sequi dolores nulla quibusdam
            architecto porro officiis, delectus tenetur neque? Quasi ex pariatur
            modi laudantium ipsam officia numquam corrupti, inventore sequi
            consequatur cum ad ducimus aliquid, necessitatibus voluptas. Autem,
            sint. ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ore.
          </p>
          <div class="btns">
            <button>Download CV</button>
            <button><Link to="/contact" style={{textDecoration:"none",color:"black"}}>Contact Me</Link></button>
          </div>
        </div>
        <div class="profile-img profile card">
          <img src="./img/raj2.jpg" style={{height:'100%'}} alt="" />
        </div>
      </section>
    </>
  )
}

export default About
