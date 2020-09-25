import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = (props) => {
  console.log(props.option)
  const inputList = props.value.map((ele) => (
    // eslint-disable-next-line react/jsx-key
    <li>
      <a href='#'>{ele}</a>
    </li>
  ))

  return (
    <div>
      {props.option === 'horizontal' && (
        <div className='navigationH'>
        <ul className={styles.menuitemH}>{inputList}</ul>
        </div>
      )}
      {props.option === 'vertical' && (
        <div className='navigationV'>
        <ul className={styles.menuitemV}>{inputList}</ul>
        </div>
      )}
    </div>
  )
}
