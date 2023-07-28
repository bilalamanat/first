import React from 'react'

function Banner() {
  return (
    <> 
    <section id="banner">
    <img src="img/studio.png" className="logo" />
    <div className="banner-text">
      <h1>Hair Studio</h1>
      <p>Style Your Hair is Style Your Life</p>
      <div className="banner-btn">
        <a href="#"><span />Find Out</a>
        <a href="#"><span />Read More</a>
      </div>
    </div>
    <div id="sideNav">
      <nav>
        <ul>
          <li><a href="#banner">HOME</a></li>
          <li><a href="#FEATURES">FEATURES</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#testimonials">TESTIMONIALS</a></li>
          <li><a href="#footer">MEET US</a></li>
        </ul>
      </nav>
    </div>
    <div id="manubtn">
      <img src="img/menu-icon.svg" id="MANU" />
    </div>
  </section>
  </>
  )
}

export default Banner