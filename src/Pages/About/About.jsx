import React from "react";
import { assets } from "../../assets/assets";
import '../../Components/Footer/Footer.css'
const About = () => {
  return (
    <div className="container about">
      <div className="align-items-center mt-2">
        <h2 className="text-center">About ArtVista</h2>
        <br />
        <div className="row">
          <p>
            As the leading marketplace for art by the world’s emerging and
            established artists, we’ve made it easy for new and experienced
            collectors to discover, buy, and sell art—and so much more.
            Everything you’ll ever need to collect art, you’ll find on Artsy.
          </p>
        </div>
        <br />
        <div className="row">
        <p>
          At Artvista, we believe abstract art is an endless exploration. Each
          piece interprets color, shape, and emotion uniquely, injecting
          artistic inspiration into your living space. Whether you're a
          passionate enthusiast or a first-time explorer of abstract art, we aim
          to be your guide on this artistic journey.
        </p>
        </div>
        <br />
        <div className="row">
            <div className="col">
                <img src={assets.Home_5} alt="" className="w-100" />
            </div>
            <div className="col">
                <img src={assets.Home_2} alt="" className="w-100" />
            </div>

        </div>
        <br />
        <div className="row">
        <p>
          Thank you for choosing Artvista. We look forward to providing you with
          a shopping experience filled with creativity and aesthetic beauty.
          Let's explore the boundless possibilities of abstract art together!
        </p>
        </div>
     
       
      </div>
    </div>
  );
};

export default About;
