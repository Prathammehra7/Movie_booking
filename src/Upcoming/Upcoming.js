import React, { useState } from 'react'
import "./Upcoming.css"
import Navbar from '../navbar/Navbar'
// import "./Items.css"

export default function Upcoming() {

    const [Popularevents, setPopularevents] = useState([
        {
            PopularImg: ("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/brahmastra-et00063710-1661162101.jpg"),
            PopularName: "Brahmastra",
            PopularSubname: "DLF Cyber Park Delhi",
        },
        

    ]);
    return (
        <>
            <Navbar />


            <div className="Featured">
                <div className="Featured_info_flex">
                    <p className="Featured_info_p1" >Featured</p>
                    <p className="Featured_info_p2" >Popular Events</p>
                    <p className="Featured_info_p3" >Brahmastra: Part one Shiva</p>
                    <p className="Featured_info_p4" >Action,Adventure,Fantasy• UA</p>
                    <p className="Featured_info_p6" >About the movie</p>
                    <p className="Featured_info_p5" >BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India`s first original universe The Astraverse.

                        It is a new original cinematic universe inspired by deeply rooted concepts and tales from Indian history but set in the modern world, with epic storytelling of fantasy, adventure, good vs evil, love and hope; all told using cutting edge technology and never-seen-before visual spectacles.</p>


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