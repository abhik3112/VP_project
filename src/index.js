import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Assuming you moved the file here
import Home from './Pages/Home'; // Example of a page component
import About from './Pages/About'; // Example of another page component
import './index.css'; // This is where you'll import your CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/about" element={<Layout currentPageName="About"><About /></Layout>} />
        {/* Add more routes for other pages from your Pages folder */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);