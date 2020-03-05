import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from "react-router-dom"
import FirstRoute from './routes/firstRoute'
import SecondRoute from './routes/secondRoute'

export interface passProps {
  name: String,
  age: Number,
  numArray: Array<Number>
}

var myProps: passProps = {
  name: 'hello',
  age: 6,
  numArray: [0, 6, 3, 2, 5, 4]
}

const App: React.FC<passProps> = () => {
  return (
    <>
      <Router>
        <Route exact path="/" render={ () => <FirstRoute user={myProps}/> } />
        <Route exact path="/second" render={() => <SecondRoute /> } />  
      </Router>
    </>
  );
}

export default App;
