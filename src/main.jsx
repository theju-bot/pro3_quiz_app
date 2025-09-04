import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/pro3_quiz_app//*" element={<App />} />
    </Routes>
  </Router>
);
