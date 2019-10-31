import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      playing: false,
      progress: 0,
    };
  }
  componentDidMount() {
    const audio = this.audioRef.current;
    audio.onplay = () => {
      this.setState({
        playing: true,
      });
    };
    audio.onpause = () => {
      this.setState({
        playing: false,
      });
    };
    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });
  }

  componentDidUpdate() {
    const {playing} = this.props;
    if (playing) {
      this.audioRef.current.play();
    } else {
      this.audioRef.current.pause();
    }
  }

  componentWillUnmount() {
    this.audioRef.current.oncanplaythrough = null;
    this.audioRef.current.onplay = null;
    this.audioRef.current.onpause = null;
    this.audioRef.current.ontimeupdate = null;
    this.audioRef.current.src = ``;
  }

  render() {
    const {src, playing, onClickTrackButton} = this.props;
    return (
      <>
        <button onClick={onClickTrackButton} className={`track__button track__button--${playing ? `pause` : `play`}`} type="button"/>
        <div className="track__status">
          <audio ref={this.audioRef} src={src}/>
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  onClickTrackButton: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};

export default AudioPlayer;
