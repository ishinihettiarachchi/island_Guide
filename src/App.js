
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
