import React from 'react'
import '../../Styles/List.css'
import ItemList from '../ItemList/ItemList'

const List = ({ list, deleteItemList, isChecked }) => {
  return (
    <section className='list_section'>
      <div className='list_container'>
        <ul className='list'>
          {list?.map((item) => 
            <ItemList 
              key= { item.id } 
              taskName= { item.taskName } 
              deleteItemList={ () => deleteItemList(item.id) }
              isChecked={ e => isChecked(item.id, e.target.checked) }
              checked = { item.done }
            />
          )}
        </ul>
      </div>
    </section>
  )
}

export default List