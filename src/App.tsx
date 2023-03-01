import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FavoritPage } from './pages/FavoritPage';
import { Navigate } from './components/Navigate';

function App() {
  return (
    <>
    <Navigate />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorit" element={<FavoritPage />} />
    </Routes>
    
      </>
  );
}

export default App;
