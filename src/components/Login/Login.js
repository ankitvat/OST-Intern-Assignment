import React from 'react'
import styles from './login.module.css'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'


class Login extends React.Component
{
	constructor()
	{

		const token = localStorage.getItem("token")


		let isLoggedIn = true
		if(token==null)
		{
			isLoggedIn=false
		} 
		super()

		this.state = {
			username: '',
			password: '',
			role:'',
			
			isLoggedIn
		

		}
		this.state={
			susername:'',
			spassword:'',
			cpassword:''

		}
		this.handleChange = this.handleChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}


	handleChange(e)
	{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	submitForm(e)
	{
		e.preventDefault()
		const {username , password} = this.state
		if(username ==="A" && password ==="B")
		{
			localStorage.setItem("token","yolo")
			this.setState({
				isLoggedIn:true
			})
		}
	}
	render()
	{
		if(this.state.isLoggedIn)
		{
			return <Redirect to ="/dashboard" />
		}

		return(
			<div className={styles.container}>
			<p><Link className={styles.top} to="/"><span className={styles.oo}>Job</span>Nation</Link></p>

			<h1 className={styles.heading}>Log-In</h1>

			<form className={styles.forms} onSubmit={this.submitForm}>
			<input className={styles.input} type="text" 
				placeholder="Username" 
				name ="username" 
				value = {this.state.username}
				onChange = {this.handleChange}
			/>
			<br />

			<input className={styles.input} type = "password"
				placeholder="Password"
				name="password"
				value = {this.state.password}
				onChange = {this.handleChange}
			/>
			<br />
			<select 
				className={styles.select}
				name="role" 
				value = {this.state.role}
				onChange= {this.handleChange}
			>Role:
			<option >Choose One</option>
			<option value ="applicant">Applicant</option>
			<option value ="admin">Admin</option>

			</select>
			<input className={styles.submit} type="submit"
			/> 
			</form>


			<div className={styles.reg}>
			</div>
			<form className={styles.formsa} onSubmit={this.submitForm}>
			<input className={styles.inputs} type="text" 
				placeholder="Username" 
				name ="susername" 
				value = {this.state.susername}
				onChange = {this.handleChange}
			/>
			<br />

			<input className={styles.inputs} type = "password"
				placeholder="Password"
				name="spassword"
				value = {this.state.spassword}
				onChange = {this.handleChange}
			/>
			<br />
			<input className={styles.inputs} type = "password"
				placeholder="Confirm Password"
				name="cpassword"
				value = {this.state.cpassword}
				onChange = {this.handleChange}
			/>
			<br />
			
			
			 
			</form>
			<Link className={styles.link} to="/dashboard">Register</Link>
			</div>

			)
	}
}

export default Login