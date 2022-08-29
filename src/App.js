import './App.css';
import Form from './Form';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Form />
        <Home />
      </div>
    </div>
  );
}

export default App;
