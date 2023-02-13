import React from 'react'
import '../../Styles/List.css'
import ItemList from '../ItemList/ItemList'

const List = ({ list }) => {
  return (
    <section className='list_section'>
      <div className='list_container'>
        <ul className='list'>
          {list.map((item, index) => <ItemList key={ index } taskName = { item }/>)}
        </ul>
      </div>
    </section>
  )
}

export default List