import React from "react";
import "./Headers.css";
import { assets } from "../../assets/assets";

import { Link, Navigate } from "react-router-dom";

const Headers = () => {

 
  return (
    <div>
      <div>
        <p className="d-flex align-items-center justify-content-center text-light bg-dark">
          25% OFF & 2 OR MORE GET 35% OFF
        </p>
      </div>
      <div className="container  main">
        <div className="row">
          <div className="col-md-6">
            <img src={assets.Home_8} alt="main-image" className="w-100" />
          </div>
          <div className="col-md-6">
            <h2 className="text-center">WELCOME</h2>
            <br />
            <p className="text-center">
              Colorful Dreams ,Transformed into reality..!!
            </p>
            <br />
            <p className="text-center">
              "Whispering Colors ,Shaping Dreams -Studio Reverie ,Your Artistic
              Odyssey Begins Here"
            </p>
            <br />
            <div className="text-center">
              <Link to="/arts">
                <button className="btn">Explore More</button>
              </Link>
            </div>
          </div>

          <br />
          <br />

          <br />
          <br />
        </div>
        <br />
        <div className="row">
          <p className="text-center">
            ArtVista Gallery inspires local and regional artists through active
            involvement with the international contemporary art community.
            ArtVista Gallery strives to be viewed as a credible and
            internationally respected art establishment; while empowering
            artists with the facilities, environment and experience to excel in
            their medium and enrich their lives.
          </p>
        </div>
        <br />

        <div className="row ">
          <div className="col">
            <div className=" d-flex justify-content-center align-items-center">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide  "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={assets.Home_1}
                      className="d-block w-100"
                      alt="wall-image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={assets.Home_2}
                      className="d-block w-100"
                      alt="wall-image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={assets.Home_3}
                      className="d-block w-100"
                      alt="wall-image"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="text-center">FREQUENTLY ASKED QUESTIONS</h3>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Can I Cancel My Order?
                  </button>
                </h3>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes, as long as the item has not been shipped. Please
                    contact artvistagallery.com or log into your account if you
                    need to cancel your order.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Packing ?
                  </button>
                </h3>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Rolled paintings are packed carefully in a strong paper
                    tube, Framed paintings are packed carefully in a quality
                    wooden box{" "}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    What is your return and exchange policy?
                  </button>
                </h3>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Hassle-free returns and exchanges. <br />
                    Return it for a FULL refund or get a replacement just as
                    easy as you purchase it. <br />
                    We want happy customers! For any reason, if you don't like
                    the painting you received, you can return it in its original
                    package and condition in 30 days on the receipt of it.
                    Please contact artvistagallery.com
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How long does a refund take a process?
                  </button>
                </h3>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Once we receive the returned items, it will take up to 3
                    business days for us to process the refund.For PayPal
                    account holders,up to 3 business days for the transaction to
                    appear on your PayPal accountFor credit card refunds.between
                    7-14 business days for the transaction to be completed.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Damaged goods?
                  </button>
                </h3>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    For damaged item, please kindly contact Artvista thin 30
                    days of the date it was received and will be exchanged for
                    the same item. Please contact us at artvistagallery.com if
                    you would like to replace your item
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="row show">
          <div className="col">
            <img src={assets.Art_1} alt="" className="w-100" />
          </div>
          <div className="col">
           
            <img src={assets.Art_2} alt="" className="w-100" />
          </div>
          <div className="col">
            <img src={assets.Art_3} alt="" className="w-100" />
          </div>
          <div className="col">
           
            <img src={assets.Art_4} alt="" className="w-100" />
          </div>
          <div className="col">
            
            <img src={assets.Art_5} alt="" className="w-100" />
          </div>
          <div className="col">
            <img src={assets.Art_6} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
