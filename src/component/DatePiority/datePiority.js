import React, { useState } from 'react';
import './datePiority.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import iconDrop from '../../icon/drop-down-arrow.svg';
import iconCalendar from '../../icon/calendar-interface-symbol-tool.svg';


const DatePiority = (props) => {
    const [startDate, setStartDate] = useState(props.isDetail ? new Date(props.task.date) : new Date());
    const [piority, setPiority] = useState(props.isDetail ? props.task.piority : 'Normal');
    const onChangeDate = (date) => {
        setStartDate(date)
        props.getDate(date);
    }
    if(props.isDetail && props.task.date){
        const date = new Date(props.task.date)
        // setStartDate(date)
        // console.log(new Date(props.task.date))
    }
    
    const onClickPiority = (event) =>{
        if( event.nativeEvent.path[0].id){
            props.getPiority( event.nativeEvent.path[0].id)
            setPiority(event.nativeEvent.path[0].id)
        }
    }

    return (
        <div className="date-piority">
            <div className="date">
                <label className="title-label">Due Date</label>
                <div className="date-icon">
                    <DatePicker selected={startDate} 
                            onChange={onChangeDate}/>
                    {/* <input type="date"/> */}
                    <span className="box-icon">
                        <img className="icon-calendar" src={iconCalendar}/>
                    </span>
                </div>
                
            </div>
            <div className="piority">
                <label className="title-label">Piority</label>
                <div className="dropdown-piority">
                    <div className="piority-icon">
                        <div className="choose">
                            <p className="text-choose">{piority}
                            <span className="icon-piority">
                                <img className="icon-dropdown" src={iconDrop}></img>
                            </span>
                            </p>
                            
                        </div>
                        <div className="list-piority">
                            <ul className="content-piority">
                                <li className="item-piority" id="low" onClick={onClickPiority}>Low</li>
                                <li className="item-piority" id="normal" onClick={onClickPiority}>Normal</li>
                                <li className="item-piority" id="high" onClick={onClickPiority}>High</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
export default DatePiority;