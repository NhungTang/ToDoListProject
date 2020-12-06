import React, { useState } from 'react';
import './itemList.css';
import tick from '../../icon/tick.svg'
import DetailTask from './detailTask'

const ItemList = (props) => {
    const [title, setTitle] = useState(props.task.title)
    const [isShowDetail, setShowDetail] = useState(false)
    const [isCheck, setCheck] = useState(false)

    const onClickRemove = () => {
        props.onClickRemove(props.task.id)
    }
    const onClickDetail = () => {
        isShowDetail ? setShowDetail(false) : setShowDetail(true)
    }
    const onClickCheck = () => {
        
        if(isCheck ){
            setCheck(false)
            props.onClickChoose(props.task.id, false)
        }else{
            setCheck(true)
            props.onClickChoose(props.task.id, true)
        } 
    }
    const onClickUpdateSuccess = (title) => {
        setTitle(title)
    }
    return (
        <div className="container-item">
            <div className="content-item">
                <div className="left-content">
                    <div className="check" onClick={onClickCheck}>
                        <span className= {isCheck ? "icon-tick" : "hide-tick"}>
                            <img className="icon" src={tick}/>
                        </span>
                        <div className="check-box"></div>
                    </div>
                    <span className="name-task">{title}</span>
                </div>
                <div className="right-item">
                    <button className="btn-detail" onClick={onClickDetail}>
                        <span className="text-btn">Detail</span>
                    </button>
                    <button className="btn-remove" onClick={onClickRemove}>
                        <span className="text-btn">Remove</span>
                    </button>
                </div>
                
            </div>
            <DetailTask task={props.task} isShowDetail={isShowDetail} onClickUpdateSuccess={onClickUpdateSuccess}/>
        </div>
      
    );
}
export default ItemList;