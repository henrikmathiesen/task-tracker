import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';
import { getTasks, submitTask, deleteTask, setReminderOnTask } from './util/tasks';

const App = () => {

  const [tasks, setTasks] = useState(getTasks());

  const onAddClick = () => {
    console.log('App, onAddClick');
  };

  const onSubmit = (task) => {
    setTasks(submitTask(tasks, task));
  };

  const onDeleteClick = (id) => {
    setTasks(deleteTask(tasks, id));
  };

  const onReminderDoubleClick = (id) => {
    setTasks(setReminderOnTask(tasks, id));
  };

  // TODO: toggle form with animation. Height. Bootstraps classes for width

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={onAddClick} />
      <AddTask onSubmit={onSubmit} />
      {!!tasks.length ? <Tasks tasks={tasks} onDeleteClick={onDeleteClick} onReminderDoubleClick={onReminderDoubleClick} /> : <p>No tasks to show. Add one?</p>}
    </div>
  );
}

export default App;
