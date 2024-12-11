import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import WhiskyList from '../components/WhiskyList';
import './pages.css';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>(location.state?.searchTerm || '');
  const [searchCategory, setSearchCategory] = useState<string>(location.state?.searchCategory || '전체검색');

  const handleSearch = (term: string, category: string) => {
    setSearchTerm(term);
    setSearchCategory(category);
  };

  useEffect(() => {
    if (location.state) {
      setSearchTerm(location.state.searchTerm);
      setSearchCategory(location.state.searchCategory);
    }
  }, [location.state]);

  return (
    <div className="whisky-search-page">
      <SearchBar onSearch={handleSearch} />
      <div className="whisky-results">
        <h2>동일한 검색어 "{searchTerm}"</h2>
        <WhiskyList searchTerm={searchTerm} searchCategory={searchCategory} />
      </div>
    </div>
  );
};

export default SearchPage;