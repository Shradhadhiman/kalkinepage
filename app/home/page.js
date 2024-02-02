"use client";
import React from "react";
import styles from "./home.css";
import { Row, Col, Divider, Space } from "antd";
import { images } from "../../public/static/image";
import Banners from "../../public/static/image/7days.png";
import Screener from "../../public/static/image/Screener_Banner_2_bX8fxvB.png";
import Image from "next/image";
import { Button } from "antd";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import Precommendation from "../components/precommendation/precommendation";
import Stockscoop from "../components/stockscoop/stockscoop";
import Stockresearch from "../components/stockreserach/stockresearch";
import Freshkalkine from "../components/freshkalkine/freshkalkine";
import Freetrailbanner from "../components/freetrailbanner/freetrailbanner";
import Sciencebehind from "../components/sciencebehind/sciencebehind";
import Stockideaportfolio from "../components/stockportfolio/stockideaportfolio";
import Latestarticle from "../components/latestarticle/Latestarticle";
import Subscriptiondeals from "../components/subscriptiondeals/subscriptiondeals";
import Mediacoverage from "../components/mediakalkine/Mediacoverage";
import Footer from "../components/footer/footer";
import Disclaimer from "../components/disclaimer/disclaimer";

import BootstrapBundleMin from "../components/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Carousel } from "antd";

export default function Home() {
  return (
    <div>
      <div className="box_design body_back">
        <Row className="bannerfluid" justify="center"></Row>
        <Freetrailbanner />
        <Sciencebehind />
        <div className="container-fluid">
          <div className="container">
          <Row>
          <Stockscoop />
          <Precommendation />
        </Row>
          </div>
        </div>
     
        <Stockresearch />
        <Freshkalkine />
        <Stockideaportfolio />
        <Latestarticle />
        <Subscriptiondeals />
        <Mediacoverage />
        <Footer />
        <Disclaimer />
      </div>
    </div>
  );
}
