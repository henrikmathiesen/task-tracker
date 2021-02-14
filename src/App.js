import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';
import { getTasks, submitTask, deleteTask, setReminderOnTask } from './util/tasks';

const App = () => {

  const [tasks, setTasks] = useState(getTasks());
  const [showAddTask, toggleShowAddTask] = useState(false);

  const onAddClick = () => {
    toggleShowAddTask(!showAddTask);
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

  // TODO: toggle form with animation. Height. Bootstraps classes for width. Also WCAG, no tab to form

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={onAddClick} />
      <div className={`App-add-task ${showAddTask ? 'App-show-add-task' : 'App-hide-add-task'}`}>
        <AddTask onSubmit={onSubmit} showAddTask={showAddTask} />
      </div>
      {!!tasks.length ? <Tasks tasks={tasks} onDeleteClick={onDeleteClick} onReminderDoubleClick={onReminderDoubleClick} /> : <p>No tasks to show. Add one?</p>}
    </div>
  );
}

export default App;
