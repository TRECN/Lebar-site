import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Footer from './Components/Pages/Footer/Footer';
import Products from './Components/Pages/Products/Products';
import Services from './Components/Pages/Services/Services';
import SignUp from './Components/Pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Products' component={Products}></Route>
          <Route path='/Services' component={Services}></Route>
          <Route path='/Sign-Up' component={SignUp}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
