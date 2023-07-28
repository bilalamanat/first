import React from 'react'

function BarberShop() {
  return (
    <div>
    <title>Bilal Shop Website Design</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* main banner */}
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
    <section id="services">
      <div className="title-text">
        <p>SERVICES</p>
        <h1>We Provide Better</h1>
      </div>
      <div className="services-box">
        <div className="single-services">
          <div className="overlay" />
          <img src="img/hamam2.jpg" />
          <div className="overlay" />
          <div className="service-desc">
            <h3>HAIR STYLING</h3>
            <hr />
            <p> <em>Salons offer a wide range of haircare services such as haircuts, hairstyling, hair coloring,
                highlights, hair treatments.</em></p>
          </div>
        </div>
        <div className="single-services">
          <img src="img/berid.jpg" />
          <div className="overlay" />
          <div className="service-desc">
            <h3>BEARD TRIM</h3>
            <hr />
            <p> <em>Salons provide skincare services such as facials, skin treatments, exfoliation, acne
                treatments, anti-aging treatments, and skincare consultations.</em></p>
          </div>
        </div>
        <div className="single-services">
          <img src="img/hamam5.jpg" />
          <div className="overlay" />
          <div className="service-desc">
            <h3>HAIR CUT</h3>
            <hr />
            <p><em>Salons often have professional makeup artists who offer makeup services for special occasions
                like weddings, parties, or photoshoots. </em></p>
          </div>
        </div>
        <div className="single-services">
          <img src="img/hamam4.jpg" />
          <div className="overlay" />
          <div className="service-desc">
            <h3>CHILD CUTING</h3>
            <hr />
            <p><em>Some salons offer specialized services like henna application, hair straightening or perming,
                hair and scalp treatments, scalp massages, or specific beauty treatments based on cultural
                or regional preferences.</em></p>
          </div>
        </div>
      </div>
    </section>
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