import React,{useState} from 'react'
import "./Other.css"
import Navbar from '../navbar/Navbar'
// import "./Items.css"

export default function Other() {

    const [Popularevents, setpopularevents] = useState([
        {
            popularImg:("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA4IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00319088-phnxywubfh-portrait.jpg"),
            popularName: "Harsh Gujral",
            popularSubname: "DLF Cyber Park Delhi",
        },
        {
            popularImg: ("https://just-book-utkarsh.netlify.app/static/media/laughter_utkp_2.949237dc3165d765ec16.avif"),
            popularName: "Shashi Dhiman Live",
            popularSubname: "Natrang Studo Ahmedabad",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337201-utqjrhzqnn-portrait.jpg"),
            popularName: "Suhani Shah-India Tour",
            popularSubname: "Connaught Place",
        },
        {
            popularImg:("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA0IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00138467-hnbwkjludp-portrait.jpg"),
            popularName: "Nehru Planetarium, Delhi",
            popularSubname: "Nehru Planetarium: New Delhi",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyMyBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337235-tkmxnjcuqu-portrait.jpg"),
            popularName: "A Standup Comedy",
            popularSubname: "Maharana Auditorium Noida",
        },
        {
            popularImg:("https://just-book-utkarsh.netlify.app/static/media/laughter_utkp_6.74992ff1130de12d8bea.avif"),
            popularName: "Abhishek Upmanyu",
            popularSubname: "Kedarnath Auditorium Delhi",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzIFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317591-bjlkfktafq-portrait.jpg"),
            popularName: "Excuse Me Brother - Standup Solo by Aakash Gupta",
            popularSubname: "The Laugh Store: Vegas Mall Delhi",
        },
        {
            popularImg: ("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA5IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337442-smdmkbpjde-portrait.jpg"),
            popularName: "Gem Of A Person A Standup Comedy by Devesh Dixit",
            popularSubname: "Auro Kitchen and Bar: New Delhi",
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