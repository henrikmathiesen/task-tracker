import Header from './components/Header';
import './App.css';

const App = () => {

  const onAddClick = () => { 
    console.log('App, onAddClick');
  };

  return (
    <div className="container py-sm-3 App-container">
      <Header onAddClick={ onAddClick } />
    </div>
  );
}

export default App;
