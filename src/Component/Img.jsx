import React from "react";
import './Img.css'
import img1 from '../assets/unsplash_M-4lFg1Xfag (2).png'
// import img2 from '../assets/geetanjal-khanna-8CwoHpZe3qE-unsplash.jpg'

export default function Img() {
  return (
    <div className="Img-main">
      <div className="card">
        <div className="background-image">
          <img src={img1} alt="pic1" className="image" />
          <div className="text-overlay">
            <h3>We Can 
            Save The 
             Future</h3>
          </div>
        </div>

      </div>
      <div className="motivation-text">
        <h3>Your donation can make a difference in someone's life. Every contribution counts and helps us towards our mission. Thank you for your support!</h3>
      </div>
    </div>
  );
}
