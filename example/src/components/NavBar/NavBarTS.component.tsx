import React, { useState, useRef } from 'react'

import styles from './styles.module.css';

import { Link } from 'react-router-dom'
import useClickOutside from './customHook.js'

import icon from '../../assets/menuIcon.jpeg'; //loader for jpeg files
// const searchIcon = require('../../assets/searchIcon.png')


interface Props {
  orientation: string,
  lang?: string,
  searchFunction?: Function,
  option: string,
  theme: string,
  search: string,
  optionsArray: Options[]
};

export interface Options {
  id: number,
  text: string,
  children: Suboptions[],
  path?: string
}
interface Suboptions {
  id: number,
  text: string,
  path: string
}

const NavBarTS = (props: Props) => {
  let langjson;
  let orientation : string;

  if (props.orientation === 'rtl') orientation = 'RTL'
  else orientation = 'LTR'

  // if (props.lang === 'en') {
  //   langjson = require('./en.json')
  // }

  // else if (props.lang === 'de') {
  //   langjson = require('./de.json')
  // } else if (props.lang === 'ar') {
  //   langjson = require('./ar.json')
  // }

  // let inputMenu : Options[] = langjson.menu;

  interface Result {
    [key: string]: boolean,
  }

  // const getSubMenuState = (navigationOptions: Options[]) => {
  //   let result: Result = {};
  //   navigationOptions.forEach((option: Options) => result[option.text] = false);
  //   return result;
  // }

  // // {
  // //   "id":1,
  // //   "text":"Home",
  // //   "children":[],
  // //   "path": "/about"
  // // }

  // //=>
  // // let result = {
  //   // "Home": false,
  //   // "Services": false,
  //   // "Contact Us": false
  // // }

  // // menuHeader = {
  // //   "Home": false,
  // //   "Services": false,
  // //   "Contact Us": false
  // // }

  // const [menuHeader, setMenuHeader] = useState<Result>(getSubMenuState(props.optionsArray));
  // const [input, setInput] = useState<string>('')

  // const dropDown = useRef([React.createRef<HTMLDivElement>(),React.createRef<HTMLDivElement>()])

  // // useClickOutside(menuHeader, dropDown.current[0], hideSubMenu, 'Services')
  // // useClickOutside(menuHeader, dropDown.current[1], hideSubMenu, 'Contact')

  // function showSubMenu(text: string) {
  //   const newState: Result = {...menuHeader}; //makes copy of state
  //   newState[text] = !newState[text];
  //   setMenuHeader(newState);
  // }

  // //  const newState = menuHeader = {
  // //   "Home": false,
  // //   "Services": false,
  // //   "Contact Us": false
  // // }

  // // setMenuHeader = {
  // //  "Home": false,
  // //  "Services": true
  // //  "Contact Us": false
  // // }


  // // {
  // //   Contact: true
  // //   Home: false
  // //   Services: true
  // // }

  // function hideSubMenu(text: string) {
  //   const newState: Result = {...menuHeader};
  //   if (newState[text] === true) { //remove submenu when user clicks on another submenu // can only have one submenu === true
  //     let changeOtherSubMenuToggle = () => {
  //       Object.keys(newState).forEach(key => !newState[text] === false);
  //       return newState;
  //     }
  //   }
  //     //remove submenu when user clicks outisde of submenu // useClickOutside //Kasia
  // }

  // function handleChange(e: React.FormEvent<HTMLInputElement>) {
  //   setInput(e.currentTarget.value)
  // }

  // function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
  //   e.preventDefault()
  //   setInput('')
  //   return (
  //     <h2>Your Search results are as follows</h2>
  //   )
  //   // props.searchFunction()
  // }

  // // const inputMenu = [
  // //   {
  // //     "id":1,
  // //     "text":"Home",
  // //     "children":[],
  // //     "path": "/about"
  // //   },
  // //   {
  // //     "id":2,
  // //     "text":"Services",
  // //     "children":[{"id":2.1,"text":"Consulting","path":"/consulting"},{"id":2.2,"text":"Projects","path":"/projects"}, {"id":2.3,"text":"Ventures","path":"/ventures"}]
  // //   }
  // // ]

  // // to generate the entire list of main menu items from the props received
  // const inputList = inputMenu.map(function (ele: Options, index: number) {
  //   if (ele.children?.length === 0 && ele.path) { //text === "Home"
  //     return (
  //       <li key={ele.id}>
  //         <Link to={ele.path}
  //           style={ props.option=== 'vertical'
  //           ? {textDecoration:'none', color:'yellow'}
  //           : {textDecoration:'none', color:'white'}}
  //           >
  //             {ele.text}
  //           </Link>
  //       </li>
  //     )
  //   } else //text === 'Services' and 'Contact Us'
  //     return (
  //       <>
  //         <li
  //           key={ele.id}
  //           onClick={() => showSubMenu(ele.text)} //passes 'Services/Contact Us' to showSubMenu to toggle from false to true
  //           style={
  //             props.option === 'vertical'
  //                   ? {
  //                       position: 'relative',
  //                       float: 'right',
  //                       color:'red'
  //                     }
  //                   : {
  //                     position: 'relative',
  //                     float: 'right',
  //                     color:'green'
  //                 }
  //             }
  //         >
  //       {/*renders Services, Contact Us text */}
  //          {ele.text}


  //           {/*checks horizontal or vertical option prop */}

  //           {props.option === 'horizontal' && (
  //             <div ref={dropDown.current[index - 1]}>

  //         {/*children rendered in ul*/}

  //             <ul
  //               className={
  //                 orientation === 'RTL'
  //                   ? styles.menuitemNestedVRTL
  //                   : styles.menuitemNestedV
  //               }

  //               style={
  //                 menuHeader[ele.text]
  //                   ? {
  //                       position: 'absolute',
  //                       display: 'block',
  //                       float: 'right',
  //                       backgroundColor: 'blue'
  //                     }
  //                   : { display: 'none' }
  //               }
  //             >
  //               {ele?.children.map((subEl: Suboptions) => {
  //                 return (
  //                   <li key={subEl.id}>
  //                     <Link to={subEl.path as string} style={{textDecoration:'none', color:'yellow'}}>
  //                       {subEl.text}
  //                     </Link>
  //                   </li>
  //                 )
  //               })}
  //             </ul>
  //             </div>
  //           )}
  //           {props.option === 'vertical' && (
  //             <div ref={dropDown.current[index - 1]}>
  //             <ul
  //               className={
  //                 orientation === 'RTL'
  //                   ? styles.menuitemNestedHRTL
  //                   : styles.menuitemNestedH
  //               }
  //               style={
  //                 menuHeader[ele.text]
  //                   ? {
  //                       position: 'absolute',
  //                       display: 'block',
  //                       float: 'right',
  //                       backgroundColor: "gainsboro"
  //                     }
  //                   : { display: 'none' }
  //               }
  //             >
  //               {ele?.children.map((subEl: Suboptions) => (
  //                 // eslint-disable-next-line react/jsx-key

  //                 <li><Link to={subEl.path} style={{textDecoration:'none',color:'black'}}>{subEl.text}</Link></li>
  //               ))}
  //             </ul>
  //             </div>
  //           )}
  //         </li>
  //       </>
  //     )
  // })

  return (

      // <div className='test'>
      //   {props.option === 'horizontal' && props.orientation === 'ltr' && (
      //     <div className='navbarH' >
      //       <nav>
      //         <ul
      //           className={styles.menuitemH}
      //           style={props.theme ? { backgroundColor: props.theme } : {}}
      //         >
      //           <img src={icon} alt='menu icon' width='100' height='100' />
      //           {inputList}
      //           <div
      //             style={
      //               props.search
      //                 ? { display: 'inline - block' }
      //                 : { display: 'none' }
      //             }
      //             className={styles.searchBarH}
      //           >
      //         <input
      //               className={styles.searchBarHInput}
      //               type='text'
      //               placeholder='HELLO FROM SEARCH'
      //               value={input}
      //               onChange={handleChange}
      //             />

      //             <button
      //               type='submit'
      //               className={styles.formsubmit}
      //               onClick={handleSubmit}
      //             >
      //               Go
      //             </button>
      //             </div>


      //         </ul>

      //       </nav>
      //     </div>
      //   )}

      //   {/* no search input in horizontal in rtl */}
      //   {props.option === 'horizontal' && props.orientation === 'rtl' && (
      //     <div className='navbar'>
      //       <ul
      //         className={styles.menuitemHRTL}
      //         style={props.theme ? { backgroundColor: props.theme } : {}}
      //       >
      //         <img src={icon} alt='menu icon' width='50px' height='40px' />
      //         {inputList}
      //       </ul>
      //     </div>
      //   )}


      // {/* doesn't make sense to have vertical AND ltr */}

      //   {props.option === 'vertical' && props.orientation === 'ltr' && (
      //     <div className='navbarV'>
      //       <nav>
      //         <ul
      //           className={styles.menuitemV}
      //           style={props.theme ? { backgroundColor: props.theme } : {}}
      //         >
      //           <img src={icon} alt='menu icon' width='50px' height='40px' />
      //           <br />
      //           <div
      //             style={
      //               props.search
      //                 ? { display: 'inline - block' }
      //                 : { display: 'none' }
      //             }
      //             className='searchBarV'
      //           >
      //             <input
      //               className='searchBarVInput'
      //               type='text'
      //               placeholder='Enter to Search'
      //               value={input}
      //               onChange={handleChange}
      //             />
      //             <br />
      //               <button type='submit' onClick={handleSubmit}>
      //                 Go
      //               </button>
      //           </div>
      //           {inputList}
      //         </ul>
      //       </nav>
      //     </div>
      //   )}
      // </div>
      <div>
        Hello World
      </div>
  )
}
export default NavBarTS;