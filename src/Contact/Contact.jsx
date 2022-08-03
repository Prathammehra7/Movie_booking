import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import "./Contact.css"
export default function Contactpage() {

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
            <div className="formContainer1">
            <div className="formContainer2">
                <h1>Contact Us</h1>
                <div className="form">
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
                    <textarea type="Textarea" placeholder="Write something.. "name="textarea" id="textarea" required onChange={(e) => {
                        setTextarea(e.target.value)
                    }} />
                    <button onClick={handleChange} >Submit</button>

                </div>
            </div>
            </div>
        </>
    );
}
