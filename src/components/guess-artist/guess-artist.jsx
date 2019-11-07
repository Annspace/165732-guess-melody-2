import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import AudioPlayer from '../audioplayer/audioplayer.jsx';
import GameMistakes from "../game-mistakes/game-mistakes.jsx";
import GameTimer from "../game-timer/game-timer.jsx";

class GuessArtist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }
  render() {
    const {answers, questionText, onClickAnswer, screenIndex, song, mistakes, onEndTimer} = this.props;
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <GameTimer seconds={20} onEndTimer={onEndTimer}/>

          <GameMistakes mistakes={mistakes}/>
        </header>

        <section className="game__screen">
          <h2 className="game__title">{questionText}</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                src={song.src}
                onClickTrackButton={()=> {
                  this.setState({
                    playing: !this.state.playing
                  });
                }}
                playing={this.state.playing}
              />
            </div>
          </div>

          <form onChange={(e) => onClickAnswer(e.target.value)} className="game__artist">
            {
              answers.map((answer, index) => {
                return (
                  <div className="artist" key={screenIndex + `-answer-` + index}>
                    <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist}
                      id={`answer-` + (index + 1)}/>
                    <label className="artist__name" htmlFor={`answer-` + (index + 1)}>
                      <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                      {answer.artist}
                    </label>
                  </div>
                );
              })
            }
          </form>
        </section>
      </section>
    );
  }
}

GuessArtist.propTypes = {
  answers: PropTypes.array.isRequired,
  questionText: PropTypes.string.isRequired,
  onClickAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  song: PropTypes.object.isRequired,
  mistakes: PropTypes.number.isRequired,
  onEndTimer: PropTypes.func.isRequired,
};

export default GuessArtist;
