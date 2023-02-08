import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Css/Banner.css';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">

        <Button
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant="outlined">
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
