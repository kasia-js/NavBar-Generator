import * as React from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
// import 'react-navbar-generator/dist/index.css'

import About from './components/About.js'
import Consulting from './components/Consulting.js'
import Projects from './components/Projects.js'
import Ventures from './components/Ventures.js'
import Info from './components/Info.js'
import Help from './components/Help.js'
import NavBar from './components/NavBar/NavBar.component'

const App = (): JSX.Element => {
  function userFunction () {
    return (
     <h4> Your Search Results are as follows </h4>
   )
  }
  return (
    <>
    <BrowserRouter>
    <NavBar option = "vertical" lang="en" orientation = "ltr" theme="slategrey"/>
       <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/consulting" component={Consulting}/>
          <Route path="/projects" component = {Projects} />
          <Route path="/ventures" component = {Ventures} />
          <Route path="/info" component = {Info} />
          <Route path="/help" component = {Help} />
       </Switch>
    </BrowserRouter>
  </>
  )
}
export default App
