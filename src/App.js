import './App.css';
import Form from './Form';
import Home from './Home';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App h-screen text-gray-700 text-lg">
          <Header />
          <div>
            {/* Need to use react router to make a mobile menu */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
