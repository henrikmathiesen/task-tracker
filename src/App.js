import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {

  const onAddClick = () => { 
    console.log('App, onAddClick');
  };

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={ onAddClick } />
      <Tasks />
    </div>
  );
}

export default App;
