import React from 'react'
import styles from './App.module.css'
import Landing from './components/Landing/Landing'
import { Login, Dashboard} from './components'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'

const App = () =>
{

  return(


    <BrowserRouter>
    <Switch>
    <Route exact path = "/" component ={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component ={Dashboard} />

   
    </Switch>

    </BrowserRouter>

  

    )
}


export default App