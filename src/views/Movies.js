import React from "react";
import { connect } from "react-redux";

import { getMovies } from "../redux/actions/movies";

class Movies extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    const { movies } = this.props;

    return <div>Movies</div>;
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
