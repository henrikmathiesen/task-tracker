import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import { getTasks, deleteTask, setReminderOnTask } from './util/tasks';

const App = () => {

  const [tasks, setTasks] = useState(getTasks());

  const onAddClick = () => {
    console.log('App, onAddClick');
  };

  const onDeleteClick = (id) => {
    setTasks(deleteTask(tasks, id));
  };

  const onReminderDoubleClick = (id) => {
    setTasks(setReminderOnTask(tasks, id));
  };

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={onAddClick} />
      {!!tasks.length ? <Tasks tasks={tasks} onDeleteClick={onDeleteClick} onReminderDoubleClick={onReminderDoubleClick} /> : <p>No tasks to show. Add one?</p>}
    </div>
  );
}

export default App;
