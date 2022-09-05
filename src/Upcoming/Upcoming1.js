import React, { useState } from 'react'
import "./Upcoming.css"
import Navbar from '../navbar/Navbar'
// import "./Items.css"

export default function Upcoming1() {

    const [Popularevents, setPopularevents] = useState([
        {
            PopularImg: ("https://images.jdmagicbox.com/comp/jd_social/news/2018jul06/image-1904-7c6ece.jpg"),
            PopularName: "Avatar: The Way of Water",
            PopularSubname: "DLF Cyber Park Delhi",
        },
    

    ]);
    return (
        <>
            <Navbar />


            <div className="Featured1">
                <div className="Featured_info_flex">
                    <p className="Featured_info_p1" >Featured</p>
                    <p className="Featured_info_p2" >Popular Events</p>
                    <p className="Featured_info_p3" > Avatar: The Way of Water</p>
                    <p className="Featured_info_p4" >Action,Adventure,Fantasy• UA</p>
                    <p className="Featured_info_p6" >About the movie</p>
                    <p className="Featured_info_p5" > Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.</p>



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