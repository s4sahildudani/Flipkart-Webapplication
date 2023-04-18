
import './App.css';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom';

import Login from './pages/Login';
import Contactus from './pages/Contactus';

function App() {

  

  return (
    <div className="App">
       
       <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Contactus />}  />
       </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
