import React, {Component} from 'react';
import Film from './Film'

class FilmList extends Component {
  render() {
    const filmnodes = this.props.data.map(film => {
      return (
        <Film><a href={film.url}>{film.name}</a></Film>
      );
    });

    return(
      <div className="film-list">
        {filmnodes}
        <button><a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases >></a></button>
      </div>

    )
  }
}

export default FilmList;
