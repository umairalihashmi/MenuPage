import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import LoginSignup from './pages/login-signup/LoginSignup';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component

function App() {
  return (
    <div>
      <Router>
        {/* Include the Navbar component */}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
