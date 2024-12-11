import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import WhiskyPage from './pages/WhiskyPage';
import Header from './layouts/Header'; // Corrected the import path
import Footer from './layouts/Footer'; // Corrected the import path
import AuthProvider from 'context/AuthContext'; // Corrected import to match the component name

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/whisky/:id" element={<WhiskyPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;