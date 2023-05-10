import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";
function Movie({ id, year, poster, title, summary, genres }) {
  return (
  <div className="movie">
    <Link to={`/movie/${id}`}>
    <img src={poster} alt={title} title={title} />
    <div className="movie__data">
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <ul className="movie__genres">
        {genres.map((genre, index) => (
          <li key={index} className="genres__genre">
            {genre}
          </li>
        ))}
      </ul>
      <p className="movie__summary">{summary.length > 250 ? `${summary.slice(0,180)}...` : summary} </p>
    </div>
  </Link>
</div>
);
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;