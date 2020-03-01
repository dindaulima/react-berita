import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import News from '../pages/News';

const Routes = () => {
  // const [isLoggedin, setIsLoggedin] = useState(false);

  const loginAction = () => {
    // setIsLoggedin(true);
    localStorage.setItem('isLoggedin', true);
  }

  return (
    <Router>
      <div>
        {/* Navigasi */}
        <ul>
          <li>
            <a href="/">Signup</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
        </ul>
        <hr />

        {/* Route terdaftar */}
        <Switch>
          <Route exact path="/">
            {/* Halaman per route */}
            <Signup />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/news">
            {localStorage.getItem('isLoggedin') ? 
              (
                <News />
              ) :
              (
                <Login />
              )
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;