import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { check } from './http/userAPI';
import { setAuthAction, setUserAction } from './store/userReducer';

import Header from './components/header/Header';
import AppRouter from './components/router/AppRouter';

import './App.css';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    check().then(data => {
      dispatch(setUserAction(data));
      dispatch(setAuthAction(true));
    })
  }, [])

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
