import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css'

// import About from './components/About.js'
// import Consulting from './components/Consulting.js'
// import Projects from './components/Projects.js'
// import Ventures from './components/Ventures.js'
// import Info from './components/Info.js'
// import Help from './components/Help.js'
import NavBarTS, { Options } from './components/NavBar/NavBarTS.component';


const AppTS = () => {

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

    <BrowserRouter>
      <NavBarTS optionsArray={optionsArray}  option = "vertical"  orientation = "rtl" theme="slategrey" search = "search"/>
    </BrowserRouter>

  )
}
export default AppTS