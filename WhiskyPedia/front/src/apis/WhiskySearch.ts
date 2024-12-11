import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export interface Review {
  reviewID: number;
  userEmail: string;
  review: string;
  whiskyID: string;
}

export interface Whisky {
  whiskyID: string;
  whiskyName: string;
  whiskyOrigin: string;
  whiskyDistiller: string;
  whiskyType: string;
  whiskyFlavour: string;
  // whiskyDescription: string;
  // whiskyImage: string;
  // reviews: Review[];
}

export const getAllWhiskies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/whisky`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the whiskies!', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Response error:', error.response.data);
    }
    throw error;
  }
};

export const getWhiskyById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/whisky/${id}`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the whisky details!', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Response error:', error.response.data);
    }
    throw error;
  }
};

export const getAllReviews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the reviews!', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Response error:', error.response.data);
    }
    throw error;
  }
};

export const createReview = async (review: Review) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reviews`, review);
    return response.data;
  } catch (error) {
    console.error('There was an error creating the review!', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Response error:', error.response.data);
    }
    throw error;
  }
};