import React from 'react';
import TaskItem from './TaskItem';
import Card from '../UI/Card';
import './Tasks.css';

const Tasks = (props) => {
    return (
        <div>
            <Card className='tasks'>
                {props.items.map((t) => (
                    <TaskItem
                        key={t.id}
                        task={t.task}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Tasks;
