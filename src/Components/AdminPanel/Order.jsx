import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import '../../Pages/MyOrders/Myorder.css'

const Order = () => {
    const [data,setData]=useState([])
    const {url}=useContext(StoreContext)

    useEffect(()=>{fetchData()},[])

const fetchData=async()=>{
try {
    const response=await axios.get(`${url}/api/order/listorder`)
    if(response.status===200){
        setData(response.data.data)
        toast.success(response.data.message)
       // console.log(response.data.data)
    }
} catch (error) {
    toast.error(error.response.data.message)
}

}

    return (
        <div>
        <div className="container myorder">
          <h3 className="text ms-3 mt-1">Orders</h3>
  
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
                      return (<div> <span className="fw-bold">Order Items : </span>{item.name + " x" + item.quantity}</div>)
                     //we can access the last item of index
                    } else {
                      return (<div> <span className="fw-bold">Order Items : </span>{item.name + " x " + item.quantity + ","}</div>);
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

export default Order;