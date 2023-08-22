
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import About from './pages/About';
import Contact from './pages/Contact';



import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
