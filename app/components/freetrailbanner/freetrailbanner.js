"use client";
import React from "react";
import { Row, Col, Divider, Space, Carousel } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Banners from "../../../public/static/image/7days.png"
import Screener from "../../../public/static/image/Screener_Banner_2_bX8fxvB.png";
import './freetrailbanner.css'

export default function Freetrailbanner() {
  const carouselRef = React.createRef();
  const handlePrevClick = () => {carouselRef.current.prev();};   
  const handleNextClick = () => {carouselRef.current.next();};
  return (
        <Row className="bannerdiv">
          <Col>
            <Carousel
            ref={carouselRef}
              autoplay
              speed={500}
              dots={false} 
              dotActiveWidth={30}
              dotHeight={1}
              dotWidth={16}
              effect="scrollx"
              arrows={true}
            >
              <a href="https://www.kalkine.com/free-trial/" target="_blank">
              <img src={Banners.src} alt="banners" className="myimage" />
              </a>
              <a href="https://www.kalkine.com/screeners" target="_blank">
              <img src={Screener.src} alt="banners" className="myimage" />
              </a>
              
            </Carousel>
            <div className="btn_navs">
              <div className="left-btn" onClick={handlePrevClick}>
                <button type="button" role="presentation" class="btn-prev"/>
                <img src="/static//image/arrowicon.jpeg" />
              </div>
              <div className="right-btn" onClick={handleNextClick}>
                <button type="button" role="presentation" class="btn-next" />
                <img src="/static//image/arrowicon.jpeg" />
              </div>
            </div>
          </Col>
        </Row>
  );
}
