// import React, { useState, useRef } from 'react'

// import styles from './styles.module.css'
// import { Link } from 'react-router-dom'
// import useClickOutside from './customHook.js'

// const icon = require('../../assets/menuIcon.jpeg')
// const searchIcon = require('../../assets/searchIcon.png')

// const NavBar = (props) => {
//   var langjson
//   var inputMenu
//   var orientation

//   if (props.orientation === 'rtl') orientation = 'RTL'
//   else orientation = 'LTR'

//   if (props.lang === 'en') {
//     // langjson = require('./en.json')
//     inputMenu = langjson.menu
//   } else if (props.lang === 'de') {
//     langjson = require('./de.json')
//     inputMenu = langjson.menu
//   } else if (props.lang === 'ar') {
//     langjson = require('./ar.json')
//     inputMenu = langjson.menu
//   } else if (!props.lang) {
//     inputMenu = props.allOptions
//   }

//   const getSubMenuState = (navigationOptions) => {
//     const result = {};
//     navigationOptions.forEach((option) => result[option.text] = false)
//     return result;
//   }
//   // {Home: fale, Services:false, ...}

//   const [menuHeader, setMenuHeader] = useState(getSubMenuState(props.allOptions))
//   const [input, setInput] = useState('') //search button

//   const dropDown = useRef([React.createRef(),React.createRef()]) //to see where it was clicked

//   useClickOutside(menuHeader, dropDown.current[0], hideSubMenu, 'Services')
//   useClickOutside(menuHeader, dropDown.current[1], hideSubMenu, 'Contact')



//   function showSubMenu(key) { //key of isShown object
//     const newState = {...menuHeader};
//     console.log(newState)
//     newState[key] = !newState[key];
//     setMenuHeader(newState);
//   }

//   function hideSubMenu() {
//     setMenuHeader(false)
//   }

//   // to handle any search functionality passed as props by user to search made available on navbar
//   function handleChange(e) {
//     setInput(e.target.value)
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     setInput('')
//     console.log(input)
//     return (
//       <h2>Your Search results are as follows</h2>
//     )
//     props.searchFunction()
//   }

//   // to generate the entire list of main menu items from the props received
//   const inputList = inputMenu.map(function (ele, index) {
//     if (ele.children?.length === 0 ) { //if children defined & length=0
//       return (
//         <li key={ele.id}>
//           <Link to={ele.path}
//             style={ props.option=== 'vertical'
//             ? {textDecoration:'none', color:'yellow'}
//             : {textDecoration:'none', color:'white'}}
//             >
//               {ele.text}
//             </Link>
//         </li>
//       )
//     } else //if children is not an empty array, parents will be displayed in li
//       return (
//         <>
//           <li
//             key={ele.id}
//             onClick={() => showSubMenu(ele.text)}
//             style={
//               props.option === 'vertical'
//                     ? {
//                         position: 'relative',
//                         float: 'right',
//                         color:'red'
//                       }
//                     : {
//                       position: 'relative',
//                       float: 'right',
//                       color:'purple'
//                   }
//               }
//           >
//         {/*renders parent text */}
//             {ele.text}

//             {/*checks horizontal or vertical option prop */}

//             {props.option === 'horizontal' && (
//               <div ref={dropDown.current[index - 1]}>

//           {/*children rendered in ul// checks isShown state*/}
//           {/*if isShown === 'services' or 'contact'*/}
//               <ul
//                 className={
//                   orientation === 'RTL'
//                     ? styles.menuitemNestedVRTL
//                     : styles.menuitemNestedV
//                 }

//                 style={
//                   menuHeader[ele.text]
//                     ? {
//                         position: 'absolute',
//                         display: 'block',
//                         float: 'right',
//                         backgroundColor: 'green'
//                       }
//                     : { display: 'none' }
//                 }
//               >
//                 {ele?.children.map((subEl) => {
//                   // console.log('path from subEl', subEl.path)
//                   return (
//                     <li>
//                       <Link to={subEl.path} style={{textDecoration:'none', color:'yellow'}}>
//                         {subEl.text}
//                       </Link>
//                     </li>
//                   )
//                 })}
//               </ul>
//               </div>
//             )}
//             {props.option === 'vertical' && (
//               <div ref={dropDown.current[index - 1]}>
//               <ul
//                 className={
//                   orientation === 'RTL'
//                     ? styles.menuitemNestedHRTL
//                     : styles.menuitemNestedH
//                 }
//                 style={
//                   menuHeader === ele.text
//                     ? {
//                         position: 'absolute',
//                         display: 'block',
//                         float: 'right',
//                         backgroundColor: "gainsboro"
//                       }
//                     : { display: 'none' }
//                 }
//               >
//                 {ele?.children.map((subEl) => (
//                   // eslint-disable-next-line react/jsx-key

//                   <li><Link to={subEl.path} style={{textDecoration:'none',color:'black'}}>{subEl.text}</Link></li>
//                 ))}
//               </ul>
//               </div>
//             )}
//           </li>
//         </>
//       )
//   })

//   return (

//       <div>
//         {props.option === 'horizontal' && props.orientation === 'ltr' && (
//           <div className='navbarH'>
//             <nav>
//               <ul
//                 className={styles.menuitemH}
//                 style={props.theme ? { backgroundColor: props.theme } : {}}
//               >
//                 <img src={icon} alt='menu icon' width='100' height='100' />
//                 {inputList}
//                 <div
//                   style={
//                     props.search
//                       ? { display: 'inline - block' }
//                       : { display: 'none' }
//                   }
//                   className={styles.searchBarH}
//                 >
//               <input
//                     className={styles.searchBarHInput}
//                     type='text'
//                     placeholder='HELLO FROM SEARCH'
//                     value={input}
//                     onChange={handleChange}
//                   />

//                   <button
//                     type='submit'
//                     className={styles.formsubmit}
//                     onClick={handleSubmit}
//                   >
//                     Go
//                   </button>
//                   </div>


//               </ul>

//             </nav>
//           </div>
//         )}

//         {/* no search input in horizontal in rtl */}
//         {props.option === 'horizontal' && props.orientation === 'rtl' && (
//           <div className='navbar'>
//             <ul
//               className={styles.menuitemHRTL}
//               style={props.theme ? { backgroundColor: props.theme } : {}}
//             >
//               <img src={icon} alt='menu icon' width='50px' height='40px' />
//               {inputList}
//             </ul>
//           </div>
//         )}


//       {/* doesn't make sense to have vertical AND ltr */}

//         {props.option === 'vertical' && props.orientation === 'ltr' && (
//           <div className='navbarV'>
//             <nav>
//               <ul
//                 className={styles.menuitemV}
//                 style={props.theme ? { backgroundColor: props.theme } : {}}
//               >
//                 <img src={icon} alt='menu icon' width='50px' height='40px' />
//                 <br />
//                 <div
//                   style={
//                     props.search
//                       ? { display: 'inline - block' }
//                       : { display: 'none' }
//                   }
//                   className='searchBarV'
//                 >
//                   <input
//                     className='searchBarVInput'
//                     type='text'
//                     placeholder='Enter to Search'
//                     value={input}
//                     onChange={handleChange}
//                   />
//                   <br />
//                     <button type='submit' onClick={handleSubmit}>
//                       Go
//                     </button>
//                 </div>
//                 {inputList}
//               </ul>
//             </nav>
//           </div>
//         )}
//       </div>
//   )
// }
// export default NavBar;