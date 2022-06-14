import api from '../../utils/api';
import { toast } from 'react-toastify';
import {
    SET_ADDRESS,
    SET_NETWORKID,
    SET_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../action_types';

// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: 'AUTH_ERROR'
    // });
  }
};

// Login User
export const login = formData => async dispatch => {

  try {
    const res = await api.post('/auth/login', formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
    }

    dispatch({
      type: 'LOGIN_FAIL'
    });
  }
};

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('/auth/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => 
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })  
      );
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

  export const logout = () => ({ type: LOGOUT });
  
  export const setAddress = (address) => ({
    type: SET_ADDRESS, 
    payload: { address }
  });
  
  export const setNetworkId = (networkId) => ({
    type: SET_NETWORKID,
    payload: { networkId }
  });
  
  export const setError = (error) => ({
    type: SET_ERROR,
    payload: { error }
  });

  //cotact admin
  