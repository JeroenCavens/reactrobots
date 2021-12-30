import './App.css';
import {Switch, Route, BrowserRouter, NavLink} from 'react-router-dom'
import Robot from './components/robot/index'
import Home from './components/home';
import Categories from './components/category/index'
import Manufacturers from './components/manufacturer/index'


const Header = () => (
  <div>
      <ul className="header">
          <li><NavLink to="/" activeClassName='active'>Home</NavLink></li>
          <li><NavLink to="/robots" activeClassName='active'>Robots</NavLink></li>
          <li><NavLink to="/manufacturers" activeClassName='active'>Manufacturers</NavLink></li>
          <li><NavLink to="/categories" activeClassName='active'>Categories</NavLink></li>

      </ul>
  </div>
);

const Main = () => (
  <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/robots' component={Robot}/>
            <Route path='/manufacturers' component={Manufacturers}/>
            <Route path='/categories' component={Categories}/>
          </Switch>
  </div>
);

const App = () => {
  return (
      <BrowserRouter>
          <Header />
          <Main />
      </BrowserRouter>
  );
};

export default App;
