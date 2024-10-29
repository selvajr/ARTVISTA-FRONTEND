import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminVerification.css";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const AdminVerify = () => {
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);

  const validationSchema = Yup.object({
    email: Yup.string().required("please enter the email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
    
      try {
        const response = await axios.post(`${url}/api/user/admin-artist`, 
          values,
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
            Admin Verification
          </div>
          <div className="text-center">
            Enter your email and we'll send you a link
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label fs-5 fw-medium">
              Email
            </label>
            <input
              name="email"
              id="email"
              className="form-control"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <br />
          <button type="submit" className="btn  w-100 ">
            Verify
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

export default AdminVerify;
