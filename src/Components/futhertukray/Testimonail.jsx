import React from 'react'

function Testimonail() {
  return (
    <> 
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
  </>
  )
}

export default Testimonail