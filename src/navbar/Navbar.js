import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import axios from "axios";
import Table from "./../Searchbar/Tabls";
// import "./Card.css"
// import sedan from "./sedan.png";
import "./navbar.css"
import "./Burger.css"


export default function Navbar() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [menu, setmenu] = useState(false);
    const [inout, setinout] = useState()
    const [inoutDirection, setDirection] = useState("/Login");

    useEffect(() => {
        let tokenval = localStorage.getItem("token");

        if (tokenval) {
            setinout("Logout")
            setDirection("/")
        }
        else {
            setinout("Login");
            setDirection("/Login");
        }
    }, [])

    const Handlechange = () => {
        let tokenval = localStorage.getItem("token");
        if (tokenval) {
            localStorage.removeItem("token");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000?q=${query}`);
          setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
      }, [query]);

    return (
        <>
            <nav class="navbar h-nav-resp ">
                <div class="logo">
                    <div class="logo1">
                        <img src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfQ...Knf93QXx1nbizxmfGwQoQJlkCEvgvtj8v4tb0NZoBRejhUJd885iSx...U4gD3UQ6oXbQZs4AVn8=" alt="" />
                    </div>

                </div>

                <div class="searchcomponent">
                    <input className="Search" type="text" placeholder="Type something to search" name="search"  onChange={(e) => setQuery(e.target.value.toLowerCase())}></input>
                    {<Table data={data} />} 
                    <div class="oo" action="/action_page.php">
                        <button class="search" type="submit">Search</button>
                    </div>
                </div>
                <div className={menu ? 'navbar_mobile_css' : 'navbar_ul'}>
                    <ul class="navlist v-class-resp"  >
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#About">ABOUT</a></li>
                        <div class="lk">
                            <li><a href={inoutDirection} target={"_main"} onClick={() => {
                                Handlechange();
                            }} >{inout}</a></li>
                        </div>
                    </ul>
                </div>
                <div className='menu_icon' onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={46} /> : <HiMenuAlt3 size={46} />}
                </div>
            </nav>



            {/* 
            <div className='navbar'>

                <div class="logo">
                    <div class="logo1">
                        <img src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfQ...Knf93QXx1nbizxmfGwQoQJlkCEvgvtj8v4tb0NZoBRejhUJd885iSx...U4gD3UQ6oXbQZs4AVn8=" alt="" />
                    </div>

                </div>
                <ul className={menu ? 'navbar_mobile_css' : 'navbar_ul'}>
                    <input className="Search" type="text" placeholder="Type something to search" name="search"></input>
                    <div class="oo" action="/action_page.php">
                        <button class="search" type="submit">Search</button>
                    </div>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#About">ABOUT</a></li>
                    <div class="lk">
                        <li><a href={inoutDirection} target={"_main"} onClick={() => {
                            Handlechange();
                        }} >{inout}</a></li>
                    </div>
                </ul>
                <div className='menu_icon' onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={46} /> : <HiMenu size={46} />}
                </div>

            </div> */}
        </>
    );
}

