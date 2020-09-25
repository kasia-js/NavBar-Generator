import React from 'react'

import { ExampleComponent } from 'react-navbar-generator'
import 'react-navbar-generator/dist/index.css'

const App = () => {
  const inputMenu = ["menu1","menu2","menu3", "menu4", "menu5","menu6", "menu7"]
  return (
    <>
    <ExampleComponent option = "horizontal" value = {inputMenu}/>
    <ExampleComponent option = "vertical" value = {inputMenu}/>
  
  </>
  )
}

export default App
