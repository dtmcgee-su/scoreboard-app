import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
      <header>
      <Stats players = { players }/>
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }

  Header.PropTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
  };

  //Makes sure title has 'Scoreboard' string
  Header.defaultProps = {
    title: 'Scoreboard'
  };

export default Header;