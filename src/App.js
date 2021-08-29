import Navbar from './nav';
import Container from './container';
import './index.css'
import {useState} from 'react';
import{ BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import NewBlog from './NewBlog';
function App() {


  return (
    <Router>
      <div className="App" >
        <Navbar />
        <div className="container-media">
          <Switch>
          <Route exact path="/">
              <Container />
            </Route>
            <Route exact path="/NewBlog">
              <NewBlog />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
