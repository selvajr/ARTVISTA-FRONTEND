import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { toast } from "react-toastify";
import axios from "axios";
import { signInSuccess, signInFailure } from "../../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../../Components/OAuth/OAuth";
import { StoreContext } from "../../Context/StoreContext";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setToken } = useContext(StoreContext);
const {url}=useContext(StoreContext)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
      `${url}/api/user/login-user`,
        formData
      );
      if (response.status === 200) {
        dispatch(signInSuccess(response.data));
        setToken(response.data.token);
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/arts");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      dispatch(signInFailure(error.response.data));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      {/* signin start */}
      <div className="login">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">
            Login to Your Account
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <OAuth />
          <hr />
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
            Sign In
          </button>
          <div className="text m-2 ">
            Don't Have an account ? <Link to="/signup">SignUp</Link>
          </div>
          <div className="text m-2 ">
          <Link to="/admin-artist">Artist ?</Link>
          </div>
        </form>
      </div>

      {/* signin end */}
    </div>
  );
};

export default SignIn;
