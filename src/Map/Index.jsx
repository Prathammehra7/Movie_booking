import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import Map from "./components/Map";

import "./Map.css";
import Navbar from "../navbar/Navbar";
export default function Index() {
  
  const googleMapsApiKey = "AIzaSyBl2oJaWVIAGrzYmMPeHSm0IQnwVm0WXMU";
  
  const modalMapStyles = [
    {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#e0efef"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        hue: "#1900ff"
      },
      {
        color: "#c0e8e8"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 100
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 700
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#7dcdcd"
      }
    ]
  }
];

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <div className="container py-2 d-flex flex-column mvh-100 text-center">
        <div className="map">
        <img className="map__image" src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80);
  background-size: contain;" alt="" />
  </div>
  <div className="map__right">
        <h3>Map</h3>
        <div className="row py-3 flex-grow-1">
          <div className="col-12">
            <div className="cards shadow h-100">
              {/* map is defined here and traffic layer is passed in*/}
              <Map apiKey={googleMapsApiKey} layerTypes={["TrafficLayer"]} />
            </div>
          </div>
        </div>
   
      <div className="modal" tabIndex="-1" role="dialog" id="myModal">
        <div
          className="modal-dialog modal-lg mvh-90 w-100 d-flex flex-column"
          role="document"
          >
          <div className="modal-content flex-grow-1">
           
            <div className="modal-body p-0 h-100">
              <div className="h-100 w-100 position-absolute">
                {/*modal map is defined here- custom styles and zoom are passed in*/}
                <Map
                  apiKey={googleMapsApiKey}
                  center={[42.302, -71.033]}
                  styles={modalMapStyles}
                  zoom={13}
                  />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                >
                <a href="/">Back Homepage</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
                </div>
    </>);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
}