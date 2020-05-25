import React from 'react'
import styles from './header.module.css'



function Header()
{
	return (

		<div className={styles.container}>


		<nav className={styles.navbar}>
		<p><span className={styles.oo}>Job</span>Nation</p>

		<ul className={styles.navlist}>
			
			<li>Contact</li>
				<li>Recruit</li>
			<li>Jobs</li>
		</ul>

		
		</nav>

  
		</div>
		)
}

export default Header