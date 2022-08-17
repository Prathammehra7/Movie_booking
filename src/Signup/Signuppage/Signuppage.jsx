import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import "./Signup.css"
export default function Signuppage() {

	const [name, setName] = useState();
	const [useremail, setEmail] = useState();
	const [password, setPass] = useState();
	const [confirmpassword, setConPass] = useState();
	const handleSignup = async () => {
		const user = {
			name,
			useremail,
			password,
			confirmpassword,
		};

		await axios.post("https://moviebooking7.herokuapp.com/api/Signup", user).then(function (response) {

			if (response.data.token) {
				toast.success("SignUp Successfully");
				window.location.href = "/login";
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
							<span class="login100-form-title">
								Sign Up
							</span>

							<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
								<input class="input100" type="name" name="name" id="name" placeholder='username' required onChange={(e) => {
									setName(e.target.value);
								}} />
								</div>

								<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter email">
									<input class="input100" type="email" name="email" id="email" placeholder='Email' required onChange={(e) => {
										setEmail(e.target.value);
									}} />
									<span class="focus-input100"></span>
								</div>

								<div class="wrap-input100 validate-input" data-validate="Please enter password">
									<input class="input100" type="password" name="password" id="password" placeholder='password' required onChange={(e) => {

										setPass(e.target.value);

									}} />
									<span class="focus-input100"></span>
								</div>
								<div class="wrap-input100 validate-input" data-validate="Please enter Confirmpassword">
									<input class="input100" type="password" name="password" id="password" placeholder='Comfirm password' required onChange={(e) => {

										setConPass(e.target.value);

									}} />
									<span class="focus-input100"></span>
								</div>

								<div class="text-right p-t-13 p-b-23">
									<span class="txt1">
										Sign In /
									</span>

									<a href="/Login" class="txt2">
										Login
									</a>
								</div>

								<div class="container-login100-form-btn">
									<button class="login100-form-btn" onClick={() => {

										handleSignup();

									}} >
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

				<ToastContainer />


				<Footer />
			</>
			);
}
