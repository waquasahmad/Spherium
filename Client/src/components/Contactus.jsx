import React, { useState } from 'react'
import axios from 'axios'
import validate from './ValidationInfo';
import { ToastContainer, toast } from 'react-toastify';

const Contactus = () => {

    const [errors, setErrors] = useState({});

    const [ user, setUser] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        hear_about_us: "",
    })

    
const inputEvent = (event) =>{
    const {value, name} = event.target;

    setUser((preValue) =>{
        return{
            ...preValue,
            [name]: value,
        }
    })
}



const onSubmit = (e) =>{
    e.preventDefault();
    setErrors(validate(user));
    axios.put("https://spherium-website.herokuapp.com/api/email/contact-us",user)
    .then(response => {
        console.log(response);
        toast.success("Email Send Successfully",{
            position: "top-center"
        })
        setUser({full_name:'', email:'', phone_number:'', hear_about_us:''});
    })
    .catch(error =>{
        console.log(error);
    })
   
 };



    return (
        <div>
            <ToastContainer />
            <div className="contactus">
                <div className="title"> Contact us </div>
                <div className="contactus-form">
                    <form onSubmit={onSubmit} noValidate>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 form-inputs">
                                <input type="text" className="form-control" placeholder="Full name" onChange={inputEvent} name="full_name" value={user.full_name}/>
                                {errors.full_name && <p>{errors.full_name}</p>}
			    	        </div>
                                <div className="col-md-6 col-sm-12 form-inputs">
                                    <input type="email" className="form-control" placeholder="Email" onChange={inputEvent} name="email" value={user.email}/>
				                    {errors.email && <p>{errors.email}</p>}
                                </div>
                                    <div className="col-md-6 col-sm-12 form-inputs">
                                        <input type="text" className="form-control" placeholder="Phone no." onChange={inputEvent} name="phone_number" value={user.phone_number}/>
				                        {errors.phone_number && <p>{errors.phone_number}</p>}
                                    </div>
                                        <div className="col-md-6 col-sm-12 form-inputs">
                                            <input type="text" className="form-control" placeholder="How did you hear about us" onChange={inputEvent} name="hear_about_us" value={user.hear_about_us}/>
				                            {errors.hear_about_us && <p>{errors.hear_about_us}</p>}
                                        </div>
                                            <div className="col-12">
                                                <button className="btn button floatright web-view">Submit</button>
                                                <button className="btn button mx-auto mobile-view">Submit</button>
                                            </div>
                                        </div>
			        </form>
                                </div>
                            </div>
                        </div>
    )
}

export default Contactus
