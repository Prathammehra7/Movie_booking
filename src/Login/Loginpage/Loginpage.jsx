import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import "./loginpage.css"
import axios from "axios";
export default function Loginpage() {

    const [useremail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleChange() {
        // if (email && password) {
        //     window.location.href = "/Product";

        // }
        // else {
        //     window.location.href = "/Login"
        // }

        const user = {
            useremail,
            password,
        };
        await axios.post("https://moviebooking7.herokuapp.com/api/Login", user).then(function (response) {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                window.location.href = "/Product";
            } 
        }).catch(function (error) {
            console.log(error);
        })



    }

    return (
        <>
           <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form validate-form p-l-55 p-r-55 p-t-178">
					<span class="login100-form-title">
						Sign In
					</span>

					<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input class="input100" type="email" name="email" id="email" placeholder='username' required onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Please enter password">
                    <input class="input100" type="password" name="password" id="password" placeholder='password' required onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
						<span class="focus-input100"></span>
					</div>

					<div class="text-right p-t-13 p-b-23">
						<span class="txt1">
							Forgot
						</span>

						<a href="/Forgot" class="txt2">
							Username / Password?
						</a>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn"onClick={handleChange} >
							Sign in
						</button>
					</div>

					<div class="flex-col-c p-t-170 p-b-40">
						<span class="txt1 p-b-9">
							Don’t have an account?
						</span>

						<a href="/Signup" class="txt3">
							Sign up now
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>


            <Footer />
        </>
    );
}
