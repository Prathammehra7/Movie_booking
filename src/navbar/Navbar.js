import React,{useState,useEffect} from "react";

// import "./Card.css"
// import sedan from "./sedan.png";
import "./navbar.css"


export default function Navbar() {
    const [inout,setinout] = useState()
    const [inoutDirection, setDirection] = useState("/Login");

    useEffect(() => {
        let tokenval = localStorage.getItem("token");
    
        if (tokenval) {
          setinout("Logout")
          setDirection("/")
        }
        else
        {
          setinout("Login");
          setDirection("/Login");
        }
       },[])
    
       const Handlechange = () => {
        let tokenval = localStorage.getItem("token");
        if (tokenval) {
          localStorage.removeItem("token");
        }
       }

    return (
        <>
            <nav class="navbar ">
                <div class="logo">
                <div class="logo1">
                        <img src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfQ...Knf93QXx1nbizxmfGwQoQJlkCEvgvtj8v4tb0NZoBRejhUJd885iSx...U4gD3UQ6oXbQZs4AVn8=" alt="" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z" /></svg> */}
                    </div>
                    
                </div>
                <input className="Search" type="text" placeholder="Type something to search" name="search"></input>
                <form class="oo" action="/action_page.php">
                    <button class="search" type="submit">Search</button>
                </form>

                <ul class="navlist">

                    <li><a href="#home">HOME</a></li>
                    <li><a href="#About">ABOUT</a></li>
                    <div class="lk">
                        <li><a href={inoutDirection} target={"_main"} onClick={() =>{
                            Handlechange();
                        }} >{inout}</a></li>
                    </div>
                </ul>

            </nav>

        </>
    );
}