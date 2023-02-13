import React from 'react'
import '../../Styles/ItemList.css'
import { AiFillDelete } from 'react-icons/ai'


const ItemList = ({ taskName, funcDeleteBtn }) => {
  return (
   <li className='itemList'>
        <div className='item'>
            <input type="checkbox" name="done" id="done" />
            <p>{ taskName }</p>
        </div>
        <button type='button' className='delete' onClick={funcDeleteBtn} ><AiFillDelete className='deleteIcon' /></button>
   </li>
  )
}

export default ItemList