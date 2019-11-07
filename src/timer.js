class Timer {
  constructor(secondsLeft, callback) {
    this.time = secondsLeft;
    this.callback = callback;
  }

  tick = () => {
    if (this.time > 0) {
      this.time--;
      if (this.time === 0) {
        this.callback();
      }
    }
  };

  getTime = () => {
    return this.time;
  };

}

export default Timer;
