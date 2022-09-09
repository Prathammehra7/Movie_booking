import React from 'react'

import Navbar from '../navbar/Navbar'
import "./Items.css"

export default function Items() {
    return (
        <>
            <Navbar />
            <div class="item">
                <div class="items">
                    {/* <h1> Upcoming Gaming phones</h1> */}
                    <div class="itemcontainer">
                        <div class="mp">

                            {/* <a class="" href="#!">
                    <img className=" w-52" src="https://toppng.com/uploads/preview/so-now-book-your-favorite-movie-ticket-at-bookmyshow-bookmyshow-gift-card-inr-500-11563589346awk6mvgcdx.png" alt="" />
                </a> */}

                            <a class="gh" href="#!">
                                <img className=" w-52" src="https://vocodesign.com/wp-content/uploads/2020/03/CJ-11.jpg" alt="" />
                            </a><h2>More About Movie Tickets</h2>

                            <h4>One can always look forward to watching new movies. Be it an animation, action, rom-com, thriller or movie of any genre. Movies are a definite source of entertainment. A time when or where you can spend time with your close one and munch on those delicious snacks while your eyes are glued towards the screen.</h4>
                            <a className='hg' href="#!">
                                <img className=" w-52" src="https://cdn.grabon.in/gograbon/images/category/1545147969055/movie-tickets-logo.png" alt="" />
                            </a>
                        </div>


                        <div className="book">
                            <h2 class="text"><b>BookMyShow Coupons & Offers </b></h2>
                            <p className="pb-4">
                                BookMyShow offers online reservation of movies, concert tickets, plays and events.
                            </p>
                        </div>
                    </div>

                    <div class="quality_card_conteiner">
                        <div className='dis'>
                            <a href="/Premium">
                                <div class="card">
                                    <div class="card_text">
                                        <h3>Buy 1 Get 1</h3>
                                        <p>
                                            Buy 1 & Get 1 Free on Movie Tickets (Select Bank Cards) Discover an endless variety of
                                            the world’s best artisan coffee from each of our
                                            roasters.
                                        </p>

                                    </div>
                                </div>
                            </a>
                            <a href="/Premium">

                                <div class="card">

                                    <div class="card_text">
                                        <h3>Exclusive benefits</h3>
                                        <p>
                                            Special offers and swag when you subscribe, including 30% off your first shipment.</p>

                                    </div>
                                </div>
                            </a>
                            <a href="/Premium">
                                <div class="card">


                                    <div class="card_text">
                                        <h3>Up to 40% off</h3>
                                        <p>
                                            We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}