import React, { useState, Fragment, useEffect, useRef } from 'react'

import styles from './styles.module.css'

const icon = require('../example/src/assets/menuIcon.jpeg')
const searchIcon = require('../example/src/assets/searchIcon.png')

export const ExampleComponent = (props) => {
  var langjson
  var inputMenu
  var orientation

  if (props.orientation === 'rtl') orientation = 'RTL'
  else orientation = 'LTR'

  if (props.lang === 'en') {
    langjson = require('../example/src/en.json')
  } else if (props.lang === 'de') {
    langjson = require('../example/src/de.json')
  } else if (props.lang === 'ar') {
    langjson = require('../example/src/ar.json')
  }

  console.log(langjson)
  inputMenu = langjson.menu
  console.log('input menu', inputMenu)

  const len = inputMenu.length
  const [isShown, setIsShown] = useState(false)
  const [input, setInput] = useState('')

  const node = useRef()

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  //  function to generate the nested drop-down items on mouse event on a nested parent menu item
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return showSubMenu(e)
    } else {
      return hideSubMenu()
    }
  }
  function showSubMenu(text) {
    // console.log(e.target.text)
    setIsShown(text)
  }

  function hideSubMenu(e) {
    setIsShown(false)
  }

  // to handle any dearch functionality passed as props by user to search made available on navbar
  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setInput('')
    props.searchFunction()
  }

  // to generate the entire list of main menu items from the props received
  const inputList = inputMenu.map(function (ele) {
    if (ele.children.length === 0) {
      return <li id={ele.id}>{ele.text}</li>
    } else
      return (
        <>
          <li
            ref={node}
            id={ele.id}
            onClick={() => showSubMenu(ele.text)}
            style={{
              position: 'relative',
              float: 'right'
            }}
          >
            {ele.text}
            {props.option === 'horizontal' && (
              <ul
                className={
                  orientation === 'RTL'
                    ? styles.menuitemNestedVRTL
                    : styles.menuitemNestedV
                }
                style={
                  isShown === ele.text
                    ? {
                        position: 'absolute',
                        display: 'block',
                        float: 'right',
                        backgroundColor: props.theme
                      }
                    : { display: 'none' }
                }
              >
                {ele.children.map((subEl) => (
                  // eslint-disable-next-line react/jsx-key
                  <li>{subEl.text}</li>
                ))}
              </ul>
            )}
            {props.option === 'vertical' && (
              <ul
                className={
                  orientation === 'RTL'
                    ? styles.menuitemNestedHRTL
                    : styles.menuitemNestedH
                }
                style={
                  isShown === ele.text
                    ? {
                        position: 'absolute',
                        display: 'block',
                        float: 'right',
                        backgroundColor: props.theme
                      }
                    : { display: 'none' }
                }
              >
                {ele.children.map((subEl) => (
                  // eslint-disable-next-line react/jsx-key
                  <li>{subEl.text}</li>
                ))}
              </ul>
            )}
          </li>
        </>
      )
  })

  return (
    <div>
      {props.option === 'horizontal' && props.orientation === 'ltr' && (
        <div className='navbar'>
          <ul
            className={styles.menuitemH}
            style={props.theme ? { backgroundColor: props.theme } : {}}
          >
            <img src={icon} alt='menu icon' width='50px' height='40px' />
            {inputList}
            <div
              style={
                props.search
                  ? { display: 'inline - block' }
                  : { display: 'hidden' }
              }
              className='searchBarH'
            >
              <input
                className='searchBarVInput'
                type='text'
                placeholder='Search'
                onChange={handleChange}
              />
              <button
                type='submit'
                className='form-submit'
                onSubmit={handleSubmit}
              >
                Go
              </button>
            </div>
          </ul>
        </div>
      )}
      {props.option === 'horizontal' && props.orientation === 'rtl' && (
        <div className='navbar'>
          <ul
            className={styles.menuitemHRTL}
            style={props.theme ? { backgroundColor: props.theme } : {}}
          >
            <img src={icon} alt='menu icon' width='50px' height='40px' />
            {inputList}
          </ul>
        </div>
      )}
      {props.option === 'vertical' && props.orientation === 'ltr' && (
        <div className='navbar'>
          <ul
            className={styles.menuitemV}
            style={props.theme ? { backgroundColor: props.theme } : {}}
          >
            <img src={icon} alt='menu icon' width='50px' height='40px' />
            <div
              style={
                props.search
                  ? { display: 'inline - block' }
                  : { display: 'hidden' }
              }
              className='searchBarV'
            >
              <input
                className='searchBarVInput'
                type='text'
                placeholder='Search'
              />
              <img
                src={searchIcon}
                alt='search icon'
                width='30px'
                height='30px'
                className='searchImg'
              />
            </div>
            {inputList}
          </ul>
        </div>
      )}
    </div>
  )
}
