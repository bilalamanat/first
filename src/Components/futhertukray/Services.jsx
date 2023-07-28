import React from 'react';
import servicesData from './servicesData.json'; 

function Service() {
  return (
    <>
      <section id="services">
        <div className="title-text">
          <p>SERVICES</p>
          <h1>We Provide Better</h1>
        </div>
        <div className="services-box">
          {servicesData.map((service, index) => (
            <div className="single-services" key={index}>
              <img src={service.image} />
              <div className="overlay" />
              <div className="service-desc">
                <h3>{service.name}</h3>
                <hr />
                <p><em>{service.description}</em></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Service;
