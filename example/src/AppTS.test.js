import React from 'react'
import ReactDOM from 'react-dom'
import AppTS from './AppTS'

const fakeOptions = [
  {
    "id": 1,
    "text": "Home",
    "children": [],
    "path": '/home'
  },
  {
    "id":2,
    "text": "Services",
    "children":
      [{
        "id":2.1,
        "text":"Consulting",
        "path":"/consulting"
      }]
   }
];

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppTS />, div)
  ReactDOM.unmountComponentAtNode(div)
})
