import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate=useNavigate()
  return (
    <div>
     
      <footer className="py-5 mt-2">
    
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h6  className="fw-bold">NEWSLETTER</h6>
              <p>Sign up to our newsletter to receive exclusive offers.</p>
              <input type="email" name="email" placeholder="Enter your Email" className="w-100" />
              <br />
              <br />
              <button className="btn btn-dark">SUBSCRIBE</button>
              <br />
              <br />
              <div className="d-flex">
                <p>
                  <i className="ri-pinterest-fill p-2"></i>
                </p>
                <p>
                  <i className="ri-instagram-fill p-2"></i>
                </p>
                <p>
                  <i className="ri-facebook-circle-fill p-2"></i>
                </p>
                <p>
                  <i className="ri-youtube-fill p-2"></i>
                </p>
              </div>
            </div>
            <br />
            <div className="col-md-3">
              <h6  className="fw-bold">CUSTOMER SERVICES</h6>
              <p>FAQs</p>
              <p>Shipping Policy</p>
              <p>Return & Refund Policy</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Intellectual Property Rights</p>
            </div>
            <br />
            <div className="col-md-3">
              <h6 className="fw-bold" onClick={()=>navigate('/about')}>ABOUT</h6>
              <p>Our Story</p>
              <p>Contact Us</p>
              <p>Artists</p>
              <p>Reviews</p>
            </div>
            <br />
            <div className="col-md-3">
              <h6 className="fw-bold">CONTACT</h6>
              <p>Email:mathikk06@gmail.com</p>
              <p>Phone:0987654321</p>
              <p>WhatsApp:0987654321</p>
            </div>
          </div>

          <br />
          <p className="m-0 text-center text-light fw-bold">Copyright © Mathi 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
