import React from 'react'
import '../../Styles/CheckBox.css'

const CheckBox = ({ taskName }) => {
  return (
    <label className="label_content">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <p>{taskName}</p>
    </label>
  )
}

export default CheckBox