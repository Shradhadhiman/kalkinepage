import React from "react";
import { Row, Col, } from "antd";
import { Button } from "antd";
import Icon, { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import "./filter.css";
import { FaFilter } from "react-icons/fa6";
import { Slider } from "antd";
 
export default function Filter() {
    return (

<div className="container-fluid">
        <div className="container">
          <Row>
            <Col span={5}>

              <div className="background_color">
                <div className="compantselect_filter">
                  <h5 className="sidebar_title slidebar_titles">
                    <FaFilter />
                    Filters
                  </h5>
                <div className="filters">
                  <span className="labeltitle">Order by</span>
                  <select
                    name="order_by"
                    id="order_by"
                    className="order_select"
                    onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)"
                  >
                    <option value="highlights__MarketCapitalization">
                      Marketcap
                    </option>
                    <option value="Code">Ticker</option>
                    <option value="stock_fundamentals__Name">Name</option>
                    <option value="stock_fundamentals__Sector">Sector</option>
                    <option value="stock_fundamentals__Industry">
                      Industry
                    </option>
                    <option value="current_price__close">Price</option>
                    <option value="current_price__change">Change</option>
                    <option value="current_price__change_p">% Change</option>
                    <option value="highlights__PERatio">P/E Ratio</option>
                    <option value="highlights__DividendYield">
                      Dividend Yield
                    </option>
                  </select>
                  <select
                    name="order_sequence"
                    id="order_sequence"
                    className="ascdesc_select"
                    onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)"
                  >
                    <option value="desc">DESC</option>
                    <option value="asc">ASC</option>
                  </select>
                </div>

                <div className="filters">
                  <span className="labeltitle">Sector</span>
                  <select
                    id="gics_sector"
                    name="stock_fundamentals__Sector"
                    onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)"
                  >
                    <option selected="selected" value="">
                      Any
                    </option>
                    <option value="Academic &amp; Educational Services">
                      Academic &amp; Educational Services
                    </option>
                    <option value="Basic Materials">Basic Materials</option>
                    <option value="Communication Services">
                      Communication Services
                    </option>
                    <option value="Consumer Cyclical">Consumer Cyclical</option>
                    <option value="Consumer Defensive">Consumer Defensive</option>
                    <option value="Energy">Energy</option>
                    <option value="Financials">Financials</option>
                    <option value="Financial Services">Financial Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Industrials">Industrials</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Technology">Technology</option>
                    <option value="Utilities">Utilities</option>
                  </select>
                </div>
                <div className="filters">
                  <span className="labeltitle">Industry</span>
                  <select id="gics_industry" name="stock_fundamentals__Industry" onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)">
                    <option selected="selected" value="">Any</option>
                    <option value="Advertising Agencies">Advertising Agencies</option>
                    <option value="Aerospace &amp; Defense">Aerospace &amp; Defense</option>
                    <option value="Agricultural Inputs">Agricultural Inputs</option>
                    <option value="Airlines">Airlines</option>
                    <option value="Airports &amp; Air Services">Airports &amp; Air Services</option>
                    <option value="Apparel Manufacturing">Apparel Manufacturing</option>
                    <option value="Apparel Retail">Apparel Retail</option>
                    <option value="Asset Management">Asset Management</option>
                    <option value="Auto Manufacturers">Auto Manufacturers</option>
                    <option value="Auto Parts">Auto Parts</option>
                    <option value="Auto &amp; Truck Dealerships">Auto &amp; Truck Dealerships</option>
                    <option value="Banking Services">Banking Services</option>
                    <option value="Banks - Diversified">Banks - Diversified</option>
                    <option value="Banks-Diversified">Banks-Diversified</option>
                    <option value="Banks - Regional">Banks - Regional</option>
                    <option value="Beverages - Brewers">Beverages - Brewers</option>
                    <option value="Beverages - Non-Alcoholic">Beverages - Non-Alcoholic</option>
                    <option value="Beverages - Wineries &amp; Distilleries">Beverages - Wineries &amp; Distilleries</option>
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Broadcasting">Broadcasting</option>
                    <option value="Building Materials">Building Materials</option>
                    <option value="Building Products &amp; Equipment">Building Products &amp; Equipment</option>
                    <option value="Capital Markets">Capital Markets</option>
                    <option value="Chemicals">Chemicals</option>
                    <option value="Coking Coal">Coking Coal</option>
                    <option value="Collective Investments">Collective Investments</option>
                    <option value="Communication Equipment">Communication Equipment</option>
                    <option value="Computer Hardware">Computer Hardware</option>
                    <option value="Confectioners">Confectioners</option>
                    <option value="Conglomerates">Conglomerates</option>
                    <option value="Consulting Services">Consulting Services</option>
                    <option value="Consumer Electronics">Consumer Electronics</option>
                    <option value="Copper">Copper</option>
                    <option value="Credit Services">Credit Services</option>
                    <option value="Diagnostics &amp; Research">Diagnostics &amp; Research</option>
                    <option value="Discount Stores">Discount Stores</option>
                    <option value="Drug Manufacturers - General">Drug Manufacturers - General</option>
                    <option value="Drug Manufacturers - Specialty &amp; Generic">Drug Manufacturers - Specialty &amp; Generic</option>
                    <option value="Education &amp; Training Services">Education &amp; Training Services</option>
                    <option value="Electrical Equipment &amp; Parts">Electrical Equipment &amp; Parts</option>
                    <option value="Electrical Utilities &amp; IPPs">Electrical Utilities &amp; IPPs</option>
                    <option value="Electronic Components">Electronic Components</option>
                    <option value="Electronic Gaming &amp; Multimedia">Electronic Gaming &amp; Multimedia</option>
                    <option value="Engineering &amp; Construction">Engineering &amp; Construction</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Farm &amp; Heavy Construction Machinery">Farm &amp; Heavy Construction Machinery</option>
                    <option value="Farm Products">Farm Products</option>
                    <option value="Financial Data &amp; Stock Exchanges">Financial Data &amp; Stock Exchanges</option>
                    <option value="Financial Technology (Fintech) &amp; Infrastructure">Financial Technology (Fintech) &amp; Infrastructure</option>
                    <option value="Food Distribution">Food Distribution</option>
                    <option value="Footwear &amp; Accessories">Footwear &amp; Accessories</option>
                    <option value="Furnishings, Fixtures &amp; Appliances">Furnishings, Fixtures &amp; Appliances</option>
                    <option value="Gambling">Gambling</option>
                    <option value="Gold">Gold</option>
                    <option value="Grocery Stores">Grocery Stores</option>
                    <option value="Healthcare Plans">Healthcare Plans</option>
                    <option value="Healthcare Providers &amp; Services">Healthcare Providers &amp; Services</option>
                    <option value="Health Information Services">Health Information Services</option>
                    <option value="Home Improvement Retail">Home Improvement Retail</option>
                    <option value="Household &amp; Personal Products">Household &amp; Personal Products</option>
                    <option value="Industrial Distribution">Industrial Distribution</option>
                    <option value="Information Technology Services">Information Technology Services</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Insurance - Diversified">Insurance - Diversified</option>
                    <option value="Insurance - Life">Insurance - Life</option>
                    <option value="Insurance - Property &amp; Casualty">Insurance - Property &amp; Casualty</option>
                    <option value="Insurance - Reinsurance">Insurance - Reinsurance</option>
                    <option value="Insurance - Specialty">Insurance - Specialty</option>
                    <option value="Integrated Freight &amp; Logistics">Integrated Freight &amp; Logistics</option>
                    <option value="Internet Content &amp; Information">Internet Content &amp; Information</option>
                    <option value="Internet Retail">Internet Retail</option>
                    <option value="Investment Banking &amp; Investment Services">Investment Banking &amp; Investment Services</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Lodging">Lodging</option>
                    <option value="Lumber &amp; Wood Production">Lumber &amp; Wood Production</option>
                    <option value="Luxury Goods">Luxury Goods</option>
                    <option value="Marine Shipping">Marine Shipping</option>
                    <option value="Medical Care Facilities">Medical Care Facilities</option>
                    <option value="Medical Devices">Medical Devices</option>
                    <option value="Medical Instruments &amp; Supplies">Medical Instruments &amp; Supplies</option>
                    <option value="Metal Fabrication">Metal Fabrication</option>
                    <option value="Metals &amp; Mining">Metals &amp; Mining</option>
                    <option value="Miscellaneous Educational Service Providers">Miscellaneous Educational Service Providers</option>
                    <option value="Mortgage Finance">Mortgage Finance</option>
                    <option value="Multiline Utilities">Multiline Utilities</option>
                    <option value="Oil &amp; Gas Drilling">Oil &amp; Gas Drilling</option>
                    <option value="Oil &amp; Gas E&amp;P">Oil &amp; Gas E&amp;P</option>
                    <option value="Oil &amp; Gas Equipment &amp; Services">Oil &amp; Gas Equipment &amp; Services</option>
                    <option value="Oil &amp; Gas Integrated">Oil &amp; Gas Integrated</option>
                    <option value="Oil &amp; Gas Midstream">Oil &amp; Gas Midstream</option>
                    <option value="Oil &amp; Gas Refining &amp; Marketing">Oil &amp; Gas Refining &amp; Marketing</option>
                    <option value="Oil &amp; Gas Related Equipment and Services">Oil &amp; Gas Related Equipment and Services</option>
                    <option value="Other Industrial Metals &amp; Mining">Other Industrial Metals &amp; Mining</option>
                    <option value="Other Precious Metals &amp; Mining">Other Precious Metals &amp; Mining</option>
                    <option value="Packaged Foods">Packaged Foods</option>
                    <option value="Packaging &amp; Containers">Packaging &amp; Containers</option>
                    <option value="Paper &amp; Paper Products">Paper &amp; Paper Products</option>
                    <option value="Personal Services">Personal Services</option>
                    <option value="Pharmaceutical Retailers">Pharmaceutical Retailers</option>
                    <option value="Pollution &amp; Treatment Controls">Pollution &amp; Treatment Controls</option>
                    <option value="Publishing">Publishing</option>
                    <option value="Railroads">Railroads</option>
                    <option value="Real Estate - Development">Real Estate - Development</option>
                    <option value="Real Estate - Diversified">Real Estate - Diversified</option>
                    <option value="Real Estate Services">Real Estate Services</option>
                    <option value="Recreational Vehicles">Recreational Vehicles</option>
                    <option value="REIT - Diversified">REIT - Diversified</option>
                    <option value="REIT - Healthcare Facilities">REIT - Healthcare Facilities</option>
                    <option value="REIT - Hotel &amp; Motel">REIT - Hotel &amp; Motel</option>
                    <option value="REIT - Industrial">REIT - Industrial</option>
                    <option value="REIT - Office">REIT - Office</option>
                    <option value="REIT - Residential">REIT - Residential</option>
                    <option value="REIT-Residential">REIT-Residential</option>
                    <option value="REIT - Retail">REIT - Retail</option>
                    <option value="REIT - Specialty">REIT - Specialty</option>
                    <option value="Rental &amp; Leasing Services">Rental &amp; Leasing Services</option>
                    <option value="Residential &amp; Commercial REITs">Residential &amp; Commercial REITs</option>
                    <option value="Resorts &amp; Casinos">Resorts &amp; Casinos</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Scientific &amp; Technical Instruments">Scientific &amp; Technical Instruments</option>
                    <option value="Security &amp; Protection Services">Security &amp; Protection Services</option>
                    <option value="Semiconductor Equipment &amp; Materials">Semiconductor Equipment &amp; Materials</option>
                    <option value="Semiconductors">Semiconductors</option>
                    <option value="Shell Companies">Shell Companies</option>
                    <option value="Silver">Silver</option>
                    <option value=" Software - Application"> Software - Application</option>
                    <option value="Software - Application">Software - Application</option>
                    <option value="Software - Infrastructure">Software - Infrastructure</option>
                    <option value="Solar">Solar</option>
                    <option value="Specialty Business Services">Specialty Business Services</option>
                    <option value="Specialty Chemicals">Specialty Chemicals</option>
                    <option value="Specialty Industrial Machinery">Specialty Industrial Machinery</option>
                    <option value="Specialty Retail">Specialty Retail</option>
                    <option value="Staffing &amp; Employment Services">Staffing &amp; Employment Services</option>
                    <option value="Steel">Steel</option>
                    <option value="Telecom Services">Telecom Services</option>
                    <option value="Textile Manufacturing">Textile Manufacturing</option>
                    <option value="Textiles &amp; Apparel">Textiles &amp; Apparel</option>
                    <option value="Thermal Coal">Thermal Coal</option>
                    <option value="Travel Services">Travel Services</option>
                    <option value="Trucking">Trucking</option>
                    <option value="Uranium">Uranium</option>
                    <option value="Utilities - Diversified">Utilities - Diversified</option>
                    <option value="Utilities - Independent Power Producers">Utilities - Independent Power Producers</option>
                    <option value="Utilities - Regulated Electric">Utilities - Regulated Electric</option>
                    <option value="Utilities - Regulated Gas">Utilities - Regulated Gas</option>
                    <option value="Utilities - Regulated Water">Utilities - Regulated Water</option>
                    <option value="Utilities - Renewable">Utilities - Renewable</option>
                    <option value="Waste Management">Waste Management</option>
                  </select>
                </div>
                <div className="filters">
                  <span className="labeltitle">Price (CAD)</span>
                  <div className="price_data">
                    <div className="field">
                      <input type="number" className="input-min" value="0.005" onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)" />
                    </div>
                    <div className="field">
                      <input type="number" className="input-max" value="3623.0" onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)" />
                    </div>
                  </div>
                </div>
                <div className="sliders">
                 <Slider horizontal range step={0.005} defaultValue={[0.05, 3623.0]} />
                  </div>
                <div className="filters">
                  <span className="labeltitle">Marketcap (CAD)</span>
                  <div className="price_data">
                    <div className="field">
                      <input type="number" className="input-min" value="0.0" onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)" />
                    </div>
                    <div className="field">
                      <input type="number" className="input-max" value="3953206493184.0" onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)" />
                    </div>
                  </div>
                </div>
                <div className="sliders">
                <Slider horizontal range step={0.001} defaultValue={[0.005, 3623.0]} />
                </div>
                <div className="sidebar_title">
                  <h5>Explore market trends</h5>
                </div>
                <div className="image_text">
                  <ul>
                    <li>
                      <a target="_blank" href="/stocks/gainers">
                        <img src="/static/image/gainers.jpeg" width="30" alt="gainers" />
                        Gainers
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/stocks/losers">
                        <img src="/static/image/losers.jpeg" width="30" alt="losers" />
                        Losers
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/stocks/52-week-high">
                        <img src="/static/image/gainers.jpeg" width="30" alt="gainers" />
                        52 week high
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="/stocks/52-week-low">
                        <img src="/static/image/losers.jpeg" width="30" alt="losers" />
                        52 week low
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </Col>
            <Col span={19}>
              <Row>
                <Col span={12}>
                  <div className="pignation">
                    <div className="selects_row">
                      <label>Per Page</label>
                      <select name="item_per_page" id="item_per_page" onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30" selected="">30</option>
                        <option value="50">50</option>
                      </select>
                      <span className="total_row">of 1994 records</span>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ display: 'flex', flexDirection: "row" , float: "right" }}>

                    <div className="search_item">
                      <input type="text" name="search_term" id="search_term" placeholder="Search stocks..." onchange="if (!window.__cfRLUnblockHandlers) return false; updateTable(1)" />
                      <Button className="sumit" type="Search">Search</Button>
                    </div>
                    <div className="pignations">
                      <Button className="change" type onclick="updateTable(2)">Next</Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {/* <Col span={19}> */}
                  <div className="company">
                    <table className="screener_table">
                      <thead>
                        <tr>
                          <th>Ticker</th>
                          <th>Name</th>
                          <th>Sector</th>
                          <th className="content_end">Marketcap(million)</th>
                          <th className="content_end">Price(CAD)</th>
                          <th className="content_end">Change(CAD)</th>
                          <th className="content_end">%Change</th>
                          <th className="content_end">P/E</th>
                          <th className="content_end">DividendYield</th>
                        </tr>
                      </thead>
                      <tbody className="list_item">
                        <tr>
                          <td className="stocks_color">
                            <a href="/stock/tsx-ry" class="tab-link">RY</a></td>
                          <td>Royal Bank of Canada</td>
                          <td>Financial Services</td>
                          <td className="content_end">188206.45M</td>
                          <td className="content_end">132.14</td>
                          <td className="content_end">
                            <span className="negative">-0.12</span>
                          </td>
                          <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.09%</span>
                          </td>
                          <td className="content_end">12.74</td>
                          <td className="content_end">0.04</td>
                        </tr>
                        <tr>
                        <td className="stocks_color">
                        <a href="/company/tsx-td/" class="tab-link">TD</a></td>
                        <td>Toronto Dominion Bank</td>
                        <td>Financial Services</td>
                        <td className="content_end">145352.74M</td>
                        <td className="content_end">82.33</td>
                        <td className="content_end"><span className="positive">0.01</span></td>
                        <td className="content_end">
                        <ArrowUpOutlined />
                          <span className="positive arrowline_d">0.12%</span></td>
                          <td className="content_end">14.49</td>
                          <td className="content_end">0.05</td>
                          </tr>
                          <tr>
                          <td className="stocks_color">
                          <a href="/company/tsx-shop/" class="tab-link">SHOP</a></td>
                          <td>Shopify Inc</td>
                          <td>Technology</td>
                          <td className="content_end">137348.26M</td>
                          <td className="content_end">82.33</td>
                          <td className="content_end"><span className="positive">1.17</span></td>
                          <td className="content_end">
                          <ArrowUpOutlined />
                          <span className="positive arrowline_d">1.07%</span></td>
                          <td className="content_end">None</td>
                          <td className="content_end">0.0</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-cnr/" class="tab-link">CNR</a></td>
                            <td>Canadian National Railway Co</td>
                            <td>Industrials</td>
                            <td className="content_end">109746.28M</td>
                            <td className="content_end">165.34</td>
                            <td className="content_end"><span className="negative">-1.31</span></td>
                            <td className="content_end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.79%</span></td>
                            <td className="content_end">22.99</td>
                            <td className="content_end">0.02</td>
                          </tr>
                          <tr>
                             <td className="stocks_color">
                             <a href="/company/tsx-cp/" class="tab-link">CP</a></td>
                             <td>Canadian Pacific Railway Ltd</td>
                             <td>Industrials</td>
                             <td className="content-end">98257.35M</td>
                             <td className="content-end">110.39</td>
                             <td className="content-end"><span className="positive">2.20</span></td>
                             <td className="content-end">
                             <ArrowUpOutlined />
                             <span className="positive arrowline_d">2.03%</span></td>
                             <td className="text-end">23.59</td>
                             <td className="text-end">0.72%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-enb/" class="tab-link">ENB</a></td>
                            <td>Enbridge Inc</td>
                            <td>Energy</td>
                            <td className="content-end">102750.05M</td>
                            <td className="content-end">47.97</td>
                            <td className="content-end"><span className="positive">0.23</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.48%</span></td>
                            <td className="content-end">32.23</td>
                            <td className="content-end">7.57%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-bmo/" class="tab-link">BMO</a></td>
                            <td>Bank of Montreal</td>
                            <td>Financial Services</td>
                            <td className="content-end">92817.03M</td>
                            <td className="content-end">125.88</td>
                            <td className="content-end"><span className="negative">-0.76</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.60%</span></td>
                            <td className="content-end">22.67</td>
                            <td className="content-end">4.78%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-tri/" class="tab-link">TRI</a></td>
                            <td>Thomson Reuters Corp</td>
                            <td>Industrials</td>
                            <td className="content-end">92496.56M</td>
                            <td className="content-end">201.83</td>
                            <td className="content-end"><span className="positive">2.22</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">1.11%</span></td>
                            <td className="content-end">31.73</td>
                            <td className="content-end">1.29%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-cnq/" class="tab-link">CNQ</a></td>
                            <td>Canadian Natural Resources Ltd</td>
                            <td>Energy</td>
                            <td className="content-end">91933.76M</td>
                            <td className="content-end">84.93</td>
                            <td className="content-end"><span className="negative">-1.11</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">1.29%</span></td>
                            <td className="content-end">13.07</td>
                            <td className="content-end">4.73%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-bn/" class="tab-link">BN</a></td>
                            <td>Brookfield Corporation</td>
                            <td>Financial Services</td>
                            <td className="content-end">83452.02M</td>
                            <td className="content-end">52.58</td>
                            <td className="content-end"><span className="negative">-0.78</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">1.46%</span></td>
                            <td className="content-end">None</td>
                            <td className="content-end">0.69%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-atd/" class="tab-link">ATD</a></td>
                            <td>Alimentation Couchen Tard Inc A</td>
                            <td>Consumer Cyclical</td>
                            <td className="content-end">78724.32M</td>
                            <td className="content-end">79.3</td>
                            <td className="content-end"><span className="positive">1.05</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">1.34%</span></td>
                            <td className="content-end">19.41</td>
                            <td className="content-end">0.73%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-csu/" class="tab-link">CSU</a></td>
                            <td>Constellation Software Inc.</td>
                            <td>Technology</td>
                            <td className="content-end">77572.97M</td>
                            <td className="content-end">3705.75</td>
                            <td className="content-end"><span className="negative">-10.1101</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.27%</span></td>
                            <td className="content-end">108.69</td>
                            <td className="content-end">0.15%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-bns/" class="tab-link">BNS</a></td>
                            <td>Bank of Nova Scotia</td>
                            <td>Financial Services</td>
                            <td className="content-end">75294.77M</td>
                            <td className="content-end">63.22</td>
                            <td className="content-end"><span className="positive">0.34</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.55%</span></td>
                            <td className="content-end">10.73</td>
                            <td className="content-end">6.92%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-cm/" class="tab-link">CM</a></td>
                            <td>Canadian Imperial Bank Of Commerce</td>
                            <td>Financial Services</td>
                            <td className="content-end">57448.44M	</td>
                            <td className="content-end">60.75</td>
                            <td className="content-end"><span className="negative">-0.01</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.02%</span></td>
                            <td className="content-end">11.96</td>
                            <td className="content-end">5.84%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-su/" class="tab-link">SU</a></td>
                            <td>Suncor Energy Inc</td>
                            <td>Energy</td>
                            <td className="content-end">54779.35M</td>
                            <td className="content-end">43.91</td>
                            <td className="content-end"><span className="negative">-0.61</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">1.37%</span></td>
                            <td className="content-end">6.83</td>
                            <td className="content-end">5.15%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-trp/" class="tab-link">TRP</a></td>
                            <td>TC Energy Corp</td>
                            <td>Energy</td>
                            <td className="content-end">54006.96M</td>
                            <td className="content-end">53.21</td>
                            <td className="content-end"><span className="positive">0.17</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.32%</span></td>
                            <td className="content-end">None</td>
                            <td className="content-end">7.14%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-ngt/" class="tab-link">NGT</a></td>
                            <td>Newmont Goldcorp Corp</td>
                            <td>Basic Materials</td>
                            <td className="content-end">53751.43M</td>
                            <td className="content-end">47.34	</td>
                            <td className="content-end"><span className="positive">0.98</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">2.11%</span></td>
                            <td className="content-end">None</td>
                            <td className="content-end">4.58%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-wcn/" class="tab-link">WCN</a></td>
                            <td>Waste Connections Inc</td>
                            <td>Industrials</td>
                            <td className="content-end">52797.45M</td>
                            <td className="content-end">211.13</td>
                            <td className="content-end"><span className="positive">2.42</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">1.16%</span></td>
                            <td className="content-end">1.16%</td>
                            <td className="content-end">0.77%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-mfc/" class="tab-link">MFC</a></td>
                            <td>Manulife Financial Corp</td>
                            <td>Financial Services</td>
                            <td className="content-end">51431.62M	</td>
                            <td className="content-end">29.27</td>
                            <td className="content-end"><span className="negative">-0.455</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">1.53%</span></td>
                            <td className="content-end">4.06</td>
                            <td className="content-end">5.13%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-bce/" class="tab-link">BCE</a></td>
                            <td>BCE Inc</td>
                            <td>Communication Services</td>
                            <td className="content-end">51078.22M</td>
                            <td className="content-end">54.45	</td>
                            <td className="content-end"><span className="positive">0.20</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.37%</span></td>
                            <td className="content-end">22.95</td>
                            <td className="content-end">6.91%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-qsr/" class="tab-link">QSR</a></td>
                            <td>Restaurant Brands International Inc</td>
                            <td>Consumer Cyclical</td>
                            <td className="content-end">46024.86M</td>
                            <td className="content-end">105.94</td>
                            <td className="content-end"><span className="positive">0.99</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.94%</span></td>
                            <td className="content-end">26.41</td>
                            <td className="content-end">2.84%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-l/" class="tab-link">L</a></td>
                            <td>Loblaw Companies Limited</td>
                            <td>Consumer Defensive</td>
                            <td className="content-end">42380.93M	</td>
                            <td className="content-end">135.43</td>
                            <td className="content-end"><span className="positive">1.08</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.80%</span></td>
                            <td className="content-end">20.96	</td>
                            <td className="content-end">1.32%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-imo/" class="tab-link">IMO</a></td>
                            <td>Imperial Oil Ltd</td>
                            <td>Energy</td>
                            <td className="content-end">40139.55M	</td>
                            <td className="content-end">76.40</td>
                            <td className="content-end"><span className="negative">-1.15</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">1.48%</span></td>
                            <td className="content-end">8.42</td>
                            <td className="content-end">2.67%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-slf/" class="tab-link">SLF</a></td>
                            <td>Sun Life Financial Inc.</td>
                            <td>Financial Services</td>
                            <td className="content-end">40034.57M	</td>
                            <td className="content-end">69.27</td>
                            <td className="content-end"><span className="negative">-0.42</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.60%</span></td>
                            <td className="content-end">10.92</td>
                            <td className="content-end">4.56%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-gwo/" class="tab-link">GWO</a></td>
                            <td>Great-West Lifeco Inc.</td>
                            <td>Financial Services</td>
                            <td className="content-end">39939.58M	</td>
                            <td className="content-end">44.41</td>
                            <td className="content-end"><span className="negative">-0.47</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">1.05%</span></td>
                            <td className="content-end">18.31	</td>
                            <td className="content-end">4.85%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-cve/" class="tab-link">CVE</a></td>
                            <td>Cenovus Energy Inc</td>
                            <td>Energy</td>
                            <td className="content-end">37770.57M	</td>
                            <td className="content-end">21.60</td>
                            <td className="content-end"><span className="negative">-0.18</span></td>
                            <td className="content-end">
                            <ArrowDownOutlined />
                            <span className="negative arrowline_d">0.83%</span></td>
                            <td className="content-end">9.42</td>
                            <td className="content-end">2.79%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-ifc/" class="tab-link">IFC</a></td>
                            <td>Intact Financial Corporation</td>
                            <td>Financial Services</td>
                            <td className="content-end">36939.19M	</td>
                            <td className="content-end">210.59</td>
                            <td className="content-end"><span className="positive">0.34</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.16%</span></td>
                            <td className="content-end">35.11</td>
                            <td className="content-end">2.16%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-abx/" class="tab-link">ABX</a></td>
                            <td>Barrick Gold Corp</td>
                            <td>Basic Materials</td>
                            <td className="content-end">36830.81M</td>
                            <td className="content-end">21.18</td>
                            <td className="content-end"><span className="positive">0.18</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.88%</span></td>
                            <td className="content-end">524.50</td>
                            <td className="content-end">2.58%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-t/" class="tab-link">T</a></td>
                            <td>Telus Corp</td>
                            <td>Communication Services</td>
                            <td className="content-end">35822.10M</td>
                            <td className="content-end">24.14	</td>
                            <td className="content-end"><span className="positive">0.06</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">0.25%</span></td>
                            <td className="content-end">45.59</td>
                            <td className="content-end">6.11%</td>
                          </tr>
                          <tr>
                            <td className="stocks_color">
                            <a href="/company/tsx-ntr/" class="tab-link">NTR</a></td>
                            <td>Nutrien Ltd</td>
                            <td>Basic Materials</td>
                            <td className="content-end">34178.14M</td>
                            <td className="content-end">69.60</td>
                            <td className="content-end"><span className="positive">2.56</span></td>
                            <td className="content-end">
                            <ArrowUpOutlined />
                            <span className="positive arrowline_d">3.82%</span></td>
                            <td className="content-end">11.63</td>
                            <td className="content-end">4.10%</td>
                          </tr>
                      </tbody>
                    </table>
                    </div>
                {/* </Col> */}
              </Row>
            </Col>
           
          </Row>
        </div>
      </div>
    );
};