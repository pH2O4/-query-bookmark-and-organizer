import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'

import Login from './componentes/Login'

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path="/" element={<Login/>} />
    </Routes>
    </div>

  );
}

export default App;
