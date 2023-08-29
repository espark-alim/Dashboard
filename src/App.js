import React from "react";
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layouts from "./components/Layouts";
import { useSelector } from "react-redux";
import AccountCreated from "./components/AccountCreated";

function App() {
  const { isCollapsed } = useSelector((state) => state.Collapse)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/layouts" element={<Layouts />} />
          <Route path="/accountCreated" element={<AccountCreated />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
