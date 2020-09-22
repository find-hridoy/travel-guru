import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HotelInformation from './Components/HotelInformation/HotelInformation';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/place/:placeTitle">
            <Booking />
          </Route>
          <Route path="/signup">
            <CreateAccount />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/hotel">
            <HotelInformation />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
