import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './App.css'

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default App;
