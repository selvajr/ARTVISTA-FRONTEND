import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../../Redux/UserSlice";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentuser } = useSelector((state) => state.user);

  //console.log(currentuser)


  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 ">
        <div className="container">
          <Link to="/">
            <h1 className="navbar-brand fw-bold"><i class="ri-paint-fill"></i> &nbsp;ArtVista Gallery</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-0 ms-md-3 p-2">
                <Link
                  to="/"
                  className={path === "/" ? "nav-link active" : ""}
                  aria-current="page"
                >
                  <span className="text-light  fw-medium">
                 HOME
                  </span>
                </Link>
              </li>
              <li className="nav-item ms-0 ms-md-3 p-2">
                <Link
                  to="/about"
                  className={path === "/about" ? "nav-link active" : ""}
                >
                  <span className="text-light  fw-medium">
                  ABOUT
                  </span>
                </Link>
              </li>

              <li className="nav-item ms-0 ms-md-3 p-2 ">
                <Link to='/cartpage' className={path === "/cartpage" ? "nav-link active" : ""}>
                  <span className="text-light fw-medium">
                    <div className="d-flex">
                    <i className="ri-shopping-cart-fill fs-5"></i>&nbsp;&nbsp;
                   
                    </div>
                 
                  </span>
                </Link>
              </li>

              {currentuser ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={currentuser.data.profilePicture}
                        alt="profile-image"
                        className="profile-image"
                      />
                     
                      <span className="profile"> &nbsp;&nbsp;PROFILE</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">
                          {currentuser.data.username}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item">
                          {currentuser.data.email}
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to='/myorder'className="dropdown-item">My Orders</Link>
                      </li>
                      {currentuser.data.isAdmin && (
                        <li>
                          <Link to="/admin" className="dropdown-item">
                            Admin Panel
                          </Link>
                        </li>
                      )}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li onClick={handleSignout}>
                        <a className="dropdown-item">LogOut</a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-0 ms-md-3">
                    <Link to="/signin">
                      <button className="btn btn-light">
                        <i>Login</i>
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
