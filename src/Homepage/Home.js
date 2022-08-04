import React from "react";
// import "./Card.css"
// import sedan from "./sedan.png";
import "./home.css"

export default function Home() {
    return (
        <>
            <div class="photo">
                <h2 class="heading"><b>Movie Ticket Booking App</b></h2>
                <h4 class="headings">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h4>
               <a href="/Items"> <img src="https://thecolourmoon.com/assets/images/movie-ticket-booking.png" alt="" /></a>
            </div>

{/* 
            <div class="main1" id="home">
                <div class="box1">
                    
                    <div class="container1">
                        <a href="/First" >
                            <img className=" col" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjIlICAxNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128946-fvrsyqswpt-portrait.jpg" alt="" />
                        </a>

                        <div className="font">
                            <h2 class="texts"><b>Ek Villain Returns</b></h2>

                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                    <div class="container1">
                        <a href="#!" >
                            <img className="col1" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjMlICA0NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00075253-bbxuxnbmst-portrait.jpg" alt="" />
                        </a>

                        <div className="font">
                            <h2 class="texts"><b>Shamshera</b></h2>

                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#!" >
                            <img className="col" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICA3NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00302403-jmbsnyjdek-portrait.jpg" alt="" />
                        </a>

                        <div className="font">
                            <h2 class="texts"><b>Thor: Love and Thunder </b></h2>

                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                    <div class="container2">
                        <a href="#!" >
                            <img className=" col1" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA1N2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094131-bvntegebbz-portrait.jpg" alt="" />
                        </a>

                        <div className="font">
                            <h2 class="texts"><b>Rocketry</b></h2>

                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>

                <div className="Apps">
                    <video margin-top="50px" width="100%" height="500" controls >
                        <source src="https://rr5---sn-a5mekn6s.googlevideo.com/videoplayback?expire=1659557887&ei=n4PqYrLNHZmNkgae9bTIDQ&ip=104.227.173.206&id=o-AH1MnU90Vp9sAmO8IxyiroO0ytDi8wW3dvAwB-xdZML-&itag=22&source=youtube&requiressl=yes&mh=ik&mm=31%2C26&mn=sn-a5mekn6s%2Csn-n4v7snl7&ms=au%2Conr&mv=m&mvi=5&pl=24&initcwndbps=1037500&spc=lT-KhlJmBfPNIrvmkzVOH-79PlOQtJM&vprv=1&mime=video%2Fmp4&ns=sWgoUVdBbCPRG7wgrqlQolcH&cnr=14&ratebypass=yes&dur=77.902&lmt=1658875892124871&mt=1659535988&fvip=1&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=4532434&n=2tPVhmCOLIrMJSFIk&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgR_TFo5W63MrghuTQaR4zdkd8oVAzpCNXe9bu_ZoremUCIDZsQbYXPMkpV1mBWQMnhObG0s_W0UYTPwavt2r0XmvL&sig=AOq0QJ8wRAIgcnhbhjWAXZ5KY0bpv_2L7oVDo2En8eOU-plph-oDhgACIE-r0m7viX6bnZH1qSpX-oZYQ3u9zS0Ynn7ABdRwx2qL" type="video/mp4" />
                    </video>
                </div>
            </div> */}
            <section>
                <div class="photo2">
                    <a href="#photo" >
                        <img className=" w-52 " src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banner/BestsellersOffer_5343.jpg" alt="" />
                    </a>

                </div>
            </section>

            {/* <div class="main2" id="">
                <div className="coming">
                <b>Upcoming Movies</b>
                </div>
                <div class="box2">
                    <div class="container3">
                        <a href="#!" >
                            <img className=" col" src="https://www.filmibeat.com/fanimg/movie/15620/brahmastra-photos-images-76811.jpg" alt="" />
                        </a>

                        <div className="font">
                            <h2 class="texts"><b>Brahmastra – Part One: Shiva
                            </b></h2>

                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                    <div class="container4">
                        <a href="#!" >
                            <img className="col1" src="https://images.jdmagicbox.com/comp/jd_social/news/2018jul06/image-1904-7c6ece.jpg" alt="" />
                        </a>

                        <div className="font">
                            <h2 class="texts"><b>Avatar: The Way of Water
                            </b></h2>

                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <section>
                <div class="photo1">
                    <a href="#photo" >
                        <img className=" w-52 " src="https://www.asus.com/WebsitesBanner/IN/banners/foxkkzyesji5rjax/foxkkzyesji5rjax-0_0_desktop_1X.jpg" alt="" />
                    </a>

                </div>
            </section> */}

            <section id="about">
                <div class="deals">
                    Upcoming Movies
                </div>
                <div class="main2">
                    <div class="mainicons">
                        <div class="iconbar">
                            <div class="icons">
                            <a href="#!" >
                            <img className=" col" src="https://www.filmibeat.com/fanimg/movie/15620/brahmastra-photos-images-76811.jpg" alt="" />
                        </a>
                                <h1>Brahmastra – Part One: Shiva</h1>
                            </div>
                            <div class="icons">
                            <a href="#!" >
                            <img className="col1" src="https://images.jdmagicbox.com/comp/jd_social/news/2018jul06/image-1904-7c6ece.jpg" alt="" />
                        </a>
                                <h1> Avatar: The Way of Water</h1>
                            </div>

                            <div class="icons">
                            <a href="#!" >
                            <img className=" col" src="https://www.filmjabber.com/movie-poster-thumbs/ant-man-and-the-wasp-quantumania-movie-poster-6962.jpg" alt="" />
                        </a>
                                <h1>Ant-Man and The Wasp: Quantumania</h1>
                            </div>

                            <div class="icons">
                            <a href="#!" >
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