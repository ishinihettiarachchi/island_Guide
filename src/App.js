import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Attractions from './pages/Attractions';
import Place from './pages/Place';
import Plan from './pages/plan';
import Accomadations from './pages/Accomadations';
import { Navigate } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn()) {
      return <Navigate to={'/login'} replace />;
    }
    return children;
  };
  

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
            <Route path="/plan" element={<Plan/>} />
            <Route path="/attractions" element={<Attractions/>}></Route>
            <Route path="/attractions/:placeID" element={<Place/>}/>
            {/* <Route path="/accomadations" 
              element={isLoggedIn ? (
                <Accomadations />
              ) : (
                Navigate('/') // Use the Navigate component here
              )} /> */}
           <Route
              path="/accomadations"
              element={isLoggedIn? (
                <Accomadations />
              ) : (
                <Navigate to={'/login'} /> // Ensure 'to' is provided correctly
              )}
            />

          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
