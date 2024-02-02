"use client";
import React from "react";
import { Row, Col, } from "antd";
import { Button } from "antd";
import { FaFilter } from "react-icons/fa6";
import Companies from "./companies";
import Icon, { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Filter from "./filter/filter"; 
import { Slider, style } from 'antd';
export default function company() {

  return (
    <div>
      <Companies />
      <Filter/>
    </div>
  );
}
