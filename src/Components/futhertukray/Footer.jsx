import React from 'react';
import footerData from './footerData.json';

function Footer() {
  const {
    imageSrc,
    contactTitle,
    shopTitle,
    openingHours,
    address,
    email,
    phone,
    socialLinks,
    copyright,
  } = footerData;

  return (
    <section id="footer">
      <div className="footer-img">
        <img src={imageSrc} alt="Footer Image" />
      </div>
      <div className="title-text">
        <p>{contactTitle}</p>
        <h1>{shopTitle}</h1>
      </div>
      <div className="footer-row">
        <div className="footer-left">
          <h1>Opening Hours</h1>
          {openingHours.map((item, index) => (
            <p key={index}>
              <i className="far fa-clock" />
              {item.day} - {item.time}
            </p>
          ))}
        </div>
        <div className="footer-right">
          <h1>Get In Touch</h1>
          <p>
            <i className="fas fa-map-marker-alt" />
            {address}
          </p>
          <p>
            <i className="fas fa-envelope" />
            {email}
          </p>
          <i className="fas fa-phone" />
          {phone}
          <p />
          <div className="social-links">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.url} target="_blank">
                <i className={item.icon} />
              </a>
            ))}
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
