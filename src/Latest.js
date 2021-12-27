import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import albums from './LatestAlbums'

class Latest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

  let albumsArr;

  albumsArr = albums.map(item => (
    <div className="latestAlbum">
      <a href={item.url} target="_blank"><img src={item.image}></img></a>
      <h3>{item.name}</h3>
    </div>
  ))
    return (
      <Router>
        <div id="latestContainer">
          <div id="albumsContainer">
          {albumsArr}
          </div>
        </div>
      </Router>
    )
  }
}

export default Latest;