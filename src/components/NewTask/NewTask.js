import React from 'react';

import TaskForm from './TaskForm';
import './NewTask.css';

const NewTask = (props) => {
    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            task: enteredTaskData,
            id: Math.random().toString()
        };
        props.onAddTask(taskData);
    };

    return (
        <div className='new-task'>
            <TaskForm onSaveTaskData={saveTaskDataHandler} />
        </div>
    );
};

export default NewTask;
