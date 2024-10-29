import React, { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { toast } from "react-toastify";
import axios from "axios";
import OAuth from "../../Components/OAuth/OAuth";
import { StoreContext } from "../../Context/StoreContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
const {url}=useContext(StoreContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/api/user/register-user`,
        formData
      );
      if (response.status === 200) {
       
        toast.success(response.data.message);
        
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      {/* signup start */}
      <div className="register">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">
            Create Your Account
          </div>
        </div>
      
        <form onSubmit={handleSubmit}>
        <OAuth />
        <hr />
          <div>
            <label htmlFor="username" className="fs-5 fw-medium">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your User Name"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="email" className="fs-5 fw-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password" className="fs-5 fw-medium">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit" className="btn  w-100 ">
            Sign Up
          </button>
          <div className="text m-2 ">
            Have an account ? <Link to="/signin">SignIn</Link>
          </div>
          
        </form>
      </div>

      {/* signup end */}
    </div>
  );
};

export default SignUp;
