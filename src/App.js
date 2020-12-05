import React, { useState, useEffect } from 'react';
import './App.css';
import NewTask from './component/NewTask/newTask.js'
import TodoList from './component/TodoList/todoList.js'
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap');
</style>

const App = () => {
  const [dataTasks, setDataTasks] = useState(JSON.parse(localStorage.getItem('DataTasks')));

  const onClickAdd = (dataTasks) => {
    if(dataTasks){
      setDataTasks(dataTasks)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <NewTask onClickAdd={onClickAdd}/>
        <TodoList dataTasks={dataTasks}/>
      </div>
      
    </div>
  );
}

export default App;
