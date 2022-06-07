import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './TaskForm.css';

const TaskForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');



    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    };



    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveTaskData(enteredTask);
        setEnteredTask('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-task__controls'>
                <div className='new-task__control'>
                    <label>Add Task</label>
                    <input
                        type='text'
                        value={enteredTask}
                        placeholder='Add a Task here'
                        onChange={taskChangeHandler}
                        required
                    />
                </div>
            </div>
            <div className='new-task__actions'>
                <button type='submit'><span><FontAwesomeIcon icon={faPlus} /></span></button>
            </div>
        </form>
    );
};

export default TaskForm;
