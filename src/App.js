import './App.css';
import Form from './Form';
import Home from './Home';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditBook from './EditBook';
import { useState, useEffect } from 'react';
import Nav from './Nav';

function App() {
  const [WindowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
      // console.log(WinowSize);
    });
  }, [WindowSize]);

  return (
    <BrowserRouter>
      <div className="App h-screen text-gray-700 text-lg">
        <Header />
        {WindowSize < 1024 && <div className='mobile'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/form">
              <Form url={'http://localhost:8000/library'} method={'POST'}/>
            </Route>
            <Route path="/edit/:id">
              <EditBook />
            </Route>
          </Switch>
        </div>}
        {WindowSize >= 1024 && <div className='pc container flex'>
          <Switch>
            <Route exact path="/">
              <Nav />
            </Route>
            <Route path="/form">
              <Form url={'http://localhost:8000/library'} method={'POST'}/>
            </Route>
            <Route path="/edit/:id">
              <EditBook />
            </Route>
          </Switch>
          <Home />
        </div>}
      </div>
    </BrowserRouter>
  );
}

export default App;
