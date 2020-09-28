import React from 'react'

import { ExampleComponent } from 'react-navbar-generator'
import {BrowserRouter} from 'react-router-dom'
import 'react-navbar-generator/dist/index.css'

const App = () => {  
  function userFunction () {
   console.log("from search functionality")
  }
  return (
    <>
    <BrowserRouter>
    <ExampleComponent option = "horizontal" nested="yes" lang="en" orientation = "ltr" theme="slategray" search="yes" searchFunction={userFunction}/> 
    {/*<ExampleComponent option = "vertical" lang="en" orientation= "ltr" nested="false" theme='slategray' search="yes" searchFunction={userFunction}/> */}
    </BrowserRouter>
  </>
  )
}

export default App
