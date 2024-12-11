import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';

type SearchCategory = '전체검색' | '위스키' | '증류소' | '지역' | '종류' | '맛/향기';

interface SearchBarProps {
  onSearch: (searchTerm: string, category: SearchCategory) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchCategory, setSearchCategory] = useState<SearchCategory>('전체검색');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const popularKeywords: Record<SearchCategory, string[]> = {
    '전체검색': ['Keyword1', 'Keyword2', 'Keyword3'],
    '위스키': ['Whisky1', 'Whisky2', 'Whisky3'],
    '증류소': ['Distillery1', 'Distillery2', 'Distillery3'],
    '지역': ['Region1', 'Region2', 'Region3'],
    '종류': ['Type1', 'Type2', 'Type3'],
    '맛/향기': ['Flavor1', 'Flavor2', 'Flavor3']
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleFocus = () => {
    setDropdownOpen(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
      setDropdownOpen(false);
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm, searchCategory);
    navigate('/search', { state: { searchTerm, searchCategory } });
  };

  return (
    <div className="search-bar">
      <h1>위스키 한 잔?</h1>
      <div className="search-categories">
        {Object.keys(popularKeywords).map((category) => (
          <button
            key={category}
            onClick={() => setSearchCategory(category as SearchCategory)}
            className={searchCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="search-input-container">
        <div className="search-input" onFocus={handleFocus} onBlur={handleBlur} ref={dropdownRef}>
          <input
            type="text"
            placeholder={`Search ${searchCategory.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
          {isDropdownOpen && (
            <div className="search-dropdown">
              <div className="dropdown-content">
                <p>인기 검색어:</p>
                <ul>
                  {popularKeywords[searchCategory].map((keyword) => (
                    <li key={keyword}>{keyword}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;