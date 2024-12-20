import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchPet from './pages/SearchPet';
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <div className="flex flex-grow">
            <div className="flex-grow overflow-y-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/searchpet" element={<SearchPet />} /> {/* SearchPet sayfası */}
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
