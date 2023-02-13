import React from 'react'
import '../../Styles/Date.css'

const Date = ({ weekDay, date, month }) => {
  return (
    <header className='header'>
        <div className='data_date'>
            <h1><strong>{ weekDay}</strong></h1>
            <div className='current_date'>
              <span><strong>{ date }</strong></span>
              <span>{ month }</span>
            </div>
        </div>
    </header>
  )
}

export default Date