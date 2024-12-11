// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import UpdatedWhisky from '../components/UpdatedWhisky';
import WeekTopSearch from '../components/WeekTopSearch';
import './pages.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('전체검색');

  const handleSearch = (term: string, category: string) => {
    setSearchTerm(term);
    setSearchCategory(category);
    navigate('/search', { state: { searchTerm: term, searchCategory: category } });
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <UpdatedWhisky />
      <WeekTopSearch />
    </div>
  );
};

export default HomePage;