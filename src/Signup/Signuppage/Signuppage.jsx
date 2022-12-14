import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
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

		await axios.post("https://moviebooking07.herokuapp.com/api/Signup", user).then(function (response) {
			window.location.href = "/login";
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
									Sign Up
								</span>

								<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
									<input class="input100" type="name" name="name" id="name" placeholder='username' required onChange={(e) => {
										setName(e.target.value);
									}} />
								</div>

								<div class="wrap-input100 validate-input m-b-16" data-validate="Please enter email">
									<input pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9]+\.[a-z]{2,}" class="input100" type="email" name="email" id="email" placeholder='Email' required onChange={(e) => {
										setEmail(e.target.value);
									}} />
									<span class="focus-input100"></span>
								</div>

								<div class="wrap-input100 validate-input" data-validate="Please enter password">
									<input title="Must be atleast 8 character" pattern="[a-zA-Z0-9]{8,}" class="input100" type="password" name="password" id="password" placeholder='password' required onChange={(e) => {

										setPass(e.target.value);

									}} />
									<span class="focus-input100"></span>
								</div>
								<div class="wrap-input100 validate-input" data-validate="Please enter Confirmpassword">
									<input title="Must be atleast 8 character" pattern="[a-zA-Z0-9]{8,}" class="input100" type="password" name="password" id="password" placeholder='Comfirm password' required onChange={(e) => {

										setConPass(e.target.value);

									}} />
									<span class="focus-input100"></span>
								</div>
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



			<Footer />
		</>
	);
}
