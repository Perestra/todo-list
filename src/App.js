import React from "react";
import useLocalStorage from "use-local-storage";
import Date from "./Components/Date/Date";
import EnterTask from "./Components/EnterTask/EnterTask";
import List from "./Components/List/List";
import Developer from "./Components/Developer/Developer";

import { currentWeekDay, currentDate, currentMonth } from './Utils/getDate/get-date'

const App = () => {
 
  const [tasks, setTasks] = useLocalStorage('Task', [])

  const addItem = task => {
    setTasks([...tasks, task])
  }

  const deleteItem = id => {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }
  
  return (
    <div className="App">
      <main className="main_content">
        <Date weekDay={ currentWeekDay } date={ currentDate } month={ currentMonth } />
        <EnterTask submitItem={ addItem } tasksLength={ tasks?.length || 0 } />
        <List list={ tasks } deleteItemList={ deleteItem }/>
        <Developer />
      </main>
    </div>
  );
}

export default App;
