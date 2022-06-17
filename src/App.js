import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { Provider } from 'react-redux';
//component
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import Mint from './components/Mint';
import Rooms from './components/Rooms';
import 'bootstrap/dist/css/bootstrap.min.css';
import Battle from './components/Battle';

import setAuthToken from './utils/setAuthToken';
//action
import { loadUser } from './redux/auth/actions';
//redux
import store from './redux/store';

function App() {

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    store.dispatch({ type: 'LOGOUT' });
  }
  store.dispatch(loadUser());

  // log user out from all tabs if they log out in one tab
  window.addEventListener('storage', () => {
    if (!localStorage.token) store.dispatch({ type: 'LOGOUT' });
  });

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/home" element={ <Home /> } />
          <Route exact path="/mint" element={ <Mint /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/rooms" element={ <Rooms /> } />
          <Route exact path="/battle/:id" element={ <Battle /> } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
