import React from 'react';
import '../Style/Home.css';

const Home = () => {
  return (
    <div>
      <div class="main flex">
        <div class="main-one">
          <h1>Hy! I am</h1>
          <span class="auto">Raj Shimpi</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            molestiae impedit amet repellat soluta nisi quaerat, temporibus
            consequuntur. Necessitatibus, dolorem.
          </p>
          <button>Hire Me</button>
        </div>
        <div class="main-two">
          <img src="./img/raj.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
