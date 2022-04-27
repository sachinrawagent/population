
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Component/Home';
import { AddCountry } from './Component/AddCountry';
import { AddCity } from './Component/AddCity';
function App() {
 return (
    <>
    <div className='App'>
  <div style={{marginTop:"20px",display:"flex",justifyContent:"space-around"}}>
    <Link to='/'>Home</Link>
        <Link to='/add-country'>Add-Country</Link>
        <Link to='/add-city'> Add-City</Link>
        </div>
      <div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/add-country'} element={<AddCountry />} />
        <Route path={'/add-city'} element={<AddCity />} />
      </Routes>
     
        
      </div>

    </div>
    
    </>
  );
}

export default App;
