import './App.css';
import Form from './Form';
import Home from './Home';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditBook from './EditBook';
import { useState, useEffect } from 'react';

function App() {
  const [WindowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
      // console.log(WindowSize);
    });
  }, [WindowSize])

  return (
    <BrowserRouter>
        <div className="App h-screen text-gray-700 text-lg">
          <Header />
          {WindowSize < 960 && <div className='mobile'>
            {/* Need to use react router to make a mobile menu */}
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
          {WindowSize >= 960 && <div className='pc container flex w-screen'>
            <Form url={'http://localhost:8000/library'} method={'POST'} className={'Form'} />
            <Home className={'content'} />
          </div>}
        </div>
    </BrowserRouter>
  );
}

export default App;
