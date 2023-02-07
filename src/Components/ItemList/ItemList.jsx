import React from 'react'
import '../../Styles/ItemList.css'
import { AiFillDelete } from 'react-icons/ai'


const ItemList = ({ taskName }) => {
  return (
   <li className='itemList'>
        <div className='item'>
            <input type="checkbox" name="done" id="done" />
            <p>Maçã</p>
        </div>
        <button type='button' className='delete'><AiFillDelete className='deleteIcon' /></button>
   </li>
  )
}

export default ItemList