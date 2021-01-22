import React from 'react'

const Contactus = () => {
    return (
        <div>
            <div className="contactus">
                <div className="title"> Contact Us </div>
                <div className="contactus-form">
                    <form>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <input type="text" className="form-control" placeholder="Full name"/>
			    	        </div>
                                <div className="col-md-6 col-sm-12">
                                    <input type="text" className="form-control" placeholder="Email"/>
				                </div>
                                    <div className="col-md-6 col-sm-12">
                                        <input type="text" className="form-control" placeholder="Phone no."/>
				                    </div>
                                        <div className="col-md-6 col-sm-12">
                                            <input type="text" className="form-control" placeholder="How did you hear about us"/>
				                        </div>
                                            <div className="col-12">
                                                <button className="btn button floatright">Submit</button>
                                            </div>
                                        </div>
			        </form>
                                </div>
                            </div>
                        </div>
    )
}

export default Contactus
