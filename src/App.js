import React, { useEffect, useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cafeteria from "./pages/cafeteria/Cafeteria";
import Board from "./pages/cafeteria/Board";
import CoffeeMachine from "./pages/cafeteria/CoffeeMachine";
import Refrigerator from "./pages/cafeteria/Refrigerator";
import SwitchBox from "./pages/cafeteria/SwitchBox";
import SeminarRoom from "./pages/SeminarRoom";
import CeoRoom from "./pages/CeoRoom";
import Toilet from "./pages/Toilet";
import Exit from "./pages/Exit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seminarRoom" element={<SeminarRoom />} />
          <Route path="/cafeteria" element={<Cafeteria />} />
          <Route path="/cafeteria/board" element={<Board />} />
          <Route path="/cafeteria/coffeeMachine" element={<CoffeeMachine />} />
          <Route path="/cafeteria/refrigerator" element={<Refrigerator />} />
          <Route path="/cafeteria/switchBox" element={<SwitchBox />} />
          <Route path="/ceoRoom" element={<CeoRoom />} />
          <Route path="/toilet" element={<Toilet />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
