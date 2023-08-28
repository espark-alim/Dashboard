import React from "react";
import Login from "./Login"
import Signup from "./components/Signup"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Flex } from "@chakra-ui/react";
import LayOuts from "./components/LayOut";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";

function App() {
  const { isCollapsed } = useSelector((state) => state.Collapse)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/layOuts" element={<LayOuts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
