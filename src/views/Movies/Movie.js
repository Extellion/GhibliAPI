import React from "react";
import { connect } from "react-redux";

import { getMovie } from "../../redux/actions/movies";

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getMovie, match } = this.props;
    console.log(match && match.params && match.params.id);
    const movieId = match && match.params && match.params.id;
    getMovie(movieId);
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movie: state.movie.movie,
  isLoadingMovie: state.movie.isLoadingMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie(id) {
    dispatch(getMovie(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
