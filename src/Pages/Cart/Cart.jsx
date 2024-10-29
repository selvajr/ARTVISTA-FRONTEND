import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const {
    cartItems,
    art_list,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="container">
        {art_list.map((ele, index) => {
          if (cartItems[ele._id] > 0) {
            return (
              <div key={index}>
                <div className="card align-content-center mt-5 p-4">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={`${url}/images/` + ele.image} alt="art-image" />
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <div>
                        <h4 className="card-title d-flex">{ele.name}</h4>
                        </div>
                        <div className="card-subTitle d-flex">
                          <span className="fw-bold">Category:</span>
                          {ele.category}
                        </div>
                        <br />
                        <div className=" card-title d-flex fw-bold">
                          $ {ele.price} (per art)
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-between align-items-between">
                      <div>
                        <div className="text-center">Quantity</div>
                        <br />
                        <div className="d-flex fw-bold text-center">
                          <div className="p-2">
                            <button
                              className="btn b2"
                              onClick={() => addToCart(ele._id)}
                            >
                              +
                            </button>
                          </div>

                          <div className="p-2 m-1">{cartItems[ele._id]}</div>
                          <div className="p-2">
                            <button
                              className="btn b2"
                              onClick={() => removeFromCart(ele._id)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-center">Total Amount</div>
                        <br />

                        <h4 className="text-center fw-bold p-2">
                          $ &nbsp;{ele.price * cartItems[ele._id]}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="row">
            <div className="col">
                <div className="card mt-5 p-4">
                <div className="d-flex justify-content-between align-items-center ">
                    <h3>Subtotal</h3>
                    <h4 className="fw-bold">$&nbsp;{getTotalCartAmount()}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                    <h3>Delivery Fees</h3>
                    <h4 className="fw-bold">$&nbsp;{getTotalCartAmount()===0?0:30}</h4>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center ">
                    <h3 className="fw-bold">Total</h3>
                    <h4 className="fw-bold">$&nbsp;{getTotalCartAmount()===0?0:getTotalCartAmount()+30}</h4>
                </div>
                <hr />
                <div className="text-center">
                    <button className="btn" onClick={()=>navigate('/placeorder')}> PROCEED TO CHECKOUT</button>
                </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
