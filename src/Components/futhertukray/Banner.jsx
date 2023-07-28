import React from 'react';
import bannerData from './bannerData.json';

function Banner() {
  const { imageSrc, title, description, buttons, navLinks, menuIconSrc, menuIconId } = bannerData;

  return (
    <section id="banner">
      <img src={imageSrc} className="logo" />
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="banner-btn">
          {buttons.map((button, index) => (
            <a key={index} href={button.link}>
              <span />
              {button.text}
            </a>
          ))}
        </div>
      </div>
      <div id="sideNav">
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}><a href={link.target}>{link.text}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="manubtn">
        <img src={menuIconSrc} id={menuIconId} />
      </div>
    </section>
  );
}

export default Banner;
