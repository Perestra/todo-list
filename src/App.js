import React, { useState } from "react"
import Date from "./Components/Date/Date";
import EnterTask from "./Components/EnterTask/EnterTask";
import List from "./Components/List/List";
import Developer from "./Components/Developer/Developer";

import { currentWeekDay, currentDate, currentMonth } from './Utils/getDate/get-date'
// import { v4 as uuid } from 'uuid';

const App = () => {

  const [tasks, setTasks] = useState([])

  const deleteItem = item => {
    console.log('deletei', item)
  }

  const addItem = task => {
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <main className="main_content">
        <Date weekDay={ currentWeekDay } date={ currentDate } month={ currentMonth } />
        <EnterTask submitItem={ addItem }  />
        <List list={ tasks } />
        
        <Developer />
      </main>
    </div>
  );
}

export default App;
