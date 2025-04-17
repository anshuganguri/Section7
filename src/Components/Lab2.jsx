import React from 'react'
import "./Lab2.css"
const Lab2 = () => {
  return (

    <div className='container'>
      <div className='header'>
        <div className='heading'>KL univeristy</div>
        <div className='menu'>
          <span>Home</span>
          <span>Portfolio</span>
          <span>About</span>
          <span>Login</span>
        </div>
      </div>

      <div className='content'>
        <div className='logo'>
          <img width={100} height={100} src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/hrvvw25qyybbhafnmbav" />
        </div>
        <div className='details'>
          <p>project name</p>
          <p>domain</p>
          <p>batch</p>
          <p>year</p>
        </div>
      </div>

      <div className='footer'>
        <div className='s_footer'>
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-linkedin"></i>
        </div>
      </div>
    </div>

  )
}

export default Lab2;