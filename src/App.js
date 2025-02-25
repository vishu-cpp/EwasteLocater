
import Main from './module/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Faq from './module/Faq';
import Ewaste from './module/Ewaste';

import { Login } from './module/Login';
import Calculator from './module/Calculator.jsx';



function App() {

  const handleform = (e) =>
  {
    console.log(e)
  }
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='/Faq' element={<Faq/>}></Route>
        <Route exact path='/e-waste' element={<Ewaste/>}></Route>
        <Route exact path='/calculator' element={<Calculator/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
    
      </Routes> 
    </Router>

  );
}

export default App;
