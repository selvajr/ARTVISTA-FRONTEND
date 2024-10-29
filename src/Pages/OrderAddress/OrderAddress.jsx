import React, { useContext, useEffect, useState } from "react";
import "./OrderAddress.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {  useFormik } from "formik";
import * as Yup from "yup";

const OrderAddress = () => {
  const { getTotalCartAmount, token, url, cartItems, art_list } =
    useContext(StoreContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const validationSchema = Yup.object({
    firstname: Yup.string().required('please enter the firstname'),
    lastname: Yup.string().required('please enter the lastname'),
    email: Yup.string().required('please enter the email'),
    street:Yup.string().required('please enter the street'),
    city: Yup.string().required('please enter the city'),
    state: Yup.string().required('please enter the state'),
    zipcode: Yup.string().required('please enter the zipcode '),
    country: Yup.string().required('please enter the country'),
    phone:Yup.string().required('please enter the phone number'),

  })

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      phone: "",
    },
    validationSchema,
    onSubmit:async (values) => {
   
      try{
        let orderItems = [];
        
        art_list.map((item) => {
          if (cartItems[item._id] > 0) {
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id];
            orderItems.push(itemInfo);
          }
        });
       // console.log(orderItems);
        let orderData= {
          address:values,
          items: orderItems,
          amount: getTotalCartAmount() + 30,
        };
  
  
        let response = await axios.post(
          `${url}/api/order/placeorder`,
          orderData,
          { headers: { token } }
        );
  
        if (response.status === 200) {
          const { session_url } = response.data;
          window.location.replace(session_url);
        } else {
          alert("Error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  });


   //if token not found and cart amount was 0 means redirecting to cart page
   useEffect(() => {
    if (!token) {
      navigate("/cartpage");
    } else if (getTotalCartAmount === 0) {
      navigate("/cartpage");
    }
  }, [token]);


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="order container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-5 p-4">
              <h2>Delivery Info</h2>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={formik.handleChange}
                    
                    placeholder="Enter Your First name"
                    value={formik.values.firstname}
                  />
                  {formik.errors.firstname ? (
                    <div className="text-danger">{formik.errors.firstname}</div>
                  ) : null}
                </div>
                <br />
                <div className="col-md-6">
                  <label htmlFor="lastname">LastName</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={formik.handleChange}
                
                    placeholder="Enter Your Last name"
                    value={formik.values.lastname}
                  />
                   {formik.errors.lastname ? (
                    <div className="text-danger">{formik.errors.lastname}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id='email'
                  onChange={formik.handleChange}
              
                  placeholder="Enter Your email"
                  value={formik.values.email}
                />
                 {formik.errors.email? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    name="street"
                    onChange={formik.handleChange}
                   id='street'
                    placeholder="Enter Your street name"
                    value={formik.values.street}
                  />
                   {formik.errors.street ? (
                    <div className="text-danger">{formik.errors.street}</div>
                  ) : null}
                </div>
                <br />
                <div className="col-md-6">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                     id="city"
                    onChange={formik.handleChange}
                 
                    placeholder="Your City"
                    value={formik.values.city}
                  />
                     {formik.errors.city ? (
                    <div className="text-danger">{formik.errors.city}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    onChange={formik.handleChange}
                
                    placeholder="Your State"
                    value={formik.values.state}
                  />
                     {formik.errors.state ? (
                    <div className="text-danger">{formik.errors.state}</div>
                  ) : null}
                </div>
                <br />
                <div className="col-md-6">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                     id="zipcode"
                    onChange={formik.handleChange}
                   
                    placeholder="Your Zipcode"
                    value={formik.values.zipcode}
                  />
                     {formik.errors.zipcode ? (
                    <div className="text-danger">{formik.errors.zipcode}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    onChange={formik.handleChange}
                    id='country'
                    placeholder="your Country"
                    value={formik.values.country}
                  />
                   {formik.errors.country ? (
                    <div className="text-danger">{formik.errors.country}</div>
                  ) : null}
                </div>
                <br />
                <div className="col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    required
                    placeholder="Your Phone"
                    value={formik.values.phone}
                  />
                   {formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-5 p-4">
              <div className="d-flex justify-content-between align-items-center ">
                <h5 className="text-secondary">Subtotal</h5>
                <h5 className="fw-bold text-secondary">
                  $&nbsp;{getTotalCartAmount()}
                </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <h5 className="text-secondary">Delivery Fees</h5>
                <h5 className="fw-bold text-secondary">
                  $&nbsp;{getTotalCartAmount() === 0 ? 0 : 30}
                </h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center ">
                <h4 className="fw-bold">Total</h4>
                <h4 className="fw-bold">
                  $&nbsp;
                  {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
                </h4>
              </div>
              <hr />
              <div className="text-center">
                <button className="btn" type="submit">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderAddress;
