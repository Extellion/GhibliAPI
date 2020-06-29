import React, { Children } from "react";
import { connect } from "react-redux";

import { getMovies } from "../redux/actions/movies";
import { NavLink } from "react-router-dom";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const { getMovies, movies } = this.props;
    //ensure we don't load movies if they are
    // already loaded
    if (movies && movies.length > 0) {
      return;
    }

    getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps && prevProps.movies) !== (this.props && this.props.movies)) {
      this.setState({
        movies: this.props.movies,
      });
    }
  }

  deleteMovie(index) {
    if (index) {
      const { movies } = this.state;
      const formattedMovies = movies.slice(0, index).concat(movies.slice(index + 1));
      this.setState({
        movies: formattedMovies,
      });
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {movies &&
            movies.length > 0 &&
            movies.map((movie, index) => {
              return (
                <li key={index}>
                  <button onClick={() => this.deleteMovie(index)}>delete</button>
                  <h3>
                    <NavLink to={`movie/${movie.id}`}>{movie.title}</NavLink>
                  </h3>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoadingMovies: state.movies.isLoadingMovies,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies() {
    dispatch(getMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
