import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./CartPage.css";
const CartPage = () => {
  const [data, setData] = useState([]);
  const { url, addToCart, removeFromCart, cartItems } =
    useContext(StoreContext);

  const navigate = useNavigate();


  useEffect(() => {
    fetchData();
  }, []);

  const { id } = useParams();
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/arts/get-art/${id}`);
      if (response.status === 200) {
        setData(response.data.data);
        // console.log(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" Container itemPage">
      <div className="align-items-center ">
        <div className="row m-3">
          <div className="col-md-6">
            <div>
              <img src={`${url}/images/` + data.image} alt="art-image" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h3 className="text p-2">{data.name}</h3>
              <div className="text"><span className="fw-bold">Category</span><br />{data.category}</div>
              <div>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <hr />
              <h5 className="fw-bold">$ {data.price}</h5>
              <hr />
              <div className="d-flex ">
                <div className="p-2">
                  <button className="btn b1 " onClick={() => addToCart(id)}>
                    +
                  </button>
                </div>

                <div className="p-2">
                 
                  <h5 className="text-center">{cartItems[id] || 0}</h5>
                </div>
                <div className="p-2">
                 
                  <button
                    className="btn b1 "
                    onClick={() => removeFromCart(id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <hr />
              <div>
                {!cartItems[id] ? (
                  <button className="btn" onClick={() => addToCart(id)}>
                    Add To Cart
                  </button>
                ) : (
                  <button className="btn" onClick={() => removeFromCart(id)}>
                    Remove To Cart
                  </button>
                )}
              </div>

              <hr />

              <div>
                <h6 className="fw-bold">Description</h6>
                <div>{data.description}</div>
              </div>
              <hr />
              <div>
                <button className="btn" onClick={() => navigate("/arts")}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
