import React from 'react'
import '../../Styles/Date.css'

const Date = ({ weekDay, date, month }) => {
  return (
    <header className='header'>
        <div className='data_date'>
            <h1><strong>Sábado</strong></h1>
            <div className='current_date'>
              <span><strong>04</strong></span>
              <span>Fevereiro</span>
            </div>
        </div>
    </header>
  )
}

export default Date