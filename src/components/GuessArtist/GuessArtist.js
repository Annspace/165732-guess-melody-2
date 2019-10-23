import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GuessArtist extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {answers, questionText, onClickAnswer, screenIndex} = this.props;
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          {/* <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
          {/*  <circle className="timer__line" cx="390" cy="390" r="370"*/}
          {/*    style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>*/}
          {/* </svg>*/}

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">{questionText}</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"/>
              <div className="track__status">
                <audio/>
              </div>
            </div>
          </div>

          <form onChange={onClickAnswer} className="game__artist">
            {
              answers.map((answer, index) => {
                return (
                  <div className="artist" key={screenIndex + `-answer-` + index}>
                    <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-` + (index + 1)}
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
};

export default GuessArtist;
