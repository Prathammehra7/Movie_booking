import React from "react";
// import "./Card.css"
// import sedan from "./sedan.png";
import "./home.css"
import CarouselContainer from './../Component/CarouselContainer'
import Main from './../Videocomponent/Main';


export default function Home() {
    return (
        <>
            <CarouselContainer/>
           
            <div class="photo">
                <h2 class="heading"><b>Movie Ticket Booking App</b></h2>
                <h4 class="headings">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h4>
               <a href="/"> <img src="https://thecolourmoon.com/assets/images/movie-ticket-booking.png" alt="" /></a>
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

            

<section id="about">
                <div class="deals" id="home">
                    Hot Deals
                   </div>
                <div class="main2">
                    <div class="mainicons">
                        <div class="iconbar">
                        <div class="Icons">
                        <a href="/Items"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z"/></svg></a>
                    <h1> Vouchers</h1>
                            </div>
                        <div class="Icons">
                      
                      <a href="/">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 96h384v256h64v-272c0-26.38-21.62-48-48-48h-416c-26.38 0-48 21.62-48 48V352h64V96zM624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1z"/></svg></a>
                    <h1> Display </h1>
                            </div>

                        <div class="Icons3">
                     <a href="/Map">   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg></a>
                    <h1> Location</h1>
                            </div>

                        <div class="Icons">
                        <a href="/Other">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg></a>
                    <h1> Others</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Main/>

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

            <section id="Item">
                <div class="first">
                    Upcoming Movies
                </div>
                <div class="imp">
                    <div class="mainline">
                        <div class="containerline">
                            <div class="icons">
                            <a href="#!" >
                            <img className=" col" src="https://www.filmibeat.com/fanimg/movie/15620/brahmastra-photos-images-76811.jpg" alt="" />
                        </a>
                                <h1>Brahmastra – Part One: Shiva</h1>
                            </div>
                            <div class="icons">
                            <a href="#!" >
                            <img className="col" src="https://images.jdmagicbox.com/comp/jd_social/news/2018jul06/image-1904-7c6ece.jpg" alt="" />
                        </a>
                                <h1> Avatar: The Way of Water</h1>
                            </div>

                            <div class="icons">
                            <a href="#!" >
                            <img className="neem" src="https://www.filmjabber.com/movie-poster-thumbs/ant-man-and-the-wasp-quantumania-movie-poster-6962.jpg" alt="" />
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