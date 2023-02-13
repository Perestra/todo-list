import React from 'react'
import '../../Styles/List.css'
import ItemList from '../ItemList/ItemList'

const List = ({ list, deleteItemList}) => {
  return (
    <section className='list_section'>
      <div className='list_container'>
        <ul className='list'>
          {list.map((item) => <ItemList key= { item.id } taskName= { item.taskName } deleteItemList={ () => deleteItemList(item.id) } />)}
        </ul>
      </div>
    </section>
  )
}

export default List