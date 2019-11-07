import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtist from "../guess-artist/guess-artist.jsx";
import GuessGenre from "../guess-genre/guess-genre.jsx";
import {incrementErrors, incrementQuestion, reset} from "../../actions";

class App extends PureComponent {
  constructor(props) {
    super(props);
    const {time, questions} = props;
    this.state = {
      time,
      questions,
      type: -1,
    };
  }
  clickStartHandler = () => {
    const {questions, questionNumber} = this.props;
    this.setState({
      type: questions[questionNumber].type,
    });
  };

  checkArtistsGameAnswers = (userAnswer) => {
    const {questions} = this.state;
    const {addError, questionNumber} = this.props;
    if (questions[questionNumber].song.artist !== userAnswer) {
      addError();
    }
  };

  checkGenreAnswers = (userAnswers) => {
    const {questions} = this.state;
    const {addError, questionNumber} = this.props;
    const correctAnswers = [];
    questions[questionNumber].answers.forEach((answer, index)=> {
      correctAnswers[index] = answer.genre === questions[questionNumber].genre;
    });

    if (JSON.stringify(correctAnswers) !== JSON.stringify(userAnswers)) {
      addError();
    }
  };

  clickAnswerHandler = () => {
    const {questions} = this.state;
    const {nextQuestion, questionNumber, resetGame} = this.props;
    if (questions.length - 1 > questionNumber) {
      nextQuestion();
    } else {
      resetGame();
      this.setState({
        type: -1,
      });
    }

  };
  endTimerHandler = () => {
    const {resetGame} = this.props;
    resetGame();
    this.setState({
      type: -1,
    });
  };
  render() {
    const {time, questions, type} = this.state;
    const {maxErrors, errors, questionNumber} = this.props;
    return (
      <>
        {type === `artist` && <GuessArtist
          screenIndex={questionNumber}
          questionText={questions[questionNumber].questionText}
          onClickAnswer={(userAnswer) => {
            this.checkArtistsGameAnswers(userAnswer);
            this.clickAnswerHandler();
          }
          }
          answers={questions[questionNumber].answers}
          song={questions[questionNumber].song}
          mistakes={errors}
          onEndTimer={this.endTimerHandler}/>
        }
        {type === `genre` && <GuessGenre
          screenIndex={questionNumber}
          questionText={questions[questionNumber].questionText}
          mistakes={errors}
          onEndTimer={this.endTimerHandler}
          onClickAnswer={(userAnswers) => {
            this.checkGenreAnswers(userAnswers);
            this.clickAnswerHandler();
          }
          }
          answers={questions[questionNumber].answers}/>
        }
        {type === -1 && <WelcomeScreen time={time} errors={maxErrors} onClickStart={this.clickStartHandler}/>}
      </>
    );
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  maxErrors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  addError: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  errors: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  questionNumber: state.questionNumber,
});

const mapDispatchToProps = (dispatch) => ({
  addError: () => dispatch(incrementErrors()),
  nextQuestion: () => dispatch(incrementQuestion()),
  resetGame: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
