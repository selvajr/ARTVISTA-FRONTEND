import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

const EditItem = () => {

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Abstract",
    price: "",
    artist: "",
  });
  
  const navigate = useNavigate();

  const [image, setImage] = useState(false);

  const { url, id } = useContext(StoreContext);

  useEffect(() => {
    fetchData();
  }, []);

//getting the data by id

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/arts/get-art/${id}`);
      if (response.status === 200) {
        setData(response.data.data);
        // console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

//updating the data by put method

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("artist", data.artist);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    try {
      const response = await axios.put(
        `${url}/api/arts/update-art/${id}`,
        formData
      );
      if (response.status === 200) {
        setData({
          name: "",
          description: "",
          category: "Abstract",
          price: "",
          artist: "",
        });
        setImage(false);
        toast.success(response.data.message);
        console.log(response.data);
        navigate("/admin/list");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  //handling the changes

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className=" add mt-4 w-75">
        <h1 className="text-center">UPDATE IMAGE</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h5 className="text ">Upload image</h5>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="art-image"
              />
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
              hidden
            />
          </div>
          <br />
          <div>
            <label htmlFor="name">Title</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              required
              placeholder="Enter the title"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              type="text"
              name="description"
              id="description"
              value={data.description}
              placeholder="write a content"
              required
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="artist">Artist</label>
            <br />
            <input
              type="text"
              name="artist"
              id="artist"
              value={data.artist}
              placeholder="Enter Artist name"
              required
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="Number"
              name="price"
              id="price"
              value={data.price}
              required
              placeholder="500"
              onChange={handleChange}
              className="price"
            />
          </div>
          <br />
          <div>
            <div>Category</div>
            <br />
            <select name="category" id="category" onChange={handleChange}>
              <option value="Abstract">Abstract</option>
              <option value="Set of 2">Set of 2</option>
              <option value="Plate Art">Plate Art</option>
              <option value="Animal Art">Animal Art</option>
              <option value="Poster">Poster</option>
              <option value="MadhuBani">MadhuBani</option>
            </select>
          </div>
          <br />
          <div className="text-center ">
            <button type="submit" className="px-5 py-1 m-1">
              UPDATE ITEM
            </button>
            <button onClick={() => navigate("/admin")} className="px-5 py-1">
              BACK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
