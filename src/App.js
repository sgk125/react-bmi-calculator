import { Route, Routes } from 'react-router-dom';
import './App.css';
import BmiCalc from './Pages/BmiCalc';
import Home from './Pages/Home';
import RiskCalc from './Pages/RiskCalc';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-transparent row">
          <div className="col"><h1>welcome to kiosk</h1></div>
            <div className='col-1 float-end  mx-4'>
            <Link to='/' className='btn btn-light'>Exit</Link>
          </div>
      </nav>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/bmi' exact element={<BmiCalc />} />
          <Route path='/risk' exact element={<RiskCalc />} />
        </Routes>
      
    </div>
  );
}

export default App;
