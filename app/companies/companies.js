import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import Screener from "../../public/static/image/momentum-screener.jpeg"
import Growth from "../../public/static/image/growth-screener.jpeg"
import Cash from "../../public/static/image/cash-flow-screener.jpeg"
import More from "../../public/static/image/arrowicons.jpeg"
import Profit from "../../public/static/image//profit.jpeg"
import "./companies.css";

export default function Companies() {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="container">
          <Row>
            <Col xs={24} sm={24} md={16} >
              <div className="company_hrading">
                <p className="breadcrumbs">
                  <a href="/">Home</a>»<span>Companies</span>
                </p>
                <h1>Companies</h1>
                <p className="investore">
                  Are you an investor that on the lookout for financially sound for companies that have operated for many years and have dependable earnings, often paying dividends to investors? You are the right place
                </p>
                <ul className="image_banner">
                  <li>
                    <a target="_blank" href="/screeners/momentum-screener">
                      <Image src={Screener}/>
                      Momentum Screener
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/screeners/growth-screener">
                      <Image src={Growth}/>
                      Growth Screener
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/screeners/cash-flow-screener">
                      <Image src={Cash}/>
                      Cash Flow Screener
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/pricing/">
                      <Image src={More}/>
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={8} sm={16} md={8} >
             <div className="banner_images">
              <Image src={Profit}/>
             </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
