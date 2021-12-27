import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="nav">
        <Link to="/">
          <h1>brookfield corp</h1>
        </Link>
        <ul>
          <Link to="/latest">
            <li>latest</li>
          </Link>
          <a target="_blank" href="https://brookfieldcorp.bandcamp.com"><li>bandcamp</li></a>
          <li>recent listens</li>
          <a target="_blank" href="https://rateyourmusic.com/~neesam"><li>rym</li></a>
        </ul>
      </div>
    )
  }
}

export default Nav;