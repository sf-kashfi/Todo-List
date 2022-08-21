import React, { useState } from 'react';
import Card from '../UI/Card';
import './TaskItem.css';

const TaskItem = (props) => {
    let checkedTask = <del>{props.task}</del>;
    const [checked, setChecked] = useState(true);
    const checkHandler = () => {
        setChecked(!checked);
        console.log('checkBox were tiked!!!');
    };

    const [closeIcon, setCloseIcon] = useState(false);

    const closeButtonHandler = () => {
        setCloseIcon(current => !current);
    };

    const deleteTaskHandler = () => {
        props.deleteTask(props.task);
        console.log(props.task);
    };

    return (
        <Card className='task-item'>
            <div className='task-item__description' onMouseOver={closeButtonHandler} onMouseOut={closeButtonHandler}>
                <input onChange={checkHandler} type='checkbox' id='todoTask'></input>
                <label for='todoTask'><h2>{checked ? props.task : checkedTask}</h2></label>
                <div className='close' style={{ 'display': closeIcon ? 'block' : 'none' }} onClick={deleteTaskHandler}><span>x</span></div>
            </div>
        </Card>
    );
}

export default TaskItem;
