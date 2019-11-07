import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audioplayer/audioplayer.jsx';
import GameMistakes from '../game-mistakes/game-mistakes.jsx';
import GameTimer from "../game-timer/game-timer.jsx";

class GuessGenre extends PureComponent {
  constructor(props) {
    super(props);
    const {answers} = props;
    this.state = {
      playingTrack: -1,
      userAnswers: new Array(answers.length).fill(false),
    };
  }
  checkAnswerHandler = (index) => {
    const {userAnswers} = this.state;
    const updatedAnswers = userAnswers;
    updatedAnswers[index] = !updatedAnswers[index];
    this.setState({
      userAnswers: updatedAnswers,
    });
  };

  render() {
    const {answers, questionText, onClickAnswer, screenIndex, mistakes, onEndTimer} = this.props;
    const {userAnswers} = this.state;
    return (
      <section className="game game--genre">
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
          <form className="game__tracks"
            onSubmit={(event) => {
              event.preventDefault();
              this.setState({
                playingTrack: -1,
                userAnswers: new Array(answers.length).fill(false),
              });
              onClickAnswer(userAnswers);
            }
            }>
            {
              answers.map((answer, index) =>{
                return (
                  <div className="track" key={screenIndex + `-answer-` + index}>
                    <AudioPlayer
                      playing={this.state.playingTrack === index}
                      src={answer.src}
                      onClickTrackButton={() => {
                        this.setState({playingTrack: this.state.playingTrack === index ? -1 : index});
                      }}/>
                    <div className="game__answer">
                      <input className="game__input visually-hidden" type="checkbox" name="answer"
                        value={`answer-${index}`} id={`answer-${index}`} onChange={() => this.checkAnswerHandler(index)}/>
                      <label className="game__check" htmlFor={`answer-` + (index)}>Отметить</label>
                    </div>
                  </div>
                );
              })
            }
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenre.propTypes = {
  answers: PropTypes.array.isRequired,
  questionText: PropTypes.string.isRequired,
  onClickAnswer: PropTypes.func.isRequired,
  onEndTimer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
};

export default GuessGenre;
