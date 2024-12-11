import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getWhiskyById, Whisky } from '../apis/WhiskySearch';
import WhiskyDesc from '../components/WhiskyDesc';
import './pages.css';

const WhiskyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [whisky, setWhisky] = useState<Whisky | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/'); // Redirect to home if no id is present
      return;
    }

    const fetchWhisky = async () => {
      try {
        const whiskyData = await getWhiskyById(id);
        setWhisky({
          whiskyID: whiskyData.whiskyID,
          whiskyName: whiskyData.whiskyName,
          whiskyOrigin: whiskyData.whiskyOrigin,
          whiskyDistiller: whiskyData.whiskyDistiller,
          whiskyType: whiskyData.whiskyType,
          whiskyFlavour: whiskyData.whiskyFlavour,
          // whiskyDescription: whiskyData.whiskyDescription,
          // whiskyImage: whiskyData.whiskyImage || '/path/to/default/image.jpg', // Adjust as necessary
          // reviews: whiskyData.reviews || [],
        });
      } catch (error) {
        console.error('Error fetching whisky details:', error);
      }
    };

    fetchWhisky();
  }, [id, navigate]);

  if (!whisky) return <div>Loading...</div>;

  return <WhiskyDesc whisky={whisky} />;
};

export default WhiskyPage;