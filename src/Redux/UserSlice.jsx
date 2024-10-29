import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentuser: null,
  error:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    signInSuccess: (state, action) => {
      state.currentuser = action.payload;
      
    },
    signInFailure:(state,action)=>{
        state.error=action.payload
    }
    , signOutSuccess: (state) => {
      state.currentuser = null;
      
      state.error = null;
    },
  },
});

export const {signInSuccess,signInFailure,signOutSuccess}=userSlice.actions;
export default userSlice.reducer;