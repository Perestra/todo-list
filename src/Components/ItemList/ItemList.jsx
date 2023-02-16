import React from 'react'
import '../../Styles/ItemList.css'
import CheckBox from '../CheckBox/CheckBox'
import { AiFillDelete } from 'react-icons/ai'
import Button from '../Button/Button'


const ItemList = ({ taskName, deleteItemList }) => {
  return (
   <li className='itemList'>
    <div className='item'>
      <CheckBox taskName={ taskName }/>
    </div>
    <Button type='button' className='delete' title='Remover' onClick={ deleteItemList } icon={ <AiFillDelete className='deleteIcon' /> }/>
   </li>
  )
}

export default ItemList