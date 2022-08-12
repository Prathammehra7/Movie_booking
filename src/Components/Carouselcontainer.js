import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./../Components/Carouselcontainer.css"
import image1 from './../slide/image/a.jpg';
import image2 from './../slide/image/b.jpg';
import image3 from './../slide/image/c.jpg';
import image4 from './../slide/image/d.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block wt-100"
          src={image1}
          width="1167" height="429"
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block wt-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block wt-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block wt-100"
          src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
  )
}

export default CarouselContainer;