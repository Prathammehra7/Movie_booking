import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        await axios.post("https://moviebooking07.herokuapp.com/api/Login", user).then(function (response) {
            if (response.data.token) {
				toast.success("SignUp Successfully");
                localStorage.setItem("token", response.data.token);
                window.location.href = "/Product";
            } 
        }).catch(function (error) {
			toast.warning("Something wrong");
            console.log(error);
        })



    }

    return (
        <>
           <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form validate-form p-l-55 p-r-55 p-t-178">
					<div className="pop">
					<span class="login100-form-title">
						Sign In
					</span>

					<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                    <input pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9]+\.[a-z]{2,}"  class="input100" type="email" name="email" id="email" placeholder='username' required onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Please enter password">
                    <input title='Must be atleast 8 character' pattern="[a-zA-Z0-9]{8,}" class="input100" type="password" name="password" id="password" placeholder='password' required onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
						<span class="warning">
							<p>Must be atleast 8 characters</p>
						</span>
					</div>
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
						<button type='signin' class="login100-form-btn"onClick={handleChange} >
							Sign in
						</button>
					</div>

					<div class="flex-col-c p-t-170 p-b-40">
						<span class="txt1 p-b-9">
							Don???t have an account?
						</span>

						<a href="/Signup" class="txt3">
							Sign up now
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ToastContainer />


            <Footer />
        </>
    );
}
