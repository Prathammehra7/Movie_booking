import React, { useState } from 'react'
import "./Upcoming.css"
import Navbar from '../navbar/Navbar'
// import "./Items.css"

export default function Upcoming3() {

    const [Popularevents, setPopularevents] = useState([
        {
            PopularImg: ("https://www.filmjabber.com/movie-poster-thumbs/scream-2022-movie-poster-6686.jpg"),
            PopularName: "Scream (2022)",
            PopularSubname: "DLF Cyber Park Delhi",
        },
       

    ]);
    return (
        <>
            <Navbar />


            <div className="Featured3">
                <div className="Featured_info_flex">
                    <p className="Featured_info_p1" >Featured</p>
                    <p className="Featured_info_p2" >Popular Events</p>
                    <p className="Featured_info_p3" > Scream: (2022) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p>
                    <p className="Featured_info_p4" >Action,Adventure,Horror,thriller• UA</p>
                    <p className="Featured_info_p6" >About the movie</p>
                    <p className="Featured_info_p5" > 25 years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.</p>



                </div>
            </div>
            <div className='Popular_container'>
                {
                    Popularevents.map((Popularevents) => {
                        return (
                            <div className='Popular_main'>
                                <div className='Popular_div_img'><a href=""><img className='Popular_img' src={Popularevents.PopularImg} alt="" /></a></div>
                                <div className='Popular_name' >{Popularevents.PopularName}</div>
                                <div className='Popular_subname' >{Popularevents.PopularSubname}</div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}