import React from "react";
import "./Page.css";
import { Carousel, Item, Caption } from "react-bootstrap";
export const Home = () => {
  return (
    <>
      
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block image w-100"
            src="https://links.papareact.com/gi1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://links.papareact.com/6ff"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://links.papareact.com/7ma"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      {/* <img src="https://links.papareact.com/6ff" alt="Second slide" /> */}
      {/* <div className="a"> */}
      {/* <div class="a" style="
      //     background: linear-gradient(0deg, #ffffff 0%, #daf3ee5c 67% ,transparent 100%);
      // "></div>
            </div> */}
    </>
  );
};
