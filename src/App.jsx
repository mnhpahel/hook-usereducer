import React from 'react';
import './App.css';
import GetPostEffect from './components/GetPostEffect';
import GetPostReducer from './components/GetPostReducer';

function App() {

  return (
    <>
      <p style={{color: 'red'}}>Using useEffect and fetch data</p>
      <GetPostEffect/>
      <p style={{color: 'red'}}>Using useReducer and fetch data</p>
      <GetPostReducer/>
    </>
  )
}

export default App
