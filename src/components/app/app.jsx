import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GuessArtist from "../guess-artist/guess-artist.jsx";
import GuessGenre from "../guess-genre/guess-genre.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    const {time, errors, questions} = props;
    this.state = {
      time,
      errors,
      questions,
      type: -1,
      questionNumber: 0,
    };
  }
  clickStartHandler = () => {
    const {questions} = this.props;
    const {questionNumber} = this.state;
    this.setState({
      type: questions[questionNumber].type,
    });
  };
  clickAnswerHandler = () => {
    const {questions, questionNumber} = this.state;
    if (questions.length - 1 > questionNumber) {
      this.setState((prevState) => {
        return {
          ...prevState,
          questionNumber: questionNumber + 1,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          type: -1,
          questionNumber: 0,
        };
      });
    }
  };
  render() {
    const {time, errors, questions, type, questionNumber} = this.state;
    return (
      <>
        {type === `artist` && <GuessArtist
          screenIndex={questionNumber}
          questionText={questions[questionNumber].questionText}
          onClickAnswer={this.clickAnswerHandler}
          answers={questions[questionNumber].answers}
          song={questions[questionNumber].song}/>
        }
        {type === `genre` && <GuessGenre
          screenIndex={questionNumber}
          questionText={questions[questionNumber].questionText}
          onClickAnswer={this.clickAnswerHandler}
          answers={questions[questionNumber].answers}/>
        }
        {type === -1 && <WelcomeScreen time={time} errors={errors} onClickStart={this.clickStartHandler}/>}
      </>
    );
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
