import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import { getTasks, deleteTask } from './util/tasks';

const App = () => {

  const [tasks, setTasks] = useState(getTasks());

  const onAddClick = () => {
    console.log('App, onAddClick');
  };

  const onDeleteClick = (id) => {
    setTasks(deleteTask(tasks, id));
  };

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={onAddClick} />
      <Tasks tasks={tasks} onDeleteClick={onDeleteClick} />
    </div>
  );
}

export default App;
