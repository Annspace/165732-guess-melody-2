import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from "./reducer";
import mockData from "./mocks/questions";

const init = () => {
  const store = createStore(reducer);
  const genreQuestions = mockData.questionsData.filter((item) => item.type === `genre`);
  // const artistQuestions = mockData.questionsData.filter((item) => item.type === `artist`);
  ReactDOM.render(
      <Provider store={store}>
        <App
          maxErrors={mockData.gameSettings.errors}
          time={mockData.gameSettings.time}
          questions={genreQuestions}/>
      </Provider>,
      document.getElementById(`root`));
};
init();
