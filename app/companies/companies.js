import React from "react";
import { Row, Col } from "antd";
import "./companies.css";

export default function Companies() {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="container">
          <Row>
            <Col span={17} >
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
                      <img src="/static/image/momentum-screener.jpeg" alt="gainers"/>
                      Momentum Screener
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/screeners/growth-screener">
                      <img src="/static/image/growth-screener.jpeg "alt="losers"/>
                      Growth Screener
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/screeners/cash-flow-screener">
                      <img src="/static/image/cash-flow-screener.jpeg" alt="screener"/>
                      Cash Flow Screener
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/pricing/">
                      <img src="/static/image/arrowicons.jpeg" alt="more"/>
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col span={7}>
             <div className="banner_images">
              <img src="/static/image/profit.jpeg"/>
             </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
