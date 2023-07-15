import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '10cf95a18950474154f88572c16f5960';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovieDetailsById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchCastById = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};

export const fetchReviewsById = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};
