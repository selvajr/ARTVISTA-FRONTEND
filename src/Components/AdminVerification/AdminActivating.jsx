import React, { useContext} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./AdminVerification.css";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const AdminActivating = () => {
    const navigate = useNavigate();
    const { url } = useContext(StoreContext);
  const {id,token}=useParams();

    const validationSchema = Yup.object({
      username: Yup.string().required("please enter your name"),
      bio:Yup.string().required("please enter your biography"),
      portfolio:Yup.string().required("please enter your portfolio")
    });
  
    const formik = useFormik({
      initialValues: {
        username: "",
        bio:'',
        portfolio:'',
      },
      validationSchema,
      onSubmit: async (values) => {
      
        try {
          const response = await axios.post(`${url}/api/user/admin-bio/${id}/${token}`, 
            {values}
          );
          if (response.status === 200) {
            toast.success(response.data.message);
            navigate("/signin");
           // console.log(response.data.message)
          }
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }
      },
    });
  
    return (
        <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
        <div className="admin-verify">
          <div className="m-5">
            <div className="text-center  fs-2 fw-semibold">
              Admin Profile
            </div>
           
          </div>
  
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="username" className="form-label fs-5 fw-medium">
                Artist Name
              </label>
              <input
                name="username"
                id="username"
                className="form-control"
                type="text"
                placeholder="Enter the artist name"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username ? (
                <div className="text-danger">{formik.errors.username}</div>
              ) : null}
            </div>
            <br />
            <div>
              <label htmlFor="bio" className="form-label fs-5 fw-medium">
                Biography
              </label>
              <input
                name="bio"
                id="bio"
                className="form-control"
                type="text"
                placeholder="Enter your bio"
                onChange={formik.handleChange}
                value={formik.values.bio}
              />
              {formik.errors.bio? (
                <div className="text-danger">{formik.errors.bio}</div>
              ) : null}
            </div>
            <br />
            <div>
              <label htmlFor="portfolio" className="form-label fs-5 fw-medium">
              portfolio
              </label>
              <input
                name="portfolio"
                id="portfolio"
                className="form-control"
                type="text"
                placeholder="Enter your portfolio"
                onChange={formik.handleChange}
                value={formik.values.portfolio}
              />
              {formik.errors.portfolio ? (
                <div className="text-danger">{formik.errors.portfolio}</div>
              ) : null}
            </div>
            <br />
            <button type="submit" className="btn  w-100 ">
              Submit
            </button>
          </form>
          <div>
            <div className="text-center m-3">
              Back to <Link to="/signin">SignIn</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdminActivating;