import axios from 'axios';
import { toast } from 'react-toastify';

///////// Trending movies
export const getTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=15514698987343768a5fd47afc677b65`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////// Movies finder
export const getSearchedMovies = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=15514698987343768a5fd47afc677b65&query=${query}&include_adult=false`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////// Movie details
export const getMovieDetails = async movieID => {
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=15514698987343768a5fd47afc677b65&language=en-US`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////// Movie cast
export const getMovieCast = async movieID => {
  const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=15514698987343768a5fd47afc677b65&language=en-US`;
  try {
    const response = await axios.get(url);
    return response.data.cast;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////// Movie review
export const getMovieReview = async movieID => {
  const url = `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=15514698987343768a5fd47afc677b65&language=en-US`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};
