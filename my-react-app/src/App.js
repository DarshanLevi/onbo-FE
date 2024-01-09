// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
