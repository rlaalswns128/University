import React, { useEffect, useState } from 'react';
import { getAllWhiskies, Whisky } from '../apis/WhiskySearch';
import WhiskyCard from './WhiskyCard';
import './components.css';

const UpdatedWhisky: React.FC = () => {
  const [whiskies, setWhiskies] = useState<Whisky[]>([]);

  useEffect(() => {
    const fetchWhiskies = async () => {
      try {
        const whiskiesData = await getAllWhiskies();
        setWhiskies(whiskiesData);
      } catch (error) {
        console.error('Error fetching newly updated whiskies:', error);
      }
    };

    fetchWhiskies();
  }, []);

  return (
    <section className="newly-updated-whisky">
      <h2>신상 위스키</h2>
      <div className="whisky-list">
        {whiskies.map(whisky => (
          <WhiskyCard key={whisky.whiskyID} whisky={whisky} />
        ))}
      </div>
    </section>
  );
};

export default UpdatedWhisky;