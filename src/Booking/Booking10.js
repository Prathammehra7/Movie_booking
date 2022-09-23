import React from 'react'
import "./moviebook.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import Swal from 'sweetalert2';


function Booking10() {

  const [Moviebook, setMoviebook] = useState({})
  // const[alert,setalert] = useState(false);
  const { movieid } = useParams();

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    async function fetchData() {
      try {
        const data = (
          await axios.get(`https://moviebooking07.herokuapp.com/movie/findmovies/${movieid}`, {})).data;
        setMoviebook(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  async function handleBooking() {

    const userId = { id: localStorage.getItem("userid") }
    console.log(userId);
    await axios.post(`https://moviebooking07.herokuapp.com/api/Moviebook/${movieid}`, userId).then(function (response) {
       {
        window.location.href = "/Payment"
      }
    }).catch(function (error) {
      console.log(error);
    })
  }
  return (


    <div className='return_div_moviebook'>
      <section class="main-background">
        <Navbar />


        <div class="New">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/4f46d201-48d4-40a7-9bfb-8e260d680912/IN-en-20220725-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt=""></img>
        </div>
        <div class="Box">
          <h1>
          <p className="movie-page-p" >{Moviebook.movieName}</p>

            <div class="heart">
              <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/love-5700794-4778169.png"
                alt=""></img>
              <div class="rating">
                17.3K ratings
              </div>
            </div>
            <div class="D">
              <a href="">2D</a>
            </div>
            <div class="D">
              <a href="">3D</a>
            </div>
            <div class="info">
            <p className="movie-page-p" >{Moviebook.theater} </p>
            <p className="movie-page-p1" >{Moviebook.movieTime} </p>
              2h 8m •Action,Romantic,Thriller• UA • 29 Jul, 2022
            </div>
            <button className='button' onClick={() => {
                  handleBooking();
                }}>
                Proceed To Book</button>
          </h1>
          <div class="side">
          <img className='movie-book-card-img' src={Moviebook.movieimg} alt="" />
          </div>
        </div>
        <div class="Box1">
          <h6>
            Watch anywhere.Cancle anytime
          </h6>
        </div>
        <div class="Box2">

        </div>

      </section>


    </div>
  )
}

export default Booking10;