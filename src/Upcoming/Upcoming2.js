import React, { useState } from 'react'
import "./Upcoming.css"
import Navbar from '../navbar/Navbar'
// import "./Items.css"

export default function Upcoming2() {

    const [Popularevents, setPopularevents] = useState([
        {
            PopularImg: ("https://www.filmjabber.com/movie-poster-thumbs/ant-man-and-the-wasp-quantumania-movie-poster-6962.jpg"),
            PopularName: "Ant-Man and The Wasp: Quantumania",
            PopularSubname: "DLF Cyber Park Delhi",
        },
        

    ]);
    return (
        <>
            <Navbar />


            <div className="Featured2">
                <div className="Featured_info_flex">
                    <p className="Featured_info_p1" >Featured</p>
                    <p className="Featured_info_p2" >Popular Events</p>
                    <p className="Featured_info_p3" > Ant-Man & Quantumania</p>
                    <p className="Featured_info_p4" >Action,Adventure,Fantasy• UA</p>
                    <p className="Featured_info_p6" >About the movie</p>
                    <p className="Featured_info_p5" >

                       
                        Paul Rudd, Kathryn Newton, Evangeline Lilly, and Jonathan Majors in Ant-Man and the Wasp: Quantumania (2023)
                        Stars Kathryn Newton, Evangeline Lilly, and Jonathan Majors open up to IMDb about working with Ant-Man himself, Paul Rudd. From his slipper collection to his killer punch, here's everything we learned about the man behind the suit. Plus, Jonathan Majors gets chills when he talks about playing Kang the Conqueror, the MCU's next big bad.
                        Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible</p>



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