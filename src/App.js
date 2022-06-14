import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
//component
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import Mint from './components/Mint';
import Rooms from './components/Rooms';
import 'bootstrap/dist/css/bootstrap.min.css';
import Battle from './components/Battle';

function App() {
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
          <Route exact path="/battle" element={ <Battle /> } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
