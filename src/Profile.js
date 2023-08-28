// Profile.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../src/store/slices/authSlice';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {user?.username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
