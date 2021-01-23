import React from 'react'
import map from './resources/images/map.svg';
import mapmobile from './resources/images/mapmobile.svg';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import AlexBerstein from "./resources/images/leadershipteam/Alex Berstein1.jfif";
import ChristopherMarley from "./resources/images/leadershipteam/Christopher.jpeg";
import SashJeetun from "./resources/images/leadershipteam/Sash Jeetun2.jfif";
import AanchalThakur from "./resources/images/leadershipteam/Aanchal Thakur3.jfif";
import SaifAkhtar from "./resources/images/leadershipteam/Saif Akhtar4.jfif";
import DeepakVachher from "./resources/images/leadershipteam/Deepak.png";
// import AdrianSchneuwly from "./resources/images/leadershipteam/Adrian Schneuwly6.jfif";
import KeirFinlowBates from "./resources/images/leadershipteam/Keir Finlow Bates6.jfif";
import FaisalKhan from "./resources/images/leadershipteam/Faisal Khan7.jfif";
import RobertSalmon from "./resources/images/advisors/Robert Salmon.jfif";
import ErikVanRompay from "./resources/images/advisors/Erik Van Rompay.jfif";
import HeatherSwope from "./resources/images/rockstars/Heather Swope1.jfif";
import BehzadPournouri from "./resources/images/rockstars/Behzad Pournouri.jfif";
import ElisabettaGiglio from "./resources/images/rockstars/Elisabetta Giglio.jfif";
import EltonEmiliano from "./resources/images/rockstars/Elton Emiliano.jfif";
import MushtaqueAhmed from "./resources/images/rockstars/Mushtaque Ahmed.jfif";
import PradyumnSingh from "./resources/images/rockstars/Pradyumn Singh.jfif";
import TitusAdenugba from "./resources/images/rockstars/Titus Adenugba.jfif";
import VladimirSolomakha from "./resources/images/rockstars/Vladimir Solomakha.jfif";
import HaÏdarAlly from "./resources/images/rockstars/HaÏdar Ally.jfif";


const leaderships = [
    {
        userImg: AlexBerstein,
        userName: "Alex Berstein",
        designation: "CEO",
        linkedin: "https://www.linkedin.com/in/alex-berstein-b1965910",
        twitter: "https://twitter.com/",
    },
    {
        userImg: SashJeetun,
        userName: "Sash Jeetun",
        designation: "COO",
        linkedin: "https://www.linkedin.com/in/jeetunsash",
        twitter: "https://twitter.com/",
    },
    {
        userImg: AanchalThakur,
        userName: "Aanchal Thakur",
        designation: "CIO/DEPUTY CEO",
        linkedin: "https://www.linkedin.com/in/ca-aanchal-thakur-33082218/",
        twitter: "https://twitter.com/",
    },
    {
        userImg: SaifAkhtar,
        userName: "Saif Akhtar",
        designation: "CPO",
        linkedin: "https://www.linkedin.com/in/saifakhtar",
        twitter: "https://twitter.com/",
    },
    {
        userImg: DeepakVachher,
        userName: "Deepak Vachher",
        designation: "CFO",
        linkedin: "https://www.linkedin.com/in/deepak-vachher-0618b74b",
        twitter: "https://twitter.com/",
    },
    {
        userImg: KeirFinlowBates,
        userName: "Keir Finlow Bates",
        designation: "CTO",
        linkedin: "https://www.linkedin.com/in/keirf",
        twitter: "https://twitter.com/",
    },
    {
        userImg: FaisalKhan,
        userName: "Faisal Khan",
        designation: "Head of Content and CMO",
        linkedin: "https://www.linkedin.com/in/faisal-khan-2a3009b",
        twitter: "https://twitter.com/",
    },
    {
        userImg: ChristopherMarley,
        userName: "Christopher Marley",
        designation: "Head of PR and Strategy",
        linkedin: "https://www.linkedin.com/in/christopher-marley-0168b292",
        twitter: "https://twitter.com/",
    },
]
const advisors = [
    {
        userImg: RobertSalmon,
        userName: "Robert Salmon",
        designation: "Advisor Business Development",
        linkedin: "https://www.linkedin.com/in/robertesalmon",
        twitter: "https://twitter.com/",
    },
    {
        userImg: ErikVanRompay,
        userName: "Erik Van Rompay",
        designation: "Advisor Partnerships",
        linkedin: "https://www.linkedin.com/in/innovationsfirst",
        twitter: "https://twitter.com/",
    },
]
const rockstarts = [
    {
        userImg: HeatherSwope,
        userName: "Heather Swope",
        designation: "Senior Developer",
        linkedin: "https://www.linkedin.com/in/heatherswope",
        twitter: "https://twitter.com/",
    },
    {
        userImg: BehzadPournouri,
        userName: "Behzad Pournouri",
        designation: "Solidity Development",
        linkedin: "https://www.linkedin.com/in/bitnician",
        twitter: "https://twitter.com/",
    },
    {
        userImg: ElisabettaGiglio,
        userName: "Elisabetta Giglio",
        designation: "Head of Communications",
        linkedin: "https://www.linkedin.com/in/elisabettagiglio",
        twitter: "https://twitter.com/",
    },
    {
        userImg: EltonEmiliano,
        userName: "Elton Emiliano",
        designation: "Associate Investor Relations",
        linkedin: "https://www.linkedin.com/in/elton-vargas-guerrero",
        twitter: "https://twitter.com/",
    },
    {
        userImg: MushtaqueAhmed,
        userName: "Mushtaque Ahmed",
        designation: "Lead App Development",
        linkedin: "https://www.linkedin.com/in/mushtaque-ahmed-9270634b",
        twitter: "https://twitter.com/",
    },
    {
        userImg: HaÏdarAlly,
        userName: "Haidar Ally",
        designation: "Front End Development",
        linkedin: "https://www.linkedin.com/in/haidarally",
        twitter: "https://twitter.com/",
    },
    {
        userImg: PradyumnSingh,
        userName: "Pradyumn Singh",
        designation: "Head of Digital Content",
        linkedin: "https://www.linkedin.com/in/pradyumn-singh-15020812a",
        twitter: "https://twitter.com/",
    },
    {
        userImg: TitusAdenugba,
        userName: "Titus Adenugba",
        designation: "Community Manager",
        linkedin: "https://www.linkedin.com/in/titusadenugba",
        twitter: "https://twitter.com/",
    },
    {
        userImg: VladimirSolomakha,
        userName: "Vladimir Solomakha",
        designation: "Web Support",
        linkedin: "https://www.linkedin.com/in/vladimir-solomakha-709037157",
        twitter: "https://twitter.com/",
    },
]


