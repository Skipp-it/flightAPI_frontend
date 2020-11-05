import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import SearchResult from './pages/SearchResult';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Recommendations from './components/Recommendations';

class App extends React.Component {
 render () {
  return (
    <div>
      <Router>

        <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/flights/:from/:to/:date' component={SearchResult}/>
            <Route path='/flights' component={SearchResult}/>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/checkout' component={Checkout}></Route>
          </Switch>

        
        <Footer/>
        <Copyright/>

      </Router>
    </div>
  );
}
}

export default App;
