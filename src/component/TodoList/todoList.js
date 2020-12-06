import React, { useState, useEffect } from 'react';
import './todoList.css';
import ItemList from './itemList'


const TodoList = (props) => {
  const [dataTasks, setDataTasks] = useState([])
  const [searchData, setSearchData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [checkArr, setCheckArr] = useState([])
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('DataTasks'))) {
      setDataTasks(JSON.parse(localStorage.getItem('DataTasks')))
    }
  }, [props.dataTasks]) 

  useEffect(() => {
    localStorage.setItem('DataTasks', JSON.stringify(dataTasks))
  }, [dataTasks])

  const onClickRemove = (id) => {
    setDataTasks(prev => prev.filter(x => id != x.id ))
  }

  const onClickChoose = (id, state) => {
    if(state){
      setCheckArr(prev => prev.concat(id))
    }
    else{
      setCheckArr(prev => prev.filter(x => x != id))
    } 
  }
  const onClickRemoveAll = () => {
    checkArr.map(id =>{
      setDataTasks(prev => prev.filter(x => id != x.id ))
      setCheckArr(prev => prev.filter(x => x != id))
    })
    
  }
  const sortData = (a, b) => {
    const dateFirst = a.id
    const dateSecond = b.id
    return dateSecond - dateSecond

  }
  const node = document.getElementById("search");

  if(node){
    node.addEventListener("keyup", function(event) {
      if (event.key === "Enter" && this.value != '') {
        setSearchValue(this.value);
        setSearchData(dataTasks) 
        setSearchData(prev => prev.filter(x => x.title === this.value))
      }
      if(event.key === 'Backspace'){
        setSearchValue(this.value);
      }
    });
  }
  
  return (
    <div className="container-list">
      <div className="content-list">
        <p className="title">To Do List</p>
        <div className="search-input">
            <input type="text" placeholder="Search ..." id="search"/>
        </div>
        <div className="list">
          {searchData.length > 0 && searchValue != ''  ? searchData.map (task =><ItemList task={task} onClickRemove={onClickRemove}/>) : 
          dataTasks.map (task =><ItemList task={task} 
                                          onClickRemove={onClickRemove} 
                                          onClickChoose={onClickChoose}/>)
          } 
        </div>
      </div>
      <div className={ checkArr.length > 0 && dataTasks != 0 ? "bottom-list" : "hide-bottom"}>
          <p className="title-bulk">Bulk Action:</p>
          <div className="right-bottom">
            <button className="btn-done-bottom">
              <span className="text-btn-bottom">Done</span>
            </button>
            <button className="btn-remove-bottom" onClick={onClickRemoveAll}>
              <span  className="text-btn-bottom">Remove</span>
            </button>
          </div>
        </div>
    </div>
    
  );
}
export default TodoList;