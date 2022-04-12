import { React, useState } from "react";
import './Register.css'
import { Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faMarsAndVenus } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'

const Register = () => {

	const [valuesR, setValuesR] = useState();
	const ChangingValueR = (value) => {
		setValuesR((prevValueR) => ({
			...prevValueR,
			[value.target.name]: value.target.value,
		}));
	};

	const Register = () => {
		Axios.post('http://localhost:3001/UserManager/CreateUser', {
			Email: valuesR.Email,
			Name: valuesR.Name,
			Birthay: valuesR.Date,
			CPF: valuesR.CPF,
			Gender: valuesR.Gender,
			Pass: valuesR.Pass,
			PassRp: valuesR.PassRepeat
		}).then((Response)=>{
			window.alert(Response.data)
		})
	}

	return (
		<div className="Register">
			<div className="container">
				<div className="screenRegister">
					<div className="screen__content">
						<form className="loginRegister">
							<div className="login__fieldRegister">
								<i className="login__iconRegister fa fa-user"></i>
								<input type="text" name="Email" onChange={ChangingValueR} className="login__input" placeholder="Email" />
							</div>
							<div className="login__fieldRegister">
								<i className="login__iconRegister fa fa-pencil"></i>
								<input type="text" name="Name" onChange={ChangingValueR} className="login__input" placeholder="Name" />
							</div>
							<div className="login__fieldRegister ">
								<i className="login__iconRegister fa fa"></i>
								<label className="CheckboxInput" htmlFor="date">Birthday Date</label>
								<input type="date" name="Date" onChange={ChangingValueR} className="login__input" />
							</div>
							<div className="login__fieldRegister">
								<i className="login__iconRegister fa fa-flag"></i>
								<input type="text" name="CPF" onChange={ChangingValueR} className="login__input" placeholder="CPF (Just Numbers)"/>
							</div>
							<div className="login__fieldRegister">
								<FontAwesomeIcon className="login__iconRegister" icon={faMarsAndVenus} />
								<Form.Group id="OPTIONCLASSFORM" className="mb-1" controlId="formBasicClass">
									<select className="login__input" name="Gender" onChange={ChangingValueR}>
										<option value>Gender</option>
										<option value="Male">Male</option>
										<option value="Male">Famale</option>
									</select>
								</Form.Group>
							</div>
							<div className="login__fieldRegister">
								<i className="login__iconRegister fa fa-lock"></i>
								<input type="password" name="Pass" onChange={ChangingValueR} className="login__input" placeholder="Password" />
							</div>
							<div className="login__fieldRegister">
								<i className="login__iconRegister fa fa-lock"></i>
								<input type="password" name="PassRepeat" onChange={ChangingValueR} className="login__input" placeholder="Password Repeat" />
							</div>
							<Button onClick={() => Register()}  className="button login__submit">
								<span className="button__text"> Register</span>
								<i className="button__icon fa fa-chevron-right"></i>
							</Button>
						</form>
						<div className="social-login">
							<div className="social-icons">
								<a href="/" className="social-login__icon fa fa-google">.</a>
								<a href="/" className="social-login__icon fa fa-facebook">.</a>
								<a href="/" className="social-login__icon fa fa-twitter">.</a>
							</div>
						</div>
					</div>
					<div className="screen__background">
						<span className="screen__background__shape screen__background__shape4"></span>
						<span className="screen__background__shape screen__background__shape3"></span>
						<span className="screen__background__shape screen__background__shape2"></span>
						<span className="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Register