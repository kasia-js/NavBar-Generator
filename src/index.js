import React, { useState, Fragment } from 'react'

import styles from './styles.module.css'

import { NavLink } from 'react-router-dom'

export const ExampleComponent = (props) => {
  const [isShown, setIsShown] = useState(false)
  var nestedChildren

  function onEnter(e) {
    console.log(isShown, 'from on enter')
    setIsShown(true)
    const idValue = Number(e.target.id)
    const nestedParent = props.value.find((ele) => ele.id === idValue)
    nestedChildren = nestedParent.children.map((subEl) => {
      console.log('inside map of children')
      console.log(subEl.text)
      // eslint-disable-next-line prettier/prettier
       return (
        <>
          <li>{subEl.text}</li>
        </>
      )
    })
  }
  console.log(nestedChildren)

  function onLeave(e) {
    setIsShown(false)
  }

  const inputList = props.value.map(function (ele) {
    if (ele.children.length === 0) {
      return (
        <li id={ele.id} className='styles.menuItemH'>
          {ele.text}
        </li>
      )
    }
    // eslint-disable-next-line no-unused-expressions
    // eslint-disable-next-line no-unused-expressions
    else
      return (
        <>
          <li
            id={ele.id}
            className='mainEl'
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            {ele.text}
          </li>

          <ul className='subEl'>
            {ele.children.map((subEl) => (
              // eslint-disable-next-line react/jsx-key
              <li>{subEl.text}</li>
            ))}
          </ul>
        </>
      )
  })

  // const nestedList = props.value
  //   .filter((ele) => ele.children.length > 0)
  //   .map((ele) => {
  //     // eslint-disable-next-line react/jsx-key
  //     // if (isShown) {
  //     return (
  //       <ul
  //       // onMouseEnter={() => console.log('mouse enter')}
  //       // onMouseLeave={() => console.log('mouse leave')}
  //       >
  //         {ele.children.map((subEl) => (
  //           <li>{subEl.text}</li>
  //         ))}
  //       </ul>
  //     )
  //     // }
  //   })

  return (
    <div>
      {props.option === 'horizontal' && (
        <div>
          <ul className={styles.menuitemH}>{inputList}</ul>
        </div>
      )}
      {props.option === 'vertical' && (
        <div className={styles.menuitemV}>{nestedChildren}</div>
      )}
    </div>
  )
}

// {isShown && isNested && console.log('Nested ele to be rendered')}
// import { NavLink, Route } from 'react-router-dom'
// navlink from react router dom --> name of menu, path
// in case of optional nested ele, dropdown ,
// one level of nesting
// some customizable options for user as width, color

// <Router>
//   <NavLink to='/'>{ele.text}</NavLink>
//   <Route path='/' component={ele.text} />
// </Router>
