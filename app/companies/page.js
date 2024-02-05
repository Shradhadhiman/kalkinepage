"use client";
import React from "react";
import Image from "next/image";
import { Row, Col, } from "antd";
import { Button } from "antd";
import { FaFilter } from "react-icons/fa6";
import Companies from "./companies";
import Icon, { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Filter from "./filter/filter"; 
import Footer from "./footer/footer";
import { Slider, style } from 'antd';
import Disclaimer from "./filter/disclaimer/disclaimer";
export default function company() {

  return (
    <div>
      <Companies />
      <Filter/>
      <Footer/>
      <Disclaimer/>
    </div>
  );
}
