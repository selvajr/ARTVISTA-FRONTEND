import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
  const [data, setData] = useState([]);
  const [deleteItem, setDeleteItem] = useState([]);
  const { url,setId } = useContext(StoreContext);
const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, [deleteItem]);

  //fetching the data

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/arts/get-art`);
      if (response.status === 200) {
        setData(response.data.data);
      //  console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  //removing the item from the list
  
  const handleRemove = async (id) => {
    // console.log(id)
    try {
      const response = await axios.delete(`${url}/api/arts/delete-art/${id}`);

      if (response.status === 200) {
        setDeleteItem(response.data);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

//editting by id
const handleEdit=(id)=>{
  setId(id)
  navigate(`/admin/edit/${id}`)
}

  return (
    <div>
      <div className="container">
        <div className="list-item">
          <div className="text-center ">
            <h1 className="text-center m-2">LIST ITEMS</h1>
            <button onClick={()=>navigate('/admin')} className="px-5 py-1">BACK</button>
          </div>
          <br />
          <div className="tablescroll">
            <table className="table table-responsive table-bordered ">
              <thead>
                <tr>
                  <th scope="col" className="text-center fs-5">
                    TITLE
                  </th>
                  <th scope="col" className="text-center fs-5">
                    ARTIST
                  </th>
                  <th scope="col" className="text-center fs-5">
                    PRICE
                  </th>
                  <th scope="col" className="text-center fs-5">
                    CATEGORY
                  </th>
                  <th scope="col" className="text-center fs-5">
                    DESCRIPTION
                  </th>
                  <th scope="col" className="text-center fs-5">
                    IMAGE
                  </th>
                  <th scope="col" className="text-center fs-5">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ color: "rgb(104, 25, 78)" }}>{ele.name}</td>
                      <td style={{ color: "rgb(104, 25, 78)" }}>
                        {ele.artist}{" "}
                      </td>
                      <td style={{ color: "rgb(104, 25, 78)" }}>{ele.price}</td>
                      <td style={{ color: "rgb(104, 25, 78)" }}>
                        {ele.category}
                      </td>
                      <td style={{ color: "rgb(104, 25, 78)" }}>
                        {ele.description}
                      </td>
                      <td style={{ color: "rgb(104, 25, 78)" }}>
                        <img
                          src={`${url}/images/` + ele.image}
                          alt="art-image"
                        />
                      </td>
                      <td
                        style={{ color: " rgb(52, 88, 44)" }}
                        className="text-center"
                      >
                        <i className="ri-edit-2-line me-2" onClick={()=>handleEdit(ele._id)}></i>
                        <i
                          className="ri-delete-bin-5-fill ms-2"
                          onClick={() => handleRemove(ele._id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
