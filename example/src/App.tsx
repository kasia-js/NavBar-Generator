import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css'

import About from './components/About.js'
import Consulting from './components/Consulting.js'
import Projects from './components/Projects.js'
import Ventures from './components/Ventures.js'
import Info from './components/Info.js'
import Help from './components/Help.js'
import NavBar from './components/NavBar/NavBar.component';

interface Options {
  id: number,
  text: string,
  children: {id: number, text: string, path?: string}[],
  path?: string
}

const App = () => {

  const optionsArray : Options[] = [
    {
      "id":1,
      "text":"Home",
      "children":[],
      "path": "/about"
    },
    {
      "id":2,
      "text":"Services",
      "children":[{"id":2.1,"text":"Consulting","path":"/consulting"},{"id":2.2,"text":"Projects","path":"/projects"}, {"id":2.3,"text":"Ventures","path":"/ventures"}]
    },
    {
      "id":3,
      "text":"Contact",
      "children":[{"id":3.1,"text":"Contact Info","path":"/info"},{"id":3.1,"text":"Reach us on mail","path":"/help"}]

    }
]

  return (
    <>
    <BrowserRouter>
    <NavBar optionsArray={optionsArray}  option = "horizontal"  orientation = "ltr" theme="slategrey" search = "search"/>
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