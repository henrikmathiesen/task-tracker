import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import { getTasks } from './util/tasks';

const App = () => {

  const [tasks, setTasks] = useState(getTasks());

  const onAddClick = () => { 
    console.log('App, onAddClick');
  };

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={ onAddClick } />
      <Tasks tasks={ tasks } />
    </div>
  );
}

export default App;
