import React,{useState} from 'react'
import "./Other.css"
import Navbar from '../navbar/Navbar'
// import "./Items.css"

export default function Other() {

    const [Popularevents, setpopularevents] = useState([
        {
            popularImg:("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "Harsh Gujral",
            popularSubname: "DLF Cyber Park Delhi",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "Shashi Dhiman Live",
            popularSubname: "Natrang Studo Ahmedabad",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "New Jokes",
            popularSubname: "Connaught Place",
        },
        {
            popularImg:("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "Swati Sachedava",
            popularSubname: "Clinque Noida",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "A Standup Comedy",
            popularSubname: "Maharana Auditorium Noida",
        },
        {
            popularImg:("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "Abhishek Upmanyu",
            popularSubname: "Kedarnath Auditorium Delhi",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00335625-ednscaqqxp-portrait.jpg"),
            popularName: "Vir Das Wanted Tour",
            popularSubname: "Sirifort Auditorium Delhi",
        },
    ]);
    return (
        <>
            <Navbar />


            <div className="featured">
        <div className="featured_info_flex">
          <p className="featured_info_p1" >Featured</p>
          <p className="featured_info_p2" >Popular Events</p>
        </div>
        </div>
        <div className='popular_container'>
        {
            Popularevents.map((popularevents) => {
                return(
                    <div className='popular_main'>
                        <div className='popular_div_img'><a href=""><img className='popular_img' src={popularevents.popularImg} alt="" /></a></div>
                        <div className='popular_name' >{popularevents.popularName}</div>
                        <div className='popular_subname' >{popularevents.popularSubname}</div>
                    </div>
                )
            })
        }      
        </div>

        </>
    )
}