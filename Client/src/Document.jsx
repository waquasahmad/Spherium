import React from 'react'
import { Link } from 'react-router-dom';
//import tokenomics from "./resources/images/tokenomics.svg";
import tokenomics from "./resources/images/tokenomics.jpeg";
import filePath from "./resources/assets/whitepaper.pdf";

const Document = () => {
    return (
        <div className="row document-section" >
            <div className="col-md-3 col-12 leftside web-view">
                <nav id="navbar-example3" className="navbar">
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link " href="#item-1">Whitepaper</a>
                        <a className="nav-link " href="#item-2">Tokenomics</a>
                        <a className="nav-link " href="#item-3">Governance</a>
                    </nav>
                </nav>
            </div>

            <div className="col-md-9 col-12 right-side">

                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="10">
                    <div className="whitepaper col-12">
                        <span id="item-1" className="title">Whitepaper</span>
                        <p className="description">This is our first version of the White Paper, we are also working on defining our further capabilities like enabling cross chain using solutions such as RenVM and optimizing on Ethereum Layer 2.
                        Download white paper here.</p>
                        <br />
                        {/*<p className="description">The world has come a long way since Satoshi Nakamoto introduced Bitcoin in his whitepaper on Oct.
                        31st, 2008. Today the ecosystem talks about a lot more possibilities and innovations that can be
                        done with cryptocurrencies and its underlying technology, the blockchain. Since the advent of the
                        smart contract powered ethereum blockchain, the door for decentralised apps or dApps have
                        opened possibilities and ignited the innovative fuels of a socially concerned techie, giving rise to
                        financial solutions that bring the products of the regular banking system on the blockchain
                        ecosystem, and thereby breaking the barriers that kept the unbanked community behind it. The
                        crypto community started getting their hands dirty into the development of various financial
                        applications/solutions and hence the ecosystem started buzzing with the word DeFi (Decentralized
                        Finance).<br />
                        DeFi is an ecosystem of financial applications built on top of blockchain networks, aiming to create
                        an open-source, permissionless, and transparent financial services that are available to its
                        participants and operates without any central authority. DeFi enables users to interact with this
                        ecosystem and manage their assets on their own through peer-to-peer (P2P) and decentralized
                        applications (dApps). Like the traditional financial system, DeFi constitutes several
                        components/products that include but not limited to the following:<br /><br />
                        ● Lending and borrowing platform<br />
                        ● Trading platform or exchange<br />
                        ● Derivative or synthetic assets<br />
                        ● Insurance platform<br />
                        ● Prediction markets<br />
                        ● Alternative savings/investment platform </p>*/}
                        <Link to="route"
                            onClick={(event) => { event.preventDefault(); window.open(filePath); }}>
                            <button className="btn floatright">Download whitepaper</button>
                        </Link>

                    </div>
                    <div className="tokenomics col-12">
                        <span id="item-2" className="title">Tokenomics</span>
                        <p className="description">The process of the Spherium token allocation will be based on a community-type distribution, whereby each of these stakeholders will play an important part of the ecosystem. We intend to use the following distribution chart:
                        <br />
                        Each group is critical to the network’s development, growth, and maintenance:<br /><br />
                        ● Total supply 100 000 000<br /><br /> 
                        *Detailed token paper release date to be confirmed.</p>
                        <img src={tokenomics} alt="gov" className="tokenomics" />
                    </div>
                    <div className="governance col-12">
                        <span id="item-3" className="title">Governance</span>
                        <p className="description">Spherium's ultimate goal is to operate via a decentralized governance model for which Spherium will build a community of stakeholders to vote on essential issues related to its ecosystem. In the meantime, the Spherium core team will make decisions whenever needed for the wider interest of the Spherium ecosystem but will provide a 30 days gap between decision and implementation.<br /><br />
                        The Spherium governance model inspired by Uniswap will be put in place. The full control of the
                        Governance model will be handed over to SPH token holders by March 31, 2022, at approximately
                        12:00 GMT. In the meantime, the Spherium core team will make decisions whenever needed for the
                        wider interest of the Spherium ecosystem but will provide a 30-day period between decision and
                        implementation.<br /><br />
                        Once the 20% total supply of SPH is released, Spherium token holders will be able to initiate Spherium
                        Improvement Proposal (SIP) on the Spherium community forum and vote in favour of or against the
                        SIP. Some examples for the SIP could be:<br /><br />
                        ● Increase or decrease the HyperSwap liquidity pool fee depending on the volatility of the
                        trade.<br />
                        ● Adding new liquidity pools for HyperSwap.<br />
                        ● Adding new money markets to SphereComp.<br />
                        ● Adjusting the SPH allocation weights between different liquidity pools.<br /><br />
                       Apart from the SIP, the community forum will be used for general discussion on issues related to the
                       Spherium ecosystem, and Request for Comment (RFC). The general principles of Spherium governance
                       are:<br /><br />
                       ● 2.14% of the total supply (delegated) to submit a governance proposal<br />
                       ● 5% of SPH supply required to vote ’YES’ to reach quorum<br />
                       ● 7-day voting period<br />
                       ● At least 1 SPH token holding is required to vote<br />
                       ● 2-day time lock delay on execution of the proposal </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document
