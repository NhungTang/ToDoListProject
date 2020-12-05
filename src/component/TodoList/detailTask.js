import React, { useState, useEffect } from 'react';
import './detailTask.css';
import DatePiority from '../DatePiority/datePiority'

const DetailTask = (props) => {
  const [dateTask, setDateTask] = useState(new Date());
  const [piorityTask, setPiorityTask] = useState('normal');
  const [dataTasks, setDataTasks] = useState([]); 
  const [title, setTitle] = useState(props.task.title)
  const [description, setDescription] = useState(props.task.description)

  const onClickGetDate = (startDate) => {
    setDateTask(startDate)
  }
  const onClickGetPiority = (id) => {
    setPiorityTask(id)
  }
  useEffect(() => {
    localStorage.setItem('DataTasks', JSON.stringify(dataTasks))
  }, [dataTasks])

  const onClickUpdate = () => {
    const idItem = props.task.id
    setDataTasks(JSON.parse(localStorage.getItem('DataTasks')))
    setDataTasks(prev => prev.filter(x =>  props.task.id != x.id ))
    setDataTasks(prev => prev.concat({'title': title, 
    'description': description, 'piority': piorityTask, 
    'date': dateTask, 'id': idItem }))
    props.onClickUpdateSuccess(title)
    alert('update success')
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className={props.isShowDetail ? "content-detail" : "hideDetail"}>
      <input className="title-task" type="text" value={title} id="title-detail" onChange={handleChange}></input>
      <div className="discription">
          <label for="description-input" className="title-label"  >Description</label>
          <textarea type="text" id="description-detail" type="text" value={description} onChange={handleChangeDescription}/>
      </div>
      <DatePiority task={props.task} 
                    isDetail={true} 
                    getDate={onClickGetDate} 
                    getPiority={onClickGetPiority}/>
      <button className="btn-update" onClick={onClickUpdate}>
        <span className="text-btn">Update</span>
      </button>
    </div>
  );
}
export default DetailTask;