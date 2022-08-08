import React from "react";
import "./main.css"
import Hompage from "./Hompage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Card1 from "./Cards/Card1";
import Contact from "./Contact/Contact";
import Items from "./Items/Items";
import Signup from "./Signup/Signup";
import Premium from "./Premium/Premium"
import Booking from "./Booking/Booking";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Hompage/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Product" element={<Card1/>}/>
          <Route exact path="/Premium" element={<Premium/>}/>
          <Route exact path="/First" element={<Booking/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path="/Items" element={<Items/>}/>
          <Route exact path="/get" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}
