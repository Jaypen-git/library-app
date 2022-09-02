import './App.css';
import Form from './Form';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <div className="App h-screen text-gray-700 text-lg">
      <Header />
      <div>
        {/* Need to use react router to make a mobile menu */}
        <Form />
        <Home />
      </div>
    </div>
  );
}

export default App;
