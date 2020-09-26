import React from 'react'

import { ExampleComponent } from 'react-navbar-generator'
import {BrowserRouter} from 'react-router-dom'
import 'react-navbar-generator/dist/index.css'

const App = () => {
  const inputMenu = 
    [
    {
      id: 1,
      text: "menu1",
      children : []
    },

    {
      id: 2,
      text: "menu2",
      children: [
        {
          id: 2.1,
          text: "nested2"
        }
      ]
    },
    {
      id: 3,
      text: "menu4",
      children : [
        {
          id: 3.1,
          text: "nested4"
        }
      ]
    },
  ]

  
  return (
    <>
    <BrowserRouter>
    <ExampleComponent option = "horizontal" value = {inputMenu} nested="yes"/>
    <ExampleComponent option = "vertical" value = {inputMenu} nested="false"/>
    </BrowserRouter>
  </>
  )
}

export default App
