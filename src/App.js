import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx';
// const HatsPage=()=>(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );



function App() {
  return (
    <div >
      <switch>
          <Route exact path='/' component={HomePage}></Route> 
          <Route path='/shop' component={ShopPage}></Route>  
      </switch>
    </div>
  );
}

export default App;
