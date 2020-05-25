import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import styles from './board.module.css'
import { Card, CardContent, Typography, Grid} from "@material-ui/core"

class Dashboard extends React.Component
{
	constructor()
	{
		super()
		const token = localStorage.getItem("token")

		let isLoggedIn = true
		if(token==null)
		{
			isLoggedIn=false
		} 
		this.state={
			search:'',
			isLoggedIn

		}
		localStorage.removeItem("token")
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e)
	{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render()
	{
		if(this.state.isLoggedIn=== false)
		{
			return <Redirect to="/login" />
		}
		return(

			<div className = {styles.container} >
			

			<p><Link className={styles.top} to="/"><span className={styles.oo}>Job</span>Nation</Link></p>
				<input type ="text" 
				className ={styles.search} 
				onChange = {this.handleChange} 
				name ="search" 
				value={this.state.search} 
				placeholder = "Enter your Keyword" 
			/>
			<button className={styles.searchs}>Search</button>
				<Grid container spacing={12} justify="center" className={styles.cod}>
			<Grid item component={Card} xs={12} md={12} className={styles.cards}>
				<CardContent>
					<Typography color = "textSecondary" gutterBottom>Content Writer
					</Typography>
				
					<Typography color="textSecondary">Hindustan Times</Typography>
					<Typography variant ="body2">CTC : 7.5 lakhs/annum | Apply By : 1/6/20</Typography>
				</CardContent>
			</Grid>
			<Grid item component={Card} xs={12} md={12} className={styles.cards}>
				<CardContent>
					<Typography color = "textSecondary" gutterBottom>Analyst
					</Typography>
				
					<Typography color="textSecondary">Accenture</Typography>
					<Typography variant ="body2">CTC : 12.5 lakhs/annum | Apply By : 1/6/20</Typography>
				</CardContent>
			</Grid>
				<Grid item component={Card} xs={12} md={12} className={styles.cards}>
				<CardContent>
					<Typography color = "textSecondary" gutterBottom>Node.js Developer
					</Typography>
					
					<Typography color="textSecondary">Amazon.in</Typography>
					<Typography variant ="body2"> CTC : 24lakhs/annum | Apply By: 28/5/20</Typography>
				</CardContent>
			</Grid>
			
			<Grid item component={Card} xs={12} md={12} className={styles.cards}>
				<CardContent>
					<Typography color = "textSecondary" gutterBottom>Software Developer
					</Typography>
					
					<Typography color="textSecondary">Facebook</Typography>
					<Typography variant ="body2">CTC: 18lakhs/annum | Apply By :28/5/20</Typography>
				</CardContent>
			</Grid>
		</Grid>

				<Link className={styles.link} to= "/">Logout</Link>
			 </div>
			)
	}
}
export default Dashboard