const Section1 = () => {
    return (
        <div className="team-section-1-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 title">
                        <span>The Dream Team</span>
                    </div>

                    <div className="col-12 subtitle">
                        <img src={map} className="map web-view" data-aos="zoom-in" />
                        {/*<div className="subtext" >
                            <p>Our team consists of a diverse group of individuals who are friendly, motivated, and having a clear sense of purpose. All the team members work autonomously, taking ownership over their work, and having individual power to improve results. They regularly engage with new challenges since they speak to their interests. At the same time, they are always willing to lend a helping hand to their colleagues, keeping the team spirit alive.</p>
                        </div>*/}
                    </div>
                    {/*<div className="col-12 teambutton">
                        <a className="btn" href="https://twitter.com/" target="_blank">Join the team</a>
                    </div>*/}
                    <div className="col-12">
                        <img src={mapmobile} className="mapmobile mobile-view" />
                    </div>
                </div>
            </div>
        </div>
    )
}


// const Common = () => {
//     return (
//         <div>

//         </div>
//     )
// }




const Section2 = () => {
    return (
        <div className="team-section-2-container">
            <div className="row">
                <div className="heading col-md-12">
                    <span>Leadership team</span>
                </div>
                {
                    leaderships.map((leader) => {
                        return (
                            <div className="teamdetails col-md-3 col-6">
                                <div className="row">
                                    <div className="item">
                                        <img className="userImg col-12 pl0 pr0" src={leader.userImg} />
                                        <div>
                                            <span className="name col-12">{leader.userName}</span>
                                        </div>
                                        <div>
                                            <span className="designation col-12">{leader.designation}</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={leader.linkedin}><AiFillLinkedin style={{ fontSize: '24px'}}/></a>
                                        {/* <a href={leader.twitter}><AiFillTwitterSquare /></a> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}



const Section3 = () => {
    return (
        <div className="team-section-2-container">
            <div className="row justify-content-center">
                <div className="heading col-md-12">
                    <span>Advisors</span>
                </div>
                {
                    advisors.map((advisor) => {
                        return (
                            <div className="teamdetails col-md-3 col-6 ">
                                <div className="row">
                                    <div className="item">
                                        <img className="userImg col-12 pl0 pr0" src={advisor.userImg} />
                                        <div>
                                            <span className="name col-12">{advisor.userName}</span>
                                        </div>
                                        <div>
                                            <span className="designation col-12">{advisor.designation}</span>
                                        </div>
                                    </div>
                                    <div className="col social_icon">
                                        <a href={advisor.linkedin}><AiFillLinkedin style={{ fontSize: '24px'}}/></a>
                                        {/* <a href={advisor.twitter}><AiFillTwitterSquare /></a> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}



const Section4 = () => {
    return (
        <div className="team-section-2-container">
            <div className="row">
                <div className="heading col-md-12">
                    <span>Rockstars</span>
                </div>
                {
                    rockstarts.map((rockstar) => {
                        return (
                            <div className="teamdetails col-md-3 col-6">
                                <div className="row">
                                    <div className="item">
                                        <img className="userImg col-12 pl0 pr0" src={rockstar.userImg} />
                                        <div>
                                            <span className="name col-12">{rockstar.userName}</span>
                                        </div>
                                        <div>
                                            <span className="designation col-12">{rockstar.designation}</span>
                                        </div>

                                    </div>
                                    <div className="col">
                                        <a href={rockstar.linkedin}><AiFillLinkedin style={{ fontSize: '24px'}}/></a>
                                        {/* <a href={rockstar.twitter}><AiFillTwitterSquare /></a> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    )
}







const Team = () => {
    return (
        <div>
            <Section1 />
            <div className="container">
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        </div>
    )
}

export default Team
