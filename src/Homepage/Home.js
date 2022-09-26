import React from "react";
import "./home.css"
import CarouselContainer from './../Component/CarouselContainer'
import Main from './../Videocomponent/Main';


export default function Home() {
    return (
        <>
            <CarouselContainer />

            <div class="photo">
                <h2 class="heading"><b>Movie Ticket Booking App</b></h2>
                <h4 class="headings">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h4>
                <a href="/"> <img src="https://thecolourmoon.com/assets/images/movie-ticket-booking.png" alt="" /></a>
            </div>

            <section id="about">
                <div class="deals" id="home">
                    Hot Deals
                </div>
                <div class="main2">
                    <div class="mainicons">
                        <div class="iconbar">
                            <div class="Icons">
                                <a href="/Items"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z" /></svg>
                                    <h1> Vouchers</h1></a>
                            </div>
                            <div class="Icons">

                                <a href="/Display">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 96h384v256h64v-272c0-26.38-21.62-48-48-48h-416c-26.38 0-48 21.62-48 48V352h64V96zM624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1z" /></svg>
                                    <h1> Display </h1></a>
                            </div>

                            <div class="Icons3">
                                <a href="/Map">   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                                    <h1> Location</h1></a>
                            </div>

                            <div class="Icons">
                                <a href="/Other">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z" /></svg>
                                    <h1> Others</h1></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Main />

            <section>
                <div class="photo2">
                    <a href="#photo" >
                        <img className=" w-52 " src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banner/BestsellersOffer_5343.jpg" alt="" />
                    </a>

                </div>
            </section>


            <section id="Item">
                <div class="first">
                    Upcoming Movies
                </div>
                <div class="imp">
                    <div class="mainline">
                        <div class="containerline">
                            <div class="icons">
                                <a href="/Upcoming" >
                                    <img className=" col" src="https://www.filmibeat.com/fanimg/movie/15620/brahmastra-photos-images-76811.jpg" alt="" />
                                </a>
                                <h1>Brahmastra – Part One: Shiva</h1>
                            </div>
                            <div class="icons">
                                <a href="/Upcoming1" >
                                    <img className="col" src="https://images.jdmagicbox.com/comp/jd_social/news/2018jul06/image-1904-7c6ece.jpg" alt="" />
                                </a>
                                <h1> Avatar: The Way of Water</h1>
                            </div>

                            <div class="icons">
                                <a href="/Upcoming2" >
                                    <img className="neem" src="https://www.filmjabber.com/movie-poster-thumbs/ant-man-and-the-wasp-quantumania-movie-poster-6962.jpg" alt="" />
                                </a>
                                <h1>Ant-Man and The Wasp: Quantumania</h1>
                            </div>

                            <div class="icons">
                                <a href="/Upcoming3" >
                                    <img className=" col" src="https://www.filmjabber.com/movie-poster-thumbs/scream-2022-movie-poster-6686.jpg" alt="" />
                                </a>
                                <h1>Scream (2022)</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}