import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GameMistakes extends PureComponent {
  render() {
    const {mistakes} = this.props;
    return (
      <div className="game__mistakes">
        {mistakes !== 0 && new Array(mistakes).fill(``).map((mistake, index) => <div key={index} className="wrong"/>)}
      </div>
    );
  }
}

GameMistakes.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default GameMistakes;
