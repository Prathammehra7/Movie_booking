
// import "./Card.css"
// import sedan from "./sedan.png";
import React, { useState } from 'react';
import "./Premium.css"
import Footer from "../Footer/Footer";
import PhoneInput from 'react-phone-number-input'
import Navbar from '../navbar/Navbar'



export default function Premium() {

    const [text, setText] = useState("");
    const [value, setValue] = useState()
    const handleChange = () => {
        if (text && value) {
            window.location.href = "/get";

        }
    }


    return (
        <>

            <Navbar />
            <div className="premiumform">
                {/* <img src="https://images.unsplash.com/photo-1557395120-d48fc38063d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt=""></img> */}
                <div className='left'>
                    <h2 className='left-text'>
                        <img src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfQ...Knf93QXx1nbizxmfGwQoQJlkCEvgvtj8v4tb0NZoBRejhUJd885iSx...U4gD3UQ6oXbQZs4AVn8=" alt=""></img>
                    </h2>
                    <h4 className='left-texts'>
                        <h3>    IBook Subscriptions is a recurring billing software that helps you manage customer subscriptions and payments for your subscription business.
                        </h3>
                        <p>Explore all the features of our professional plan for free!</p>

                        <p> ●Manage your customers' subscription lifecyle from end-to-end</p>
                        <p>●Provide multiple pricing plans, addons, and discount coupons</p>
                        <p> ●Streamline your billing processes and set up automated workflows</p>
                        <p> ●Set up hosted payment pages and collect payments securely</p>
                        <p>●Get MRR, churn rate, LTV, and other 40+ reports to make informed </p>
                    </h4>
                </div>
                <div className="premium">
                    <h1>Special Membership</h1>
                    <div className="Form">
                        <label htmlFor="Fname">Name</label>
                        <input type="Text" name="Text" id="text" placeholder="Full name" required onChange={(e) => {
                            setText(e.target.value);
                        }} />
                        <label htmlFor="Email">E-mail</label>
                        <input type="text" name="text" id="text" placeholder="E-mail" required onChange={(e) => {
                            setText(e.target.value)
                        }} />
                        {/* <label htmlFor="lname">Country</label>
                        <select id="Country" name="country">
                            <option value="select">Select</option>
                            <option value="india">India</option>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select> */}

                        <label class="phone" htmlFor="Textarea">Phone No</label>

                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} />
                            <div className='checkbox'>
                        <input type="checkbox" name="remeber" id="remeber"></input>
                        <label class="label" for="remeber">I accept the Terms &amp;
                            Conditions</label>
                            </div>
                        <button className='pr-button' onClick={handleChange} >Submit</button>

                    </div>
                </div>
            </div>



            <Footer />



        </>)
}