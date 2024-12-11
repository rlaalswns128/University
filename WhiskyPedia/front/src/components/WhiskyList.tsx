import React, { useEffect, useState } from 'react';
import WhiskyCard from './WhiskyCard';
import { getAllWhiskies, Whisky } from '../apis/WhiskySearch';
import './components.css';

interface WhiskyListProps {
  searchTerm: string;
  searchCategory: string;
}

const WhiskyList: React.FC<WhiskyListProps> = ({ searchTerm, searchCategory }) => {
  const [whiskies, setWhiskies] = useState<Whisky[]>([]);
  const [filteredWhiskies, setFilteredWhiskies] = useState<Whisky[]>([]);

  useEffect(() => {
    const fetchWhiskies = async () => {
      try {
        const whiskyData = await getAllWhiskies();
        const formattedData = whiskyData.map((whisky: Whisky) => ({
          ...whisky,
          // whiskyImage: whisky.whiskyImage || '/path/to/default/image.jpg' // Adjust as necessary
        }));
        setWhiskies(formattedData);
        setFilteredWhiskies(formattedData);
      } catch (error) {
        console.error('Error fetching whiskies:', error);
      }
    };

    fetchWhiskies();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredWhiskies(
        whiskies.filter(whisky =>
          whisky.whiskyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          whisky.whiskyOrigin.toLowerCase().includes(searchTerm.toLowerCase()) ||
          whisky.whiskyDistiller.toLowerCase().includes(searchTerm.toLowerCase()) ||
          whisky.whiskyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          whisky.whiskyFlavour.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredWhiskies(whiskies);
    }
  }, [searchTerm, whiskies]);

  return (
    <div className="whisky-list">
      {filteredWhiskies.length > 0 ? (
        filteredWhiskies.map(whisky => (
          <WhiskyCard key={whisky.whiskyID} whisky={whisky} />
        ))
      ) : (
        <p>검색 결과 없음</p>
      )}
    </div>
  );
};

export default WhiskyList;