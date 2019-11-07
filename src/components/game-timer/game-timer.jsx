import React, {PureComponent} from "react";
import Timer from "../../timer";
import PropTypes from "prop-types";

class GameTimer extends PureComponent {
  constructor(props) {
    super(props);
    const {seconds, onEndTimer} = props;
    this.timer = null;
    this.createTimer = new Timer(seconds, onEndTimer);
    this.state = {
      secondsLeft: seconds,
    };
  }

  timeSeconds = (seconds) => {
    const timeSeconds = (((seconds * 1000) % 60000) / 1000).toFixed(0);
    return (timeSeconds < 10 ? `0` : ``) + timeSeconds;
  };

  timeMinutes = (seconds) => {
    return Math.floor(seconds / 60);
  };

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.state.secondsLeft > 0) {
        this.createTimer.tick();
        if (this.createTimer.getTime() > 0) {
          this.setState({
            secondsLeft: this.createTimer.getTime(),
          });
        }
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{this.timeMinutes(this.state.secondsLeft)}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{this.timeSeconds(this.state.secondsLeft)}</span>
      </div>
    );
  }
}

GameTimer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onEndTimer: PropTypes.func.isRequired
};

export default GameTimer;
