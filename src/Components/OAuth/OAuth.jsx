import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInSuccess } from "../../Redux/UserSlice";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { app } from "../../firebase";

const OAuth = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("https://artvista-backend-1zpu.onrender.com/api/user/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
          
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token',data.token)
        dispatch(signInSuccess(data));
        navigate("/arts");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <button type="button" className="btn  w-100 " onClick={handleSubmit}>
        <i className="ri-google-fill fs-5"></i> Continue With Google
      </button>
    </div>
  );
};

export default OAuth;
