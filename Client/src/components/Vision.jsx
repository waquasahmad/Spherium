import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import AlexBerstein from "../resources/images/leadershipteam/Alex Berstein1.jfif";
import SashJeetun from "../resources/images/leadershipteam/Sash Jeetun2.jfif";
import AanchalThakur from "../resources/images/leadershipteam/Aanchal Thakur3.jfif";
const advisor = {
    alex:'https://www.linkedin.com/in/alex-berstein-b1965910',
    sash:'https://www.linkedin.com/in/jeetunsash',
    aanchal: "https://www.linkedin.com/in/ca-aanchal-thakur-33082218/",
  };
const Vision = () => {
  return (
    <div className="vision-section wow fadeInUp" data-wow-delay=".5s">
      <div className="row g-0">
        
        <div className="col-md-12 col-sm-12 left-container">
          <div className="title">Core Team</div>
          <div className="row g-0">
           
            <div className="col-md-12 col-7">
             <div className="row col-md-12 signature">
                <div className="col-md-4 col-sm-12 text-center">
                <img src={AlexBerstein} className="ceoAd" alt="ceo" />
              <div className="clearfix"></div>
                  <span>
                    <strong>Alex Berstein</strong>
                  </span>
                  <br />
                  <span>CEO, Spherium Labs</span>
                  <div className="col social_icon mb-2">
                  <a href={advisor.alex}>
                    <AiFillLinkedin style={{ fontSize: "24px" }} />
                  </a>
                  {/* <a href={advisor.twitter}><AiFillTwitterSquare /></a> */}
                </div>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                <img src={SashJeetun} className="ceoAd" alt="ceo" />
              <div className="clearfix"></div>
                  <span>
                    <strong>Sash Jeetun</strong>
                  </span>
                  <br />
                  <span>Co-Founder & COO</span>
                  <div className="col social_icon mb-2">
                  <a href={advisor.sash}>
                    <AiFillLinkedin style={{ fontSize: "24px" }} />
                  </a>
                  {/* <a href={advisor.twitter}><AiFillTwitterSquare /></a> */}
                </div>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                <img src={AanchalThakur} className="ceoAd" alt="ceo" />
              <div className="clearfix"></div>
                  <span>
                    <strong>Aanchal Thakur</strong>
                  </span>
                  <br />
                  <span>Co-Founder & Deputy CEO</span>
                  <div className="col social_icon mb-2">
                  <a href={advisor.aanchal}>
                    <AiFillLinkedin style={{ fontSize: "24px" }} />
                  </a>
                  {/* <a href={advisor.twitter}><AiFillTwitterSquare /></a> */}
                </div>
                </div>
              
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Vision;
