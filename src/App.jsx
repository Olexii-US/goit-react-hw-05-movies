import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieCard } from './pages/MovieCard/MovieCard';
import { NotFound } from './components/NotFound/NotFound';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesID" element={<MovieCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </Layout>
  );
};
