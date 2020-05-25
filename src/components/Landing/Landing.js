import React from 'react'
import styles from './landing.module.css'

import {Link,Route} from 'react-router-dom'
import {Header,MainSection,Login,Dashboard} from '../index'

class Landing extends React.Component

{
	render()
	{
	return(

		<div className={styles.container}>
		
		<Header className={styles.header} />
		
		<Link className={styles.link} to="/login">Login</Link>
<MainSection />
		</div>
		)
}
}

export default Landing
