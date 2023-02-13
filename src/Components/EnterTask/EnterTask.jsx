import React, { useState } from 'react'
import '../../Styles/EnterTask.css'
import { TfiAlignLeft } from "react-icons/tfi";
import { HiOutlinePlus } from "react-icons/hi"

const EnterTask = ({ submitItem, taskLength }) => {
  const [task, setTask] = useState('')
  const submit = event => {
    event.preventDefault()
    submitItem(task)
    setTask('')
  }

  return (
    <section className='enterTask_section'>
        <form className='task_form' onSubmit={ submit }>
          <div className='input_form'>
            <TfiAlignLeft className='listIcon' />
            <input type="text" placeholder='Digite uma tarefa' 
              value={ task } 
              onChange={ event => setTask(event.target.value) } />
          </div>
          <button type="submit" title='Adicionar'>
            <HiOutlinePlus className='addIcon' />
          </button>
        </form>
        <div className='task_length'>
          <span><strong>03</strong></span>
          <p>Tarefas</p>
        </div>
    </section>
  )
}

export default EnterTask