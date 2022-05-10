import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'

import Login from './componentes/Login'
import Register from './componentes/Register'

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    </Routes>
    </div>

  );
}

export default App;
