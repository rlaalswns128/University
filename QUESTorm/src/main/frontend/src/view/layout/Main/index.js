import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useUserStore } from '../../../store';
import Box from '@mui/material/Box';
import Navigation from '../../Navigation';
import Authentification from '../../Authentification';
import Board from '../Board';
import { signInApi } from '../../../apis';
import Editor from '../../../components/Editor';
import '@tldraw/tldraw/tldraw.css';

export default function MainLayout() {
  const { user } = useUserStore();
  const [cookies] = useCookies();
  const [boardResponse, setBoardResponse] = useState('');

  const getBoard = async (token) => {
    try {
      const response = await axios.get('https://localhost:3000/board', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBoardResponse(response.data);
    } catch (error) {
      console.error('Error fetching board:', error);
      setBoardResponse('');
    }
  };

  useEffect(() => {
    const token = cookies.token;
    if (token) {
      getBoard(token);
    }
  }, []);

  return (
    <>
      <Navigation />
      {boardResponse ? <Board /> : <Authentification />}
    </>
  );
}
