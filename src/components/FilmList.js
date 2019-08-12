import React, {Component} from 'react';
import Film from './Film'

class FilmList extends Component {
  render() {
    return(
      <div className="film-list">
        <Film><a href="https://www.imdb.com/title/tt1560220/?ref_=rlm">Zombieland: Double Tap</a></Film>
        <Film><a href="https://www.imdb.com/title/tt6398184/?ref_=rlm">Downton Abbey</a></Film>
      </div>

    )
  }
}

export default FilmList;
