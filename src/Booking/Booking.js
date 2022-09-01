import React from 'react'
import "./moviebook.css";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function Booking() {
    
    const[Moviebook,setMoviebook] = useState({})
    // const[alert,setalert] = useState(false);
    const{movieid} = useParams();

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


      async function handleBooking()
      {

          const userId = {id : localStorage.getItem("userid")}
          console.log(userId);
          await axios.post(`https://moviebooking07.herokuapp.com/api/Moviebook/${movieid}`,userId).then(function (response)
      {
        if(response.data)
        {
           Swal.fire(
            'Just Book!',
            'Thank You ! You have Successfully Booked Your Movie',
            'success'
            )
        }
      }).catch(function (error)
      {
        console.log(error);
      })
  }
  return (

    
    <div className='return_div_moviebook'>
      
        <div className='movie-book-flex'>
            <div>
            <img className='movie-book-card-img' src={Moviebook.movieimg} alt="" />
            </div> 
            <div className='movie-book-div2'>
            <p className="movie-page-p" >{Moviebook.movieName}</p>
                  <p className="movie-page-p1" >{Moviebook.movieLanguage} . {Moviebook.movieWatch} </p>
                  <p className="movie-page-p2" >{Moviebook.movieTime}  </p>
                  <p className="movie-page-p2" >{Moviebook.moviePrice}  </p>
                <div className='movie-book-button-div'>
                <button className='movie-book-button' onClick={() => {
                  handleBooking();
                }}>
                Proceed To Book</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Booking;