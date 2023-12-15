import React, {useEffect} from 'react'

import Banner from '../futhertukray/Banner'
import Services from '../futhertukray/Services'
import Footer from '../futhertukray/Footer'
import Feature from '../futhertukray/Feature'
import Testimonail from '../futhertukray/Testimonail'

function BarberShop() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    var manubtn = document.getElementById("manubtn")
    var sideNav = document.getElementById("sideNav")
    var manu = document.getElementById("MANU")
    sideNav.style.right = "-250px"
    manubtn.onclick = function () {
        if (sideNav.style.right == "-250px") {
            sideNav.style.right = "0";
            manu.src = "img/x-solid.svg";
        }
        else {
            sideNav.style.right = "-250px";
            manu.src = "img/menu-icon.svg";
        }
    }
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
    `;
    document.body.appendChild(script);
  }, []);
  return (
    <div>
    <title>Bilal Shop Website</title>
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