import React from 'react'

const Button = ({ type, className, title, icon, onClick }) => {
  return (
    <button type={ type } className={ className } title={ title } onClick={ onClick }>{ icon }</button>
  )
}

export default Button