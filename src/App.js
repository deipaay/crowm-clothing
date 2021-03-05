import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage=()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
);



function App() {
  return (
    <div >
      <switch>
          <Route exact path='/' component={HomePage}></Route> 
          <Route path='/hats' component={HatsPage}></Route>  
      </switch>
    </div>
  );
}

export default App;
