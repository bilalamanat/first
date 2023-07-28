import React from 'react'
import Banner from '../futhertukray/Banner'
import Services from '../futhertukray/Services'
import Footer from '../futhertukray/Footer'
import Feature from '../futhertukray/Feature'
import Testimonail from '../futhertukray/Testimonail'

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
 <Feature />
    {/* SERVICES */}
   <Services />
    {/* TESTIMONIALS */}
   <Testimonail />
    {/* footter */}
   <Footer />
  </div>
  
  )
}

export default BarberShop