import React, { useEffect, useState } from "react";
import './App.css'
import ListaFilmes from "./components/ListaFilmes/ListaFilmes";

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default App;
