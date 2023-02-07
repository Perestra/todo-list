import React from 'react'
import '../../Styles/List.css'
import ItemList from '../ItemList/ItemList'

const List = () => {
  return (
    <section className='list_section'>
        <div className='list_container'>
            <ul className='list'>
              <ItemList />
              <ItemList />
              <ItemList />
            </ul>
        </div>
    </section>
  )
}

export default List