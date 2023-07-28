import React from 'react'
import Banner from '../futhertukray/Banner'
import Services from '../futhertukray/Services'

function BarberShop() {
  return (
    <div>
    <title>Bilal Shop Website Design</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* main banner */}
   <Banner />
    {/* FEATURES */}
    <section id="FEATURES">
      <div className="title-text">
        <p>FEATURES</p>
        <h1>Why Chose US</h1>
      </div>
      <div className="FEATURES-box">
        <div className="FEATURES">
          <h1>Experienced Staff</h1>
          <div className="features-desc">
            <div className="features-icon">
              <i className="fas fa-users" />
            </div>
            <div className="features-text">
              <p>This is very beautifull salon on the world and nothing area minded in this world life equally
                in nothoing without area atifitiol <em>BARBER SHOP</em></p>
            </div>
          </div>
          <h1>PRE BOOkING ONLINE</h1>
          <div className="features-desc">
            <div className="features-icon">
              <i className="fas fa-calendar-alt" />
            </div>
            <div className="features-text">
              <p>This is very beautifull salon on the world and nothing area minded in this world life equally
                in nothoing without area atifitiol <em>BARBER SHOP</em></p>
            </div>
          </div>
          <h1>AFFORDABLE COST</h1>
          <div className="features-desc">
            <div className="features-icon">
              <i className="fas fa-money-bill" />
            </div>
            <div className="features-text">
              <p>This is very beautifull salon on the world and nothing area minded in this world life equally
                in nothoing without area atifitiol <em>BARBER SHOP</em></p>
            </div>
          </div>
        </div>
        <div className="FEATURES-img">
          <img src="img/kattu.jpg" />
        </div>
      </div>
    </section>
    {/* SERVICES */}
   <Services />
    {/* TESTIMONIALS */}
    <section className="testimonials">
      <div className="title-text">
        <p>TESTIMONIALS</p>
        <h1>What Client Says</h1>
      </div>
      <div className="testimonials-row">
        <div className="testimonials-col">
          <div className="user">
            <img src="img/norman.jpg" />
            <div className="user-info">
              <h4>KEN NORMAN <i className="fab fa-twitter" /></h4>
              <small>@kennorman</small>
            </div>
          </div>
          <p><em>Some salons offer specialized services like henna application, hair straightening or perming,
              hair and scalp treatments, scalp massages, or specific beauty treatments based on cultural or
              regional preferences.</em></p>
        </div>
        <div className="testimonials-col">
          <div className="user">
            <img src="img/well.jpg" />
            <div className="user-info">
              <h4>ABDULLAH MUHAMMDI<i className="fab fa-twitter" /></h4>
              <small>@AAMAX</small>
            </div>
          </div>
          <p><em>Some salons offer specialized services like henna application, hair straightening or perming,
              hair and scalp treatments, scalp massages, or specific beauty treatments based on cultural
              or regional preferences.</em></p>
        </div>
        <div className="testimonials-col">
          <div className="user">
            <img src="img/dell.jpg" />
            <div className="user-info">
              <h4>Bilal MUHAMMDI<i className="fab fa-twitter" /></h4>
              <small>@bilalmuhammadi</small>
            </div>
          </div>
          <p><em>Some salons offer specialized services like henna application, hair straightening or perming,
              hair and scalp treatments, scalp massages, or specific beauty treatments based on cultural or
              regional preferences. </em></p>
        </div>
      </div>
    </section>
    {/* footter */}
    <section id="footer">
      <div className="footer-img">
        <img src="img/vecter.png" />
      </div>
      <div className="title-text">
        <p>CONTACT</p>
        <h1>Visit Shop Today</h1>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <h1>Opening Hours</h1>
          <p><i className="far fa-clock" />Monday To Friday - 9AM To 9PM</p>
          <p><i className="far fa-clock" />Saturday To Sunday - 8AM To 11PM</p>
        </div>
        <div className="footer-right">
          <h1>Get In Touch</h1>
          <p><i className="fas fa-map-marker-alt" />#30 Shahzada Model City Chunian, XYZ City In Chunian</p>
          <p><i className="fas fa-envelope" />example@website.com</p>
          <i className="fas fa-phone" />+92 3194476740<p />
          <div className="social-links">
            <a href="https://web.facebook.com/" target="_blank"> <i className="fab fa-facebook" /></a>
            <a href="https://www.instagram.com/bilalamanatmuhammadi/" target="_blank">  <i className="fab fa-instagram" /></a>
            <a href="https://www.tiktok.com/@bilalamanatmuhammadi?lang=en/" target="_blank">  <i className="fab fa-tiktok" /></a>
            <a href="https://www.youtube.com/channel/UCedD9jYhdMOCy-n6eqfMeMQ" target="_blank"><i className="fab fa-youtube" /></a>
            <p>Copyright Easy Toturial Youtube Channel</p>
          </div>
        </div></div></section>
  </div>
  
  )
}

export default BarberShop