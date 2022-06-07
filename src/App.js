import React, { useState } from 'react';
import Header from './components/Header/Header';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import './App.css';

const DUMMY_TASKS = [
  {
    id: 'e1',
    task: 'Sleep',
  },
  {
    id: 'e3',
    task: 'Go around',

  },
  {
    id: 'e4',
    task: 'Go home',

  },
];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };


  return (
    <div className='container'>
      <Header tasknumber={tasks.length} />
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} />
    </div>
  );
};

export default App;
