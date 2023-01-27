import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from '../../../serviceAPI/serviceAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewDetails, setReviewDetails] = useState([]);

  useEffect(() => {
    getMovieReview(movieId).then(data => {
      if (typeof data !== 'object') {
        return;
      }
      const filteredData = data.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
      setReviewDetails(filteredData);
    });
  }, [movieId]);

  return (
    <ul>
      {reviewDetails.length !== 0
        ? reviewDetails.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "We don't have any reviews for this movie."}
    </ul>
  );
};

export default Reviews;
