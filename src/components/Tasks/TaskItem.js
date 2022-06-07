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
    return (
        <Card className='task-item'>
            <div className='task-item__description'>
                <input onChange={checkHandler} type='checkbox' id='todoTask'></input>
                <label for='todoTask'><h2>{checked ? props.task : checkedTask}</h2></label>
            </div>
        </Card>
    );
}

export default TaskItem;
