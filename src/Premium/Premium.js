
// import "./Card.css"
// import sedan from "./sedan.png";
import React, { useState } from 'react';
import "./Premium.css"
import Navbar from '../navbar/Navbar'



export default function Premium() {

    const [text, setText] = useState("");
    const [textarea, setTextarea] = useState("");
    const handleChange = () => {
        if (text && textarea) {
            window.location.href = "/get";

        }
    }


    return (
        <>

            <Navbar/>
            <div className="premiumform">
                <img src="https://images.unsplash.com/photo-1557395120-d48fc38063d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt=""></img>
            <div className="premium">
                <h1>Special Membership</h1>
                <div className="Form">
                    <label htmlFor="Fname">First Name</label>
                    <input type="Text" name="Text" id="text" required onChange={(e) => {
                        setText(e.target.value);
                    }} />
                    <label htmlFor="lname">Last  Name</label>
                    <input type="text" name="text" id="text" required onChange={(e) => {
                        setText(e.target.value)
                    }} />
                    <label htmlFor="lname">Country</label>
                    <select id="country" name="country">
                        <option value="select">Select</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    
                    <label class="comment" htmlFor="Textarea">Comment</label>
                    <textarea type="Textarea" placeholder="Write something.. "name="textarea" id="Textarea" required onChange={(e) => {
                        setTextarea(e.target.value)
                    }} />
                    <button onClick={handleChange} >Submit</button>

                </div>
            </div>
            </div>
        
        
        
        
        
        
        
        </>)
}