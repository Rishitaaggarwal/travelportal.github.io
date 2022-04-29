import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Offers from './components/Offers';
import Home from './components/Home';
import Login from './components/Login';
import Recent from './components/Recent'
import Example from './components/Example';
import Cart from './components/ShoppingCart/Cart';

function App() {

  return (
    // <>
    //   <Cart />
    // </>
    <Router>

      <><Header /></>
      <Switch>
        <Route path="/cart" component={Cart} />

        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/offers" component={Offers} />
        <Route path="/recent" component={Recent} />
        <Route path="/example" component={Example} />

        <Route path="/" component={Home} />

      </Switch>



    </Router>
  );
}

export default App;
