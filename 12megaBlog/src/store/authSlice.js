// the work here is to track if the user is authenticated or not so just ask store for the status of user authentication

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    
    login: (state, action) => { 
      state.status = true;
      state.userData = action.payload.userData;
    },
    
    logout: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
})
export const {login,logout} = authSlice.actions //these are called actions
export default authSlice.reducer