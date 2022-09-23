import React from "react";
import "./main.css"
import Hompage from "./Hompage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Movielb from "./Movies/Movielibrary";
import Contact from "./Contact/Contact";
import Items from "./Items/Items";
import Display from "./Display/Display";
import Other from "./Other/Other";
import Upcoming from "./Upcoming/Upcoming";
import Upcoming1 from "./Upcoming/Upcoming1";
import Upcoming2 from "./Upcoming/Upcoming2";
import Upcoming3 from "./Upcoming/Upcoming3";
import Map from "./Map/Index";
import Signup from "./Signup/Signup";
import Premium from "./Premium/Premium"
import Booking from "./Booking/Booking";
import Booking1 from "./Booking/Booking1";
import Booking2 from "./Booking/Booking2";
import Booking3 from "./Booking/Booking3";
import Booking4 from "./Booking/Booking4";
import Booking5 from "./Booking/Booking5";
import Booking6 from "./Booking/Booking6";
import Booking7 from "./Booking/Booking7";
import Booking8 from "./Booking/Booking8";
import Booking9 from "./Booking/Booking9";
import Booking10 from "./Booking/Booking10";
import Booking11 from "./Booking/Booking11";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Hompage/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Product" element={<Movielb/>}/>
          <Route exact path="/Premium" element={<Premium/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking1/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking2/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking3/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking4/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking5/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking6/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking7/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking8/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking9/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking10/>}/>
          <Route exact path="/Moviebook/:movieid" element={<Booking11/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path="/Items" element={<Items/>}/>
          <Route exact path="/Other" element={<Other/>}/>
          <Route exact path="/Display" element={<Display/>}/>
          <Route exact path="/Upcoming" element={<Upcoming/>}/>
          <Route exact path="/Upcoming1" element={<Upcoming1/>}/>
          <Route exact path="/Upcoming2" element={<Upcoming2/>}/>
          <Route exact path="/Upcoming3" element={<Upcoming3/>}/>
          <Route exact path="/get" element={<Contact/>}/>
          <Route exact path="/Map" element={<Map/>}/>
        </Routes>
      </Router>
    </div>
  );
}
