import React from 'react'
import PrivacyPolicy from './components/PrivacyPolicy'
import { TermsOfService } from './components/TermsOfService'


const TermsAndPolicy = () => {
    return (
        <div className="row policy-section" >
            <div className="col-md-3 col-12 leftside web-view">
                <nav id="navbar-example3" className="navbar">
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link " href="#service">Terms of Service</a>
                        <a className="nav-link " href="#policy">Privacy Policy</a>
                    </nav>
                </nav>
            </div>

            <div className="col-md-9 col-12 right-side">

                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="10">
                    <div className="termandservice col-12">
                        <TermsOfService/>  
                    </div>
                   
                   <div className="policy col-12">
                        <PrivacyPolicy/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TermsAndPolicy
