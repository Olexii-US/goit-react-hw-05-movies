import axios from 'axios';
import { toast } from 'react-toastify';

///////// Trending movies
export const getTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=15514698987343768a5fd47afc677b65`;
  try {
    const response = await axios.get(url);
    console.log('getTrendingMovies', response.data.results);
    return response.data.results;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////// Movies finder
export const getSearchedMovies = async query => {
  console.log('query', query);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=15514698987343768a5fd47afc677b65&query=${query}&include_adult=false`;
  try {
    const response = await axios.get(url);
    console.log('getSearchedMovies', response.data.results);
    return response.data.results;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////// Movie details
export const getMovieDetails = async movieID => {
  console.log('query', movieID);

  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=15514698987343768a5fd47afc677b65&language=en-US`;
  try {
    const response = await axios.get(url);
    console.log('getMovieDetails', response.data);
    return response.data;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};
///////////////////////
// getMovieDetails(76600);
////////////////////

///////// Movie cast
export const getMovieCast = async movieID => {
  console.log('query', movieID);

  const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=15514698987343768a5fd47afc677b65&language=en-US`;
  try {
    const response = await axios.get(url);
    console.log('getMovieCast', response.data.cast);
    return response.data.cast;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};
///////////////
// getMovieCast(76600);
/////////////////

///////// Movie review
export const getMovieReview = async movieID => {
  console.log('query', movieID);

  const url = `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=15514698987343768a5fd47afc677b65&language=en-US`;
  try {
    const response = await axios.get(url);
    console.log('getMovieReview', response.data.results);
    return response.data.results;
  } catch (error) {
    return toast.error('Error occurred', error);
  }
};

///////////////
// getMovieReview(76600);
/////////////////
