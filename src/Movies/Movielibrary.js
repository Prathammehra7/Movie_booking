import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movielibrary.css";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

function Movielb() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    async function fetchData() {
      try {
        const data = (
          await axios.get("https://moviebooking07.herokuapp.com/movie/getmovies", {})
        ).data;
        setmovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    
    <div className="movie-return-div">
        <Navbar/>
    <div class="movie-page-banner">
        <p className="movie-page-banner-p">Have original experience of the movie on day first</p>
      </div>
      <div className="movie-page">
        {
            movie.map((moviee) => {
             return (
                <div className="movie-page-card">
                  <div className="movie-page-card-div-img">
                    <a className="movie-page-a" onClick={() => {
                      window.location.href = "/Moviebook/" + moviee._id;
                    }}><img className="movie-page-card-img" src={moviee.movieimg} alt="" /></a>
                  </div>
                  <p className="movie-page-p" >{moviee.movieName}</p>
                  <p className="movie-page-p1" >{moviee.movieLanguage} . {moviee.movieTime} </p>
                  <p className="movie-page-p2" >{moviee.theatre} . {moviee.Price} </p>
                </div>
                );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Movielb;