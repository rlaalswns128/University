import React, { useEffect, useState } from 'react';
import { getAllWhiskies, Whisky } from '../apis/WhiskySearch';
import WhiskyCard from './WhiskyCard';
import './components.css';

const WeekTopSearch: React.FC = () => {
  const [whiskies, setWhiskies] = useState<Whisky[]>([]);

  useEffect(() => {
    const fetchWhiskies = async () => {
      try {
        const whiskiesData = await getAllWhiskies();
        setWhiskies(whiskiesData);
      } catch (error) {
        console.error('Error fetching most searched whiskies:', error);
      }
    };

    fetchWhiskies();
  }, []);

  return (
    <section className="most-searched-whisky">
      <h2>주간 인기 위스키</h2>
      <div className="whisky-list">
        {whiskies.map(whisky => (
          <WhiskyCard key={whisky.whiskyID} whisky={whisky} />
        ))}
      </div>
    </section>
  );
};

export default WeekTopSearch;