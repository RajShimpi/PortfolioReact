import React from 'react'
import '../Style/Contact.css'
const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
      <h1>Let Us <span>Talk!</span></h1>
      <div className="body">
      <form class="form">
        <input type="text" name="text" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name">
          <i class="fa-solid fa-user"></i> Name...
          </span>
        </label>
      </form>
      <form class="form">
        <input type="email" name="email" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name">
          <i class="fa-solid fa-envelope"></i>  Email...
          </span>
        </label>
      </form>
      <form class="form">
        <input type="phone" name="mobileNo" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name">
          <i class="fa-solid fa-phone"></i> Mobile No...
          </span>
        </label>
      </form>
      <div class="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Contact ME
    </div>
    </div>
    </section>
    </div>

  )
}

export default Contact
