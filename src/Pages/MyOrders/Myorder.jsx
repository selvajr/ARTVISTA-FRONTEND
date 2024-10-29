import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import './Myorder.css';
const Myorder = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);
  //fetching the user order details

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      if (response.status === 200) {
        setData(response.data.data);
        // console.log(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container myorder">
        <h3 className="text ms-3 mt-1">My Orders</h3>

        {data.map((ele, index) => {
          return (
            <div className="card m-3 p-1" key={index}>
              <div className="card-body">
                <div className="card-title">  <span className="fw-bold">Name : </span>
                  {ele.address.firstname}
                  {ele.address.lastname}
                </div>
              
                <div>  <span className="fw-bold">Email : </span>{ele.address.email}</div>
                
                <div>
                  <div className="text">
                    <span className="fw-bold">Address : </span>
                    {ele.address.street},{ele.address.city}-
                    {ele.address.zipcode},{ele.address.state},
                    {ele.address.country}
                  </div>
                </div>
             

                {ele.items.map((item, i) => {
                  if (i === ele.items.length - 1) {
                    return (<div key={i}> <span className="fw-bold">Order Items : </span>{item.name + " x" + item.quantity}</div>)
                   //we can access the last item of index
                  } else {
                    return (<div  key={i}> <span className="fw-bold">Order Items : </span>{item.name + " x " + item.quantity + ","}</div>);
                  }
                })}

                <div>
                  <div><span className="fw-bold">Total Amount : </span>{ele.amount}</div>
                  <div><span className="fw-bold">Items : </span>{ele.items.length}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Myorder;
