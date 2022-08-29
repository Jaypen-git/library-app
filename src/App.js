import './App.css';
import Form from './Form';

function App() {
  const title = 'Library Application'
  return (
    <div className="App">
      <Form />
      <div className='content'>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default App;
