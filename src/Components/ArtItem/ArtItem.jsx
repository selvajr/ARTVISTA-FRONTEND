import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import CartPage from "../../Pages/CartPage/CartPage";
import "./ArtItem.css";
const ArtItem = ({ id, name, description, price, image, artist }) => {
  const { setId, url } = useContext(StoreContext);

  const navigate = useNavigate();
  const handleCart = (id) => {
    setId(id);
    navigate(`/cart/${id}`);
  };
  return (
    <div>
      <div className="col artitem">
        <div className="card" onClick={() => handleCart(id)}>
          <img src={`${url}/images/` + image} alt="image" />
          <div className="card-body">
            <div className="card-title ">{name}</div>
            <div className="card-subTitle fs-5">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-line"></i>
            </div>
            <div className="card-text text-secondary fw-medium ">${price}</div>
            <div className="card-text text-secondary ">{artist}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtItem;
