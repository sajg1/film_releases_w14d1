import React, {Component} from 'react';
import FilmList from '../components/FilmList';

class FilmBox extends Component {
  render() {
    return(

      <div className="film-box">
        <h1>Upcoming Films</h1>
        <FilmList />
      </div>
    )

  }
}

export default FilmBox;
