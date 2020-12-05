import React, { useState, useEffect } from 'react';
import './newTask.css';
import DatePiority from '../DatePiority/datePiority'

const NewTask = (props) => {
    const [dateNewTask, setDateNewTask] = useState(new Date());
    const [piorityNewTask, setPiorityNewTask] = useState('normal');
    const [dataTasks, setDataTasks] = useState([]); 

    useEffect(() => {
      setDataTasks(JSON.parse(localStorage.getItem('DataTasks')))
    }, [])
    
    useEffect(() => {
      localStorage.setItem('DataTasks', JSON.stringify(dataTasks))
      document.querySelector('#add-new-task').value = ''
      document.querySelector('#description-input').value = ''
      props.onClickAdd(JSON.parse(localStorage.getItem('DataTasks')))

    }, [dataTasks])

    const onClickBtnAdd = () => {
      const idItem = Date.parse(new Date())
      setDataTasks(JSON.parse(localStorage.getItem('DataTasks')))
      if(document.querySelector('#add-new-task').value != ''){
        setDataTasks(prev => prev.concat({'title': document.querySelector('#add-new-task').value, 
        'description': document.querySelector('#description-input').value, 'piority': piorityNewTask, 
        'date': dateNewTask, 'id': idItem }))
      }
    }
    
    const onClickGetDate = (startDate) => {
      setDateNewTask(startDate)
    }
    const onClickGetPiority = (id) => {
      setPiorityNewTask(id)
    }

    return (
      <div className="content-new-task">
        <p className="title">New Task</p>
        <div className="add-input">
            <input type="text" placeholder="Add new task ..." id="add-new-task"/>
        </div>
        <div className="discription">
            <label for="description-input" className="title-label">Description</label>
            <textarea type="text" id="description-input"/>
        </div>
        <DatePiority getDate={onClickGetDate} 
                      getPiority={onClickGetPiority} 
                      isDetail={false} />
        <button className="btn-add" onClick={onClickBtnAdd}>
          <span className="text-btn">Add</span>
        </button>
        
      </div>
    );
}
export default NewTask;