import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import mockData from "./mocks/questions";

const init = () => {
  const genreQuestions = mockData.questionsData.filter((item) => item.type === `genre`);
  // const artistQuestions = mockData.questionsData.filter((item) => item.type === `artist`);
  ReactDOM.render(<App errors={mockData.gameSettings.errors}
    time={mockData.gameSettings.time} questions={genreQuestions}/>,
  document.getElementById(`root`));
};
init();
