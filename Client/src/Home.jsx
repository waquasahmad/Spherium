import React from 'react'
import Contactus from './components/Contactus'
import Governance from './components/Governance'
import News from './components/News'
import Partners from './components/Partners'
import Products from './components/Products'
import ProductsRoadMap from './components/ProductsRoadMap'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Tokenomics from './components/Tokenomics'
import Vision from './components/Vision'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
      <div>
        <Section1 />
        <div className="container sections-start">
          <Section2 />
          <Products />
          <ProductsRoadMap />
          <Vision />
          <div className="tokenomics-governance-section col-12">
            <div className="row col-md-12 col-sm-12">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <span>Tokenomics</span>
                  <div className="mobile-view float-right">
                    <a href="/document#tokenomics" className="anchor">
                      View Details
                    </a>
                  </div>
                </div>
                <div className="left-container">
                  <Tokenomics />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  {" "}
                  <span>Governance</span>
                  <div className="mobile-view float-right">
                    <a href="/document#governance" className="anchor">
                      View Details
                    </a>
                  </div>
                </div>
                <div className="right-container">
                  <Governance />
                </div>
              </div>
            </div>
          </div>
          {/* <Partners/> */}
          {/* <News/> */}
          <Contactus />
        </div>
      </div>
    );
}

export default Home
