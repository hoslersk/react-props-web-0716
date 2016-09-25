import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        // <img src="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="Mad Max: Fury Road" />
        <img src={this.props.poster} alt={this.props.title} />
        // <h2>Mad Max: Fury Road</h2>
        <h2>{this.props.title}</h2>
        // <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png' // default in the event that we don't have an image to populate
};

const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  // <MovieCard />,
  <MovieCard
  title="Mad Max: Fury Road"
  poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
  // genres={['Action', 'Adventure', 'Science Fiction', 'Thriller']}
  genres={madMaxGenres}
  />,
  document.getElementById('main')
);
