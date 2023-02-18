import '../../Styles/CheckBox.css'

const CheckBox = ({ taskName, onChange, checked }) => {
  return (
    <label className="label_content">
      <input type="checkbox" onChange={ onChange } checked={ checked } />
      <span className="checkmark"></span>
      <p className='label_name'>{taskName}</p>
    </label>
  )
}

export default CheckBox