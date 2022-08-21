import React from 'react';
import TaskItem from './TaskItem';
import Card from '../UI/Card';
import './Tasks.css';

const Tasks = (props) => {
    const deleteTaskHandler = (key) => {
        props.onDeleteTask(key);
    };
    return (
        <div>
            <Card className='tasks'>
                {props.items.map((t) => (
                    <TaskItem
                        key={t.id}
                        task={t.task}
                        deleteTask={deleteTaskHandler}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Tasks;
