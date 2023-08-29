// slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const loadUserFromLocalStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error loading user from localStorage:", error);
    return null;
  }
};

const users = [];

export const saveUserToLocalStorage = (user) => {
  try {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error("Error saving user to localStorage:", error);
  }
};

export const saveLoggedInUserToLocalStorage = (user) => {
  localStorage.setItem("isLoggedIn", true);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signupSuccess: (state, action) => {
      state.user.push(action.payload)
      state.isLoggedIn = false;
      // saveUserToLocalStorage(action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, signupSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
