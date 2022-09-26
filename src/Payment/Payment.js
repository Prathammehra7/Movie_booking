import axios from "axios";
import { useState } from "react";
import React from 'react'
import Swal from 'sweetalert2';
import "./Payment.css";

function Payment() {

  const [mpayment, setmpayment] = useState({
    price: 99,
    movie: "Movie",
  });

  const initPayment = (data) => {
    const options = {
      key: process.env.KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: mpayment.movie,
      description: "Pay to IBookshow",
      image: mpayment.mimg,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://moviebooking07.herokuapp.com/api/Payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          Swal.fire({
            text: 'Your Booking has been Confirmed',
            imageUrl: 'https://cdn.dribbble.com/users/911154/screenshots/3332845/vfmov3.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/Product";
            }
          })
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  const handlePayment = async () => {
    try {
      const orderUrl = "https://moviebooking07.herokuapp.com/api/Payment/orders";
      const { data } = await axios.post(orderUrl, { amount: mpayment.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className='Payment_container'>
          <p>
            Building trust can take years,we help win it seconds
          </p>
        <div className="video__pay">
          <video muted="" autoplay="" playsinline="" loop="" preload="auto" class="css-kx0jrt">
            <source src="https://cdn.razorpay.com/static/assets/razorpay.com/homepage/videos/nike-desktop-web.webm" type="video/webM"></source>
            <source src="https://cdn.razorpay.com/static/assets/razorpay.com/homepage/videos/dashboard-dweb-hevc-safari.mp4" type="video/mp4"></source>
            <source src="https://cdn.razorpay.com/static/assets/razorpay.com/homepage/videos/dashboard-dweb-compressed.mov" type="video/mp4"></source>

          </video>
          <div id='payment_pay'><button className='pay' onClick={handlePayment}>Pay</button></div>
        </div>
      </div> */}

      <header className='main__header'>
        <div className='containers main__header-containers'>
          <div className="main__header-left">
            <h1>  Building trust can take years,we help win it seconds</h1>
            <h2>with Pratham Mehra</h2>
                <button className=' btn lg pay' onClick={handlePayment}>Pay</button>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
              <video muted="" autoplay="" playsinline="" loop="" preload="auto" class="css-kx0jrt">
                <source src="https://cdn.razorpay.com/static/assets/razorpay.com/homepage/videos/nike-desktop-web.webm" type="video/webM"></source>
                <source src="https://cdn.razorpay.com/static/assets/razorpay.com/homepage/videos/dashboard-dweb-hevc-safari.mp4" type="video/mp4"></source>
                <source src="https://cdn.razorpay.com/static/assets/razorpay.com/homepage/videos/dashboard-dweb-compressed.mov" type="video/mp4"></source>
              </video>
            </div>
          </div>
      </header>



    </>
  )
}

export default Payment