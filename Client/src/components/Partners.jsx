import React from 'react'
import spherecomp from "../resources/images/spherecomp.png";

const allPartners = [
    { id: "partner1", partnerImg: spherecomp, },
    { id: "partner2", partnerImg: spherecomp, },
    { id: "partner3", partnerImg: spherecomp, },
    { id: "partner4", partnerImg: spherecomp, },
    { id: "partner5", partnerImg: spherecomp, },
    { id: "partner6", partnerImg: spherecomp, },
    { id: "partner7", partnerImg: spherecomp, },
    { id: "partner8", partnerImg: spherecomp, },
    { id: "partner9", partnerImg: spherecomp, },
    { id: "partner10", partnerImg: spherecomp, },
    { id: "partner11", partnerImg: spherecomp, },
    { id: "partner12", partnerImg: spherecomp, },
]

const Partners = () => {
    return (
        <div>
            <div className="partners">
                <div className="title col-12"> Partners </div>
                <div className="row partners-section">
                    {
                        allPartners.map((partner) => {
                            return (
                                <div className="col-md-2 col-6">
                                    <div className="partners-inner-section">
                                        <img src={partner.partnerImg} class="partners-image" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Partners